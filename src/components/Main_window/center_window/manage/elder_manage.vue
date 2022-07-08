<template>
  <div>
    <el-row>
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
        <el-button
          icon="el-icon-plus"
          @click="dialogFormVisible = true"
        ></el-button>
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
              <el-select v-model="form.sex" placeholder="请选择性别">
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
                v-model="form.id_Card"
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
                v-model="form.in_date"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="出院日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.out_date"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <!--            <el-form-item label="房间号：" :label-width="formLabelWidth">-->
            <!--              <el-input v-model="form.room" autocomplete="off"></el-input>-->
            <!--            </el-form-item>-->
            <!--            <el-form-item label="监护人姓名：" :label-width="formLabelWidth">-->
            <!--              <el-input v-model="form.guardian_name" autocomplete="off"></el-input>-->
            <!--            </el-form-item>-->
            <!--            <el-form-item label="监护人电话：" :label-width="formLabelWidth">-->
            <!--              <el-input v-model="form.guardian_tel" autocomplete="off"></el-input>-->
            <!--            </el-form-item>-->
            <!--            <el-form-item label="与被监护人的关系：" :label-width="formLabelWidth">-->
            <!--              <el-input v-model="form.guardian_relation" autocomplete="off"></el-input>-->
            <!--            </el-form-item>-->
            <!--            <el-form-item label="备注：" :label-width="formLabelWidth">-->
            <!--              <el-input v-model="form.remarks" autocomplete="off"></el-input>-->
            <!--            </el-form-item>-->
            <!--            <el-form-item label="管理员ID：" :label-width="formLabelWidth">-->
            <!--              <el-input v-model="form.manager_id" autocomplete="off"></el-input>-->
            <!--            </el-form-item>-->
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="nextStep">下一步</el-button>
          </div>
        </el-dialog>
        <el-dialog
          title="添加老人"
          :visible.sync="dialogFormVisible1"
          width="30%"
        >
          <el-form :model="form">
            <el-form-item label="房间号：" :label-width="formLabelWidth">
              <el-input
                v-model="form.room"
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
            <el-button @click="preStep">上一步</el-button>
            <el-button type="primary" @click="nextStep1">下一步</el-button>
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
          <span style="margin-left: 10px">{{ scope.row.sex }}</span>
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
          <span style="margin-left: 10px">{{ scope.row.in_date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="房间号" width="90">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.room }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" width="400">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.addition }}</span>
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
      dialogFormVisible1: false,
      dialogFormVisible: false,
      form: {
        name: "",
        sex: "",
        tel: "",
        in_date: "",
        out_date: "",
        birthday: "",
        id_Card: "",
        face_feature: "",
        room: "",
        guardian_name: "",
        guardian_tel: "",
        guardian_relation: "",
        remarks: "",
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
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: `/mainwindow/detail/elder_detail` });
    },
    handleCancel() {
      visible = false;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1);
    },
    nextStep() {
      // console.log(this.form);
      this.dialogFormVisible = false;
      this.dialogFormVisible1 = true;
    },
    nextStep1() {
      // console.log(this.form);
      this.dialogFormVisible1 = false;
      // let param = {
      //   name: this.form.name,
      //   gender: this.form.sex == "male" ? 1 : 0,
      //   tel: this.form.tel,
      //   id_card: this.form.id_Card,
      //   birthday: this.form.birthday.getFullYear() + '-' + (this.form.birthday.getMonth() + 1) + '-' + this.form.birthday.getDate(),
      //   in_time: this.form.in_date.getFullYear() + '-' + (this.form.in_date.getMonth() + 1) + '-' + this.form.in_date.getDate(),
      //   out_time: this.form.out_date.getFullYear() + '-' + (this.form.out_date.getMonth() + 1) + '-' + this.form.out_date.getDate(),
      //   face_feature: this.form.face_feature,
      //   room_number: this.form.room,
      //   guardian_name: this.form.guardian_name,
      //   guardian_tel: this.form.guardian_tel,
      //   guardian_relation: this.form.guardian_relation,
      //   remarks: this.form.remarks,
      //   create_manager_id: 0
      // };
      // let param = {
      //   name: this.form.name,
      //   gender: 1,
      //   tel: "18800120157",
      //   id_card: "2",
      //   birthday: "2022-7-4",
      //   in_time: "2022-7-4",
      //   out_time: "2022-6-17",
      //   face_feature: "",
      //   room_number: "1",
      //   guardian_name: "2",
      //   guardian_tel: "3",
      //   guardian_relation: "4",
      //   remarks: "5",
      //   create_manager_id: 1,

      // };
      let param = {
        name: "test",
        gender: 1,
        tel: "str",
        id_card: "13021541",
        birthday: "2002-07-08",
        in_time: "2021-07-08",
        out_time: "2022-07-08",
        face_feature: "str",
        room_number: "11",
        guardian_name: "string",
        guardian_tel: "string",
        guardian_relation: "string",
        remarks: "string",
        create_manager_id: 1,
      };
      console.log(param);
      this.$api
        .add_elderly_info(param , { type: "json" })
        .then((response) => {
          if (response.state === 1) {
            let add_old_msg = {
              url: "", //头像：还没有
              name: param.name,
              tel: param.tel,
              id_card: param.id_card,
              birthday: param.birthday,
              address: "记得让后端传",
              sex: param.gender == 1 ? "男" : "女",
              age: this.doHandleYear() - parseInt(param.birthday.slice(0, 4)),
              in_date: param.in_time,
              out_date: param.out_time,
              face_feature: "unknown",
              room: param.room_number,
              guardian_name: param.guardian_name,
              guardian_tel: param.guardian_tel,
              guardian_relation: param.guardian_relation,
              addition: param.remarks,
            };
            this.tableData.push(add_old_msg);
          } else {
            this.fail_box(response.msg);
          }
        });
    },

    nextStep2() {
      //完成传图片后将nextStep1中的传参过程迁移到此
    },
    preStep() {
      console.log(this.form);
      this.dialogFormVisible = true;
      this.dialogFormVisible1 = false;
    },

    //初始化页面
    init() {
      this.$api.elderly_info({}, { type: "json" }).then((response) => {
        console.log(response);
        if (response.state === 1) {
          //查询成功
          this.tableData = [];
          for (let i = 0; i < response.elderly_info.length; i++) {
            let val = response.elderly_info[i];
            // console.log();
            let param = {
              url: "", //头像：还没有
              name: val.name,
              tel: val.tel,
              id_card: val.id_card,
              birthday: val.birthday,
              address: "记得让后端传",
              sex: val.gender == 1 ? "男" : "女",
              age: this.doHandleYear() - parseInt(val.birthday.slice(0, 4)),
              in_date: val.in_time,
              out_date: val.out_time,
              face_feature: "unknown",
              room: val.room_number,
              guardian_name: val.guardian_name,
              guardian_tel: val.guardian_tel,
              guardian_relation: val.guardian_relation,
              addition: val.remarks,
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
