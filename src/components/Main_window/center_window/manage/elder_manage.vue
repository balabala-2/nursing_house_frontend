<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-button @click="select_all" plain>全部</el-button>
        <el-button type="primary" @click="select_in">在院</el-button>
        <el-button type="success" @click="select_out" plain>出院</el-button>
      </el-col>
      <!-- 搜索框 -->
      <el-col :span="17">
        <el-input style="border-color: rgb(239, 79, 25)" v-model="search" placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>

      <el-col :span="2">
        <!-- 添加按钮 -->
        <el-button icon="el-icon-plus" @click="dialogFormVisible = true"></el-button>
        <!-- 添加老人信息对话框1 -->
        <el-dialog title="添加老人" :visible.sync="dialogFormVisible" width="30%">
          <el-form :model="form" ref="form1" :rules="rules">
            <el-form-item label="姓名：" :label-width="formLabelWidth" prop="name">
              <el-input v-model="form.name" autocomplete="off" style="width: 65%"></el-input>
            </el-form-item>
            <el-form-item label="性别：" :label-width="formLabelWidth" prop="gender">
              <el-select v-model="form.gender" placeholder="请选择性别">
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="电话：" :label-width="formLabelWidth" prop="tel">
              <el-input v-model="form.tel" autocomplete="off" style="width: 65%"></el-input>
            </el-form-item>
            <el-form-item label="身份证：" :label-width="formLabelWidth" prop="id_card">
              <el-input v-model="form.id_card" autocomplete="off" style="width: 65%"></el-input>
            </el-form-item>
            <el-form-item label="出生日期：" :label-width="formLabelWidth" prop="birthday">
              <el-date-picker
                v-model="form.birthday"
                type="date"
                placeholder="选择日期"
                style="width: 65%"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="入院日期：" :label-width="formLabelWidth" prop="in_time">
              <el-date-picker
                v-model="form.in_time"
                type="date"
                placeholder="选择日期"
                style="width: 65%"
              ></el-date-picker>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="nextStep_to_2">下一步</el-button>
          </div>
        </el-dialog>

        <!-- 添加老人信息对话框2 -->
        <el-dialog title="添加老人" :visible.sync="dialogFormVisible1" width="30%">
          <el-form :model="form" ref="form2">
            <el-form-item label="房间号：" :label-width="formLabelWidth" prop="room_number">
              <el-input v-model="form.room_number" autocomplete="off" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="监护人姓名：" :label-width="formLabelWidth" prop="guardian_name">
              <el-input v-model="form.guardian_name" autocomplete="off" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="监护人电话：" :label-width="formLabelWidth" prop="guardian_tel">
              <el-input v-model="form.guardian_tel" autocomplete="off" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="关系：" prop="guardian_relation" :label-width="formLabelWidth">
              <!-- <el-input v-model="form.guardian_relation" :disabled="isUse"></el-input> -->
              <el-select v-model="form.guardian_relation" placeholder="请选择" style="width: 80%">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="备注：" :label-width="formLabelWidth" prop="remarks">
              <el-input v-model="form.remarks" autocomplete="off" style="width: 80%"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="preStep_to_1">上一步</el-button>
            <el-button type="primary" @click="nextStep_to_3">下一步</el-button>
          </div>
        </el-dialog>

        <!-- 添加老人信息对话框3 -->
        <el-dialog title="添加老人-人脸信息" :visible.sync="dialogFormVisible2" width="30%">
          <div>
            <img :src="face_feature_img_url" width="100%" />
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
      :data="tables()"
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :row-style="tableRolStyle"
      :cell-style="{ 'text-align': 'center' }"
      style="width: 99%; margin-top: 1%; height:130%"
      :default-sort="{ prop: 'in_time', order: 'descending' }"
    >
      <el-table-column label="头像" width="150%">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <!--          <img :src=scope.row.src style="height: 50px;width: 50px">-->
          <el-avatar :size="50" :src="scope.row.face_feature" style="margin-left: 10px"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="120%">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>状态: {{ scope.row.workState }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag
                size="medium"
                :type="scope.row.workState == '在院' ? '' : 'info'"
              >{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="100%">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄" width="100%" prop="age" sortable></el-table-column>
      <el-table-column label="入院日期" width="170%" prop="in_time" sortable>
        <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.in_time }}</span>
        </template>-->
      </el-table-column>
      <el-table-column label="房间号" width="100%" prop="room_number" sortable>
        <!-- <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.room_number }}</span>
        </template>-->
      </el-table-column>
      <el-table-column label="备注" width="383%">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.remarks }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="185%">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          <el-popconfirm title="确定出院吗？" @confirm="handleDelete(scope.$index, scope.row)">
            <el-button
              size="mini"
              type="danger"
              slot="reference"
              :disabled="scope.row.workState == '出院'"
            >出院</el-button>
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
    var validPhone = (rule, value, callback) => {
      //正则判断手机号只能为11位数字
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机号格式不正确"));
      } else {
        callback();
      }
    };
    var validRealName = (rule, value, callback) => {
      // console.log("nmslnmsl");
      const realnameReg = /^([a-zA-Z\u4e00-\u9fa5\·]{1,10})$/;
      if (!value) {
        return callback(new Error("真实姓名不能为空!!"));
      }
      setTimeout(() => {
        if (!realnameReg.test(value)) {
          return callback(new Error("您的真实姓名格式错误,请输入英文或汉字!"));
        } else {
          callback();
        }
      }, 500);
    };

    //正则判断身份证号只能为18位数字，最后一位可以为数字或者X
    var validIdCard = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入身份证号"));
      } else if (
        !/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
          value
        )
      ) {
        callback(new Error("身份证号格式不正确"));
      } else {
        callback();
      }
    };

    //正则判断房间号只能为3位数字
    var validRoomNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入房间号"));
      } else if (!/^[0-9]{3}$/.test(value)) {
        callback(new Error("房间号格式为三位数字"));
      } else {
        callback();
      }
    };

    //正则判断生日输入的格式为“yyyy-mm-dd”，并且mm只能为1-12，dd只能为1-31
    var validBirthday = (rule, value, callback) => {
      var reg =
        "^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)| (?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$";
      if (value === "") {
        callback(new Error("请输入生日"));
      } else if (!new RegExp(reg).test(value)) {
        callback(new Error("生日格式为“yyyy-mm-dd”"));
      } else {
        callback();
      }
    };

    //正则判断输入的字数不能超过30字符
    var validRemarks = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入备注"));
      } else if (value.length > 30) {
        callback(new Error("备注不能超过30字符"));
      } else {
        callback();
      }
    };
    return {
      base_face_img_url: "http://127.0.0.1:8000/api/elderly_img/",
      base_face_feature_img_url: "http://127.0.0.1:8000/api/face_video/",
      face_feature_img_url: "",
      options: [
        {
          value: "选项1",
          label: "儿子"
        },
        {
          value: "选项2",
          label: "女儿"
        },
        {
          value: "选项3",
          label: "孙子"
        },
        {
          value: "选项4",
          label: "孙女"
        },
        {
          value: "选项5",
          label: "其他"
        }
      ],
      search: "",
      tableData: [],
      dataSearch: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      form: {
        name: "",
        gender: "",
        tel: "",
        id_card: "",
        birthday: "",
        in_time: "",
        // out_time: "",
        //face_feature: "",
        room_number: "",
        guardian_name: "",
        guardian_tel: "",
        guardian_relation: "",
        remarks: "",
        create_manager_id: 0
      },
      rules: {
        name: [{ validator: validRealName }],
        tel: [{ validator: validPhone }],
        id_card: [{ validator: validIdCard }],
        room_number: [{ validator: validRoomNumber }],
        guardian_name: [{ validator: validRealName }],
        guard_tel: [{ validator: validPhone }],
        remarks: [{ validator: validRemarks }]
      },
      formLabelWidth: "120px",
      disabledDate(time) {
        return time.getTime() > Date.now();
      }
    };
  },
  computed: {
    //对el-table的数据进行模糊搜索
  },
  //初始化
  created() {
    this.init();
  },
  methods: {
    tables(input_type) {
      // console.log("success");
      let input = this.search && this.search.toLowerCase();
      // let input = "在院"
      let itemsFull = this.tableData;

      //只对展示信息进行搜索，详情内容不搜索
      let items = this.dataSearch;

      let items1;
      if (input_type) {
        if (input_type == "在院") {
          input = "在院";
          this.search = "在院";
        } else if (input_type == "出院") {
          input = "出院";
          this.search = "出院";
        } else if (input_type == "全部") {
          input = "";
          this.search = "";
        }
      }
      if (input) {
        items1 = items.filter(function(item) {
          return Object.keys(item).some(function(key1) {
            return String(item[key1])
              .toLowerCase()
              .match(input);
          });
        });
      } else {
        items1 = itemsFull;
      }
      return items1;
    },
    select_all() {
      this.tables("全部");
    },
    select_in() {
      this.tables("在院");
    },
    select_out() {
      this.tables("出院");
    },
    // handleCommand(command){
    //   if(command == "all"){
    //     this.button_text = "全部"
    //   }else if(command == "in"){
    //     this.button_text = "在院"
    //   }else if(command == "out"){
    //     this.button_text = "出院"
    //   }
    // },
    tableRolStyle({ row, column, rowIndex, columnIndex }) {
      if (row.workState === "出院") {
        return {
          backgroundColor: "#f0f9eb"
        };
      }
    },
    //成功弹出框
    success_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "success"
      });
    },
    //失败弹出框
    fail_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "error"
      });
    },
    handleEdit(index, row) {
      // console.log(index, row);
      this.$router.push({
        path: `/mainwindow/detail/elder_detail`,
        query: { elder_info: row }
      });
    },
    handleCancel() {
      visible = false;
    },
    handleDelete(index, row) {
      console.log(index, row);
      // , urlParam: row.id
      this.$api
        .del_elderly_info({}, { type: "json", urlParam: row.id })
        .then(resopnse => {
          if (resopnse.state === 1) {
            this.success_box("出院成功");
            this.init();
            // this.tableData.splice(index, 1);
          } else {
            this.fail_box(resopnse.msg);
          }
        });
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
      let id =
        this.tableData.length == 0
          ? 1
          : this.tableData[this.tableData.length - 1].id + 1;
      this.face_feature_img_url =
        this.base_face_feature_img_url + "elderly_" + id;
    },

    //输入信息完成，提交输入
    submit_form() {
      //应该有一个给form.face_feature赋值的操作
      //传给后端的数据
      let param = {
        id:
          this.tableData.length == 0
            ? 1
            : this.tableData[this.tableData.length - 1].id + 1,
        name: this.form.name,
        gender: this.form.gender == "male" ? 1 : 0,
        tel: this.form.tel,
        id_card: this.form.id_card,
        birthday:
          this.form.birthday.getFullYear() +
          "-" +
          (this.form.birthday.getMonth() + 1) +
          "-" +
          this.form.birthday.getDate(),
        in_time:
          this.form.in_time.getFullYear() +
          "-" +
          (this.form.in_time.getMonth() + 1) +
          "-" +
          this.form.in_time.getDate(),
        room_number: this.form.room_number,
        guardian_name: this.form.guardian_name,
        guardian_tel: this.form.guardian_tel,
        guardian_relation: this.form.guardian_relation,
        remarks: this.form.remarks,
        create_manager_id: this.form.create_manager_id
      };
      this.$api.add_elderly_info(param, { type: "json" }).then(response => {
        if (response.state === 1) {
          let add_old_msg = {
            id: param.id,
            // url: this.base_face_img_url + 'elderly/' + param.id, //头像：还没有
            name: param.name,
            tel: param.tel,
            id_card: param.id_card,
            birthday: param.birthday,
            gender: param.gender == 1 ? "男" : "女",
            age: this.doHandleYear() - parseInt(param.birthday.slice(0, 4)),
            in_time: param.in_time,
            // out_time: param.out_time,
            // face_feature: "unknown",
            room_number: param.room_number,
            guardian_name: param.guardian_name,
            guardian_tel: param.guardian_tel,
            guardian_relation: param.guardian_relation,
            remarks: param.remarks,
            create_manager_id: param.create_manager_id,
            workState: param.out_time == null ? "在院" : "出院"
          };
          this.tableData.push(add_old_msg);
          this.dialogFormVisible2 = false;
          if (this.$refs.form1) {
            // this.$refs.form.clearValidate();
            this.$refs.form1.resetFields();
          }
          if (this.$refs.form2) {
            // this.$refs.form.clearValidate();
            this.$refs.form2.resetFields();
          }
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
      this.$api.elderly_info({}, { type: "json" }).then(response => {
        // console.log(response);
        if (response.state === 1) {
          //查询成功
          this.tableData = [];
          for (let i = 0; i < response.elderly_info.length; i++) {
            let val = response.elderly_info[i]; //后端传给前端的数据
            // console.log();
            let param = {
              id: val.id,
              name: val.name,
              gender: val.gender == 1 ? "男" : "女",
              tel: val.tel,
              id_card: val.id_card,
              birthday: val.birthday,
              in_time: val.in_time,
              // out_time: val.out_time,
              face_feature: this.base_face_img_url + val.id,
              room_number: val.room_number,
              guardian_name: val.guardian_name,
              guardian_tel: val.guardian_tel,
              guardian_relation: val.guardian_relation,
              remarks: val.remarks,
              create_manager_id: val.create_manager_id,
              age: this.doHandleYear() - parseInt(val.birthday.slice(0, 4)),
              workState: val.out_time == null ? "在院" : "出院"
            };

            let param2 = {
              name: val.name,
              gender: val.gender == 1 ? "男" : "女",
              in_time: val.in_time,
              room_number: val.room_number,
              remarks: val.remarks,
              age: this.doHandleYear() - parseInt(val.birthday.slice(0, 4)),
              workState: val.out_time == null ? "在院" : "出院"
            };
            this.dataSearch.push(param2);
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
    }
  }
};
</script>

<style scoped>
@import "../../../../assets/css/page.css";
</style>
