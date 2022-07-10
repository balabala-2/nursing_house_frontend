<template>
  <div>
    <el-row>
      <!-- 搜索按钮 -->
      <el-col :span="22">
        <el-input
          style="border-color: rgb(239, 79, 25)"
          v-model="search"
          placeholder="请输入内容"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="onSearch"
          ></el-button>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button
          icon="el-icon-plus"
          @click="dialogFormVisible = true"
        ></el-button>
        <el-dialog
          title="添加义工"
          :visible.sync="dialogFormVisible"
          width="30%"
        >
          <el-form :model="form">
            <el-form-item label="姓名：" :label-width="formLabelWidth">
              <el-input
                v-model="form.name"
                autocomplete="off"
                style="width: 220px"
              ></el-input>
            </el-form-item>
            <el-form-item label="性别：" :label-width="formLabelWidth">
              <el-select v-model="form.gender" placeholder="请选择性别">
                <!--                style="width: 560px">-->
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="电话：" :label-width="formLabelWidth">
              <el-input
                v-model="form.tel"
                autocomplete="off"
                style="width: 220px"
              ></el-input>
            </el-form-item>
            <el-form-item label="教育水平：" :label-width="formLabelWidth">
              <el-input
                v-model="form.education"
                autocomplete="off"
                style="width: 220px"
              ></el-input>
            </el-form-item>
            <el-form-item label="入职日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.entry_time"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="离职日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.resignation_time"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="备注：" :label-width="formLabelWidth">
              <el-input
                v-model="form.remarks"
                autocomplete="off"
                style="width: 220px"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="nextStep">下一步</el-button>
          </div>
        </el-dialog>

        <el-dialog
          title="添加义工-人脸信息"
          :visible.sync="dialogFormVisible1"
          width="30%"
        >
          <div>
            插入图片？
            <!-- <img></img> -->
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="preStep">上一步</el-button>
            <el-button type="primary" @click="submit_form">提交</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      height="550"
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      style="width: 100%; margin-top: 1%"
    >
      <el-table-column label="姓名" width="90">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="60">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话" width="150">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.tel }}</span>
        </template>
      </el-table-column>
      <el-table-column label="学历" width="90">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.education }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" width="550">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.remarks }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >详情</el-button
          >
          <el-popconfirm
            title="确定删除当前信息吗？"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button size="mini" type="danger" slot="reference"
              >删除</el-button
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      search: "",
      tableData: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        id: 0,
        name: "",
        gender: "",
        tel: "",
        education: "",
        face_feature: "",
        remarks: "",
        entry_time: "",
        resignation_time: "",
        create_manager_id: 0,
      },
      formLabelWidth: "120px",
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    //成功弹出框
    success_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'success'
      });
    },
    //失败弹出框
    fail_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: `/mainwindow/detail/vol_detail`, query:{volunteer_info: row} });
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$api.del_volunteer_info({}, {type: "json", urlParam:row.id}).then((response)=>{
        if(response.state === 1){
          this.success_box("删除成功");
          this.tableData.splice(index,1);
        }else{
          this.fail_box(response.msg);
        }
      })
    },
    preStep() {
      this.dialogFormVisible = true;
      this.dialogFormVisible1 = false;
    },
    nextStep() {
      this.dialogFormVisible = false;
      this.dialogFormVisible1 = true;
    },
    submit_form() {
      let param = this.form;
      param.gender = this.form.gender == "mail" ? 1 : 0;
      param.id =
        this.tableData.length == 0
          ? 1
          : this.tableData[this.tableData.length - 1].id + 1;
      param.entry_time =
        this.form.entry_time.getFullYear() +
        "-" +
        (this.form.entry_time.getMonth() + 1) +
        "-" +
        this.form.entry_time.getDate();
      param.resignation_time =
        this.form.resignation_time.getFullYear() +
        "-" +
        (this.form.resignation_time.getMonth() + 1) +
        "-" +
        this.form.resignation_time.getDate();
      //TODO param.create_manager_id =
      console.log(param);
      this.$api.add_volunteer_info(param, { type: "json" }).then((response) => {
        if (response.state === 1) {
          let add_msg = param;
          add_msg.gender = param.gender == 1 ? "男" : "女";
          this.tableData.push(add_msg);
          this.dialogFormVisible1 = false;
        } else {
          this.fail_box(response.msg);
        }
      });
    },
    onSearch() {},
    init() {
      this.$api.volunteer_info({}, { type: "json" }).then((response) => {
        console.log(response);
        if (response.state === 1) {
          //查询成功
          this.tableData = [];
          for (let i = 0; i < response.volunteer_info.length; i++) {
            let val = response.volunteer_info[i];
            // console.log();
            let param = {
              url: "", //头像：还没有
              id: val.id,
              name: val.name,
              address: "记得让后端传",
              gender: val.gender == 1 ? "男" : "女",
              tel: val.tel,
              education: val.education,
              face_feature: val.face_feature,
              entry_time: val.entry_time,
              resignation_time: val.resignation_time,
              remarks: val.remarks,
              create_manager_id: val.create_manager_id,
            };
            this.tableData.push(param);
          }
        }
      });
    },

    //获取年月
    doHandleDate() {
      var myDate = new Date();
      var tYear = myDate.getFullYear();
      var tMonth = myDate.getMonth();

      var m = tMonth + 1;
      if (m.toString().length == 1) {
        m = "0" + m;
      }
      return tYear + "-" + m;
    },

    //获取年份
    doHandleYear(tYear) {
      var myDate = new Date();
      var tYear = myDate.getFullYear();

      return tYear;
    },
    doHandleMonth() {
      var myDate = new Date();
      var tMonth = myDate.getMonth();

      var m = tMonth + 1;
      if (m.toString().length == 1) {
        m = "0" + m;
      }
      return m;
    },
  },
};
</script>

<style scoped>
@import "../../../../assets/css/page.css";
</style>
