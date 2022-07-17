<template>
  <div>
    <el-form
      ref="form1"
      :model="form"
      :rules="rules"
      label-width="80px"
      style="
        height: 20%;
        width: 40%;
        margin-left: 25%;
        margin-top: 3%;
        padding: 3%;
        background-color: white;
      "
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="form.gender" :disabled="isUse">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="form.tel" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="学历" prop="education">
        <!-- <el-input v-model="form.education" :disabled="isUse"></el-input> -->
        <el-select v-model="form.education" placeholder="请选择" style="width:100%" :disabled="isUse">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入职时间" prop="entry_time">
        <el-input v-model="form.entry_time" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remarks">
        <el-input v-model="form.remarks" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="margin-left: -30px">{{ msg }}</el-button>
        <el-button @click="onCancel">{{ msg2 }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data: function() {
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
      console.log("nmslnmsl");
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

    //正则判断生日输入的格式为“yyyy-mm-dd”，并且mm只能为1-12，dd只能为1-31
    var validBirthday = (rule, value, callback) => {
      var reg =
        "^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)| (?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$";
      if (value === "") {
        callback(new Error("请输入入职时间"));
      } else if (!new RegExp(reg).test(value)) {
        callback(new Error("入职时间格式为“yyyy-mm-dd”"));
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
      options: [
        {
          value: "选项1",
          label: "研究生"
        },
        {
          value: "选项2",
          label: "本科"
        },
        {
          value: "选项3",
          label: "高中"
        },
        {
          value: "选项4",
          label: "初中"
        }
      ],
      name: "",
      msg: "编辑",
      msg2: "返回",
      isUse: true,
      token: "",
      form: {
        tel: "",
        education: "",
        // face_feature: "",
        remarks: "",
        entry_time: "",
        resignation_time: "",
        create_manager_id: 0,
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [{ validator: validRealName }],
        tel: [{ validator: validPhone }],
        entry_time: [{ validator: validBirthday }],
        remarks: [{ validator: validRemarks }]
      }
    };
  },
  created() {
    this.form = this.$route.query.volunteer_info;
    //页面加载时就从本地通过localstorage获取存储的token值
    // this.token = localStorage.getItem("token");
    // this.$api.test({}).then((response) =>{
    //   console.log(response)
    // })
  },
  mounted() {
    // this.$api.()
  },
  methods: {
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
    onSubmit() {
      // console.log("submit!");
      // console.log(this.msg);
      if (this.msg == "编辑") {
        // console.log("1111");
        this.isUse = false;
        this.msg = "确定";
        this.msg2 = "取消";
      } else if (this.msg == "确定") {
        let param = {
          id: this.form.id,
          name: this.form.name,
          gender: this.form.gender == "男" ? 1 : 0,
          tel: this.form.tel,
          education: this.form.education,
          // face_feature: this.form.face_feature,
          remarks: this.form.remarks,
          create_manager_id: this.form.create_manager_id,
          entry_time: this.form.entry_time,
          resignation_time: this.form.resignation_time
        };
        this.$api
          .update_volunteer_info(param, { type: "json" })
          .then(response => {
            if (response.state === 1) {
              this.success_box("修改成功");
              this.msg = "编辑";
              this.msg2 = "返回";
              this.isUse = true;
            } else {
              this.fail_box(response.msg);
            }
          });
      }
    },
    onCancel() {
      console.log("Cancel!");
      console.log(this.msg);
      if (this.msg2 == "返回") {
        console.log("1111");
        this.msg2 = "取消";
        this.$router.push({ path: `/mainwindow/manage/vol_manage` });
        console.log("1111");
      } else if (this.msg2 == "取消") {
        this.msg = "编辑";
        this.msg2 = "返回";
        this.isUse = true;
        if (this.$refs.form1) {
          // this.$refs.form1.clearValidate();
          this.$refs.form1.resetFields();
        }
      }
    }
  }
};
</script>

<style scoped>
@import "../../../../../assets/css/page.css";
</style>
