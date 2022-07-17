<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-button @click="select_all" plain>全部</el-button>
        <el-button type="primary" @click="select_in">在职</el-button>
        <el-button type="success" @click="select_out" plain>离职</el-button>
      </el-col>
      <!-- 搜索按钮 -->
      <el-col :span="17">
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
          <el-form :model="form" ref="form1" :rules="rules">
            <el-form-item
              label="姓名："
              :label-width="formLabelWidth"
              prop="name"
            >
              <el-input
                v-model="form.name"
                autocomplete="off"
                style="width: 220px"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="性别："
              :label-width="formLabelWidth"
              prop="gender"
            >
              <el-select v-model="form.gender" placeholder="请选择性别">
                <!--                style="width: 560px">-->
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="电话："
              :label-width="formLabelWidth"
              prop="tel"
            >
              <el-input
                v-model="form.tel"
                autocomplete="off"
                style="width: 220px"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="教育水平："
              :label-width="formLabelWidth"
              prop="education"
            >
              <el-select
                v-model="form.education"
                placeholder="请选择"
                style="width: 220px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="入职日期："
              :label-width="formLabelWidth"
              prop="entry_time"
            >
              <el-date-picker
                v-model="form.entry_time"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
            <el-form-item
              label="备注："
              :label-width="formLabelWidth"
              prop="remarks"
            >
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
            <img :src="face_feature_img_url" width="100%" />
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="preStep">上一步</el-button>
            <el-button type="primary" @click="submit_form">提交</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
    <el-table
      :data="tables()"
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :row-style="tableRolStyle"
      :cell-style="{ 'text-align': 'center' }"
      style="width: 99%; margin-top: 1%; height: 130%"
    >
      <el-table-column label="头像" width="130%">
        <template slot-scope="scope">
          <el-avatar
            :size="50"
            :src="scope.row.face_feature"
            style="margin-left: 10px"
          ></el-avatar>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="110%">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>状态: {{ scope.row.workState }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag
                size="medium"
                :type="scope.row.workState == '在职' ? '' : 'info'"
                >{{ scope.row.name }}</el-tag
              >
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
      <el-table-column label="电话" width="180%">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.tel }}</span>
        </template>
      </el-table-column>
      <el-table-column label="学历" width="110%">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.education }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" width="488%">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.remarks }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="190%">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >详情</el-button
          >
          <el-popconfirm
            title="确定离职吗？"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button
              size="mini"
              type="danger"
              slot="reference"
              :disabled="scope.row.workState == '离职'"
              >离职</el-button
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
      base_face_img_url: "http://127.0.0.1:8000/api/volunteer_img/",
      base_face_feature_img_url: "http://127.0.0.1:8000/api/face_video/",
      face_feature_img_url: "",
      options: [
        {
          value: "选项1",
          label: "研究生",
        },
        {
          value: "选项2",
          label: "本科",
        },
        {
          value: "选项3",
          label: "高中",
        },
        {
          value: "选项4",
          label: "初中",
        },
      ],
      visible: false,
      search: "",
      tableData: [],
      dataSearch: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        name: "",
        gender: "",
        tel: "",
        education: "",
        // face_feature: "",
        remarks: "",
        entry_time: "",
        // resignation_time: "",
        create_manager_id: 0,
      },
      rules: {
        name: [{ validator: validRealName }],
        tel: [{ validator: validPhone }],
        remarks: [{ validator: validRemarks }],
      },
      formLabelWidth: "120px",
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
    };
  },
  computed: {
    //对el-table的数据进行模糊搜索
  },
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
        if (input_type == "在职") {
          input = "在职";
          this.search = "在职";
        } else if (input_type == "离职") {
          input = "离职";
          this.search = "离职";
        } else if (input_type == "全部") {
          input = "";
          this.search = "";
        }
      }
      if (input) {
        items1 = items.filter(function (item) {
          console.log("item", item);
          return Object.keys(item).some(function (key1) {
            return String(item[key1]).toLowerCase().match(input);
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
      this.tables("在职");
    },
    select_out() {
      this.tables("离职");
    },
    tableRolStyle({ row, column, rowIndex, columnIndex }) {
      if (row.workState === "离职") {
        return {
          backgroundColor: "#f0f9eb",
        };
      }
    },
    //成功弹出框
    success_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "success",
      });
    },
    //失败弹出框
    fail_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "error",
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        path: `/mainwindow/detail/vol_detail`,
        query: { volunteer_info: row },
      });
    },
    handleDelete(index, row) {
      this.$api
        .del_volunteer_info({}, { type: "json", urlParam: row.id })
        .then((response) => {
          if (response.state === 1) {
            this.success_box("离职成功");
            this.init();
            // this.tableData.splice(index, 1);
          } else {
            this.fail_box(response.msg);
          }
        });
    },
    preStep() {
      this.dialogFormVisible = true;
      this.dialogFormVisible1 = false;
    },
    nextStep() {
      this.dialogFormVisible = false;
      this.dialogFormVisible1 = true;
      let id =
        this.tableData.length == 0
          ? 1
          : this.tableData[this.tableData.length - 1].id + 1;
      this.face_feature_img_url =
        this.base_face_feature_img_url + "volunteer_" + id;
    },
    submit_form() {
      let param = {
        id:
          this.tableData.length == 0
            ? 1
            : this.tableData[this.tableData.length - 1].id + 1,
        gender: this.form.gender == "male" ? 1 : 0,
        create_manager_id: this.form.create_manager_id,
        name: this.form.name,
        tel: this.form.tel,
        education: this.form.education,
        remarks: this.form.remarks,
        entry_time:
          this.form.entry_time.getFullYear() +
          "-" +
          (this.form.entry_time.getMonth() + 1) +
          "-" +
          this.form.entry_time.getDate(),
        
      };

      console.log(param);

      this.$api.add_volunteer_info(param, { type: "json" }).then((response) => {
        if (response.state === 1) {
          let add_msg = param;
          add_msg.gender = param.gender == 1 ? "男" : "女";
          add_msg.workState = param.resignation_time == null ? "在职" : "离职",
          this.tableData.push(add_msg);
          this.dataSearch.push(add_msg)
          this.dialogFormVisible1 = false;
          if (this.$refs.form1) {
            this.$refs.form1.resetFields();
          }
        } else {
          this.fail_box(response.msg);
        }
      });
    },
    onSearch() {},
    init() {
      this.$api.volunteer_info({}, { type: "json" }).then((response) => {
        if (response.state === 1) {
          //查询成功
          this.tableData = [];
          for (let i = 0; i < response.volunteer_info.length; i++) {
            let val = response.volunteer_info[i];
            let param = {
              // url: this.base_face_img_url + val.id, //头像：还没有
              id: val.id,
              name: val.name,
              gender: val.gender == 1 ? "男" : "女",
              tel: val.tel,
              education: val.education,
              face_feature: this.base_face_img_url + val.id,
              entry_time: val.entry_time,
              // resignation_time: val.resignation_time,
              remarks: val.remarks,
              create_manager_id: val.create_manager_id,
              workState: val.resignation_time == null ? "在职" : "离职",
            };
            console.log(param);
            let param2 = {
              name: val.name,
              gender: val.gender == 1 ? "男" : "女",
              tel: val.tel,
              education: val.education,
              remarks: val.remarks,
              workState: val.resignation_time == null ? "在职" : "离职",
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
    },
  },
};
</script>

<style scoped>
@import "../../../../assets/css/page.css";
</style>
