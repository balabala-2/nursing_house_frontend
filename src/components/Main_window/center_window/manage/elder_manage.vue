<template>
  <div>
    <el-row>
      <!-- 搜索框 -->
      <el-col :span="22">
        <el-input
          style="border-color: rgb(239, 79, 25)"
          v-model="search"
          placeholder="请输入内容"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      
      <el-col :span="2">
        <!-- 添加按钮 -->
        <el-button
          icon="el-icon-plus"
          @click="dialogFormVisible = true"
        ></el-button>
        <!-- 添加老人信息对话框1 -->
        <el-dialog
          title="添加老人"
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
            <el-form-item label="身份证：" :label-width="formLabelWidth">
              <el-input
                v-model="form.id_card"
                autocomplete="off"
                style="width: 220px"
              ></el-input>
            </el-form-item>
            <el-form-item label="出生日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.birthday"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="入院日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.in_time"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="出院日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.out_time"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="nextStep_to_2">下一步</el-button>
          </div>
        </el-dialog>

        <!-- 添加老人信息对话框2 -->
        <el-dialog
          title="添加老人"
          :visible.sync="dialogFormVisible1"
          width="30%"
        >
          <el-form :model="form">
            <el-form-item label="房间号：" :label-width="formLabelWidth">
              <el-input
                v-model="form.room_number"
                autocomplete="off"
                style="width: 80%"
              ></el-input>
            </el-form-item>
            <el-form-item label="监护人姓名：" :label-width="formLabelWidth">
              <el-input
                v-model="form.guardian_name"
                autocomplete="off"
                style="width: 80%"
              ></el-input>
            </el-form-item>
            <el-form-item label="监护人电话：" :label-width="formLabelWidth">
              <el-input
                v-model="form.guardian_tel"
                autocomplete="off"
                style="width: 80%"
              ></el-input>
            </el-form-item>
            <el-form-item label="关系：" :label-width="formLabelWidth">
              <el-input
                v-model="form.guardian_relation"
                autocomplete="off"
                style="width: 80%"
              ></el-input>
            </el-form-item>
            <el-form-item label="备注：" :label-width="formLabelWidth">
              <el-input
                v-model="form.remarks"
                autocomplete="off"
                style="width: 80%"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="preStep_to_1">上一步</el-button>
            <el-button type="primary" @click="nextStep_to_3">下一步</el-button>
          </div>
        </el-dialog>

        <!-- 添加老人信息对话框3 -->
        <el-dialog
          title="添加老人-人脸信息"
          :visible.sync="dialogFormVisible2"
          width="30%"
        >
          <div>
            插入图片？
            <!-- <img></img> -->
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="preStep_to_2">上一步</el-button>
            <el-button type="primary" @click="submit_form">提交</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
    <!-- 老人简要信息表格 -->
    <el-table
      :data="tableData"
      height="550"
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      style="width: 100%; margin-top: 1%"
    >
      <el-table-column label="头像" width="80">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <!--          <img :src=scope.row.src style="height: 50px;width: 50px">-->
          <el-avatar
            :size="50"
            :src="scope.row.url"
            style="margin-left: 10px"
          ></el-avatar>
        </template>
      </el-table-column>
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
      <el-table-column label="年龄" width="60">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.age }}</span>
        </template>
      </el-table-column>
      <el-table-column label="入院日期" width="150">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.in_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="房间号" width="90">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.room_number }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" width="400">
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
          <!--          <el-button-->
          <!--            size="mini"-->
          <!--            type="danger"-->
          <!--            @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      tableData: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      form: {
        id:0,
        name: "",
        gender: "",
        tel: "",
        id_card: "",
        birthday: "",
        in_time: "",
        out_time: "",
        face_feature: "",
        room_number: "",
        guardian_name: "",
        guardian_tel: "",
        guardian_relation: "",
        remarks: "",
        create_manager_id: 0
      },
      formLabelWidth: "120px",
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
    };
  },
  //初始化
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
      this.$router.push({ path: `/mainwindow/detail/elder_detail` ,query: {elder_info:row}});
    },
    handleCancel() {
      visible = false;
    },
    handleDelete(index, row) {
      console.log(index, row);
      // , urlParam: row.id
      this.$api.del_elderly_info({}, {type: "json", urlParam: row.id}).then((resopnse) => {
        if(resopnse.state === 1){
          this.success_box("删除成功");
          this.tableData.splice(index, 1);
        }else{
          this.fail_box(resopnse.msg);
        }
      })
      
    },
    //下一步：到第二页
    nextStep_to_2() {
      this.dialogFormVisible = false;
      this.dialogFormVisible1 = true;
    },

    //下一步：到第三页
    nextStep_to_3() {
      this.dialogFormVisible1 = false;
      this.dialogFormVisible2 = true;
    },

    //输入信息完成，提交输入
    submit_form() {
      //应该有一个给form.face_feature赋值的操作
      //传给后端的数据
      let param = {
        id: this.tableData[this.tableData.length - 1].id + 1,
        name: this.form.name,
        gender: this.form.gender == "男" ? 1 : 0,
        tel: this.form.tel,
        id_card: this.form.id_card,
        birthday: this.form.birthday.getFullYear() + '-' + (this.form.birthday.getMonth() + 1) + '-' + this.form.birthday.getDate(),
        in_time: this.form.in_time.getFullYear() + '-' + (this.form.in_time.getMonth() + 1) + '-' + this.form.in_time.getDate(),
        out_time: this.form.out_time.getFullYear() + '-' + (this.form.out_time.getMonth() + 1) + '-' + this.form.out_time.getDate(),
        face_feature: this.form.face_feature,
        room_number: this.form.room_number,
        guardian_name: this.form.guardian_name,
        guardian_tel: this.form.guardian_tel,
        guardian_relation: this.form.guardian_relation,
        remarks: this.form.remarks,
        create_manager_id: this.form.create_manager_id
      };
      this.$api
        .add_elderly_info(param , { type: "json" })
        .then((response) => {
          if (response.state === 1) {
            let add_old_msg = {
              id: param.id,
              url: "", //头像：还没有
              name: param.name,
              tel: param.tel,
              id_card: param.id_card,
              birthday: param.birthday,
              address: "记得让后端传",
              gender: param.gender == 1 ? "男" : "女",
              age: this.doHandleYear() - parseInt(param.birthday.slice(0, 4)),
              in_time: param.in_time,
              out_time: param.out_time,
              face_feature: "unknown",
              room_number: param.room_number,
              guardian_name: param.guardian_name,
              guardian_tel: param.guardian_tel,
              guardian_relation: param.guardian_relation,
              addition: param.remarks,
              create_manager_id:param.create_manager_id
            };
            this.tableData.push(add_old_msg);
            this.dialogFormVisible2 = false;
          } else {
            this.fail_box(response.msg);
          }
        });
    },
    preStep_to_1() {
      this.dialogFormVisible = true;
      this.dialogFormVisible1 = false;
    },
    preStep_to_2() {
      this.dialogFormVisible1 = true;
      this.dialogFormVisible2 = false;
    },

    //初始化页面
    init() {
      this.$api.elderly_info({}, { type: "json" }).then((response) => {
        console.log(response);
        if (response.state === 1) {
          //查询成功
          this.tableData = [];
          for (let i = 0; i < response.elderly_info.length; i++) {
            let val = response.elderly_info[i];//后端传给前端的数据
            // console.log();
            let param = {
              id: val.id,
              name: val.name,
              gender: val.gender == 1 ? "男" : "女",
              tel: val.tel,
              id_card: val.id_card,
              birthday: val.birthday,
              in_time: val.in_time,
              out_time: val.out_time,
              face_feature: val.face_feature,
              room_number: val.room_number,
              guardian_name: val.guardian_name,
              guardian_tel: val.guardian_tel,
              guardian_relation: val.guardian_relation,
              remarks: val.remarks,
              create_manager_id:val.create_manager_id,
              address: "记得让后端传",
              age: this.doHandleYear() - parseInt(val.birthday.slice(0, 4)),
              url: "", //头像：还没有
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
