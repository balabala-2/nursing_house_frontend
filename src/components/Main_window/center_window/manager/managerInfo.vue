<template>
  <div
    style="
      height: 20%;
      width: 50%;
      margin-left: 30%;
      margin-top: 7%;
      padding: 3%;
    "
  >
    <el-avatar :size="60" :src="url" style="margin-top: 5%"></el-avatar>
    <h4>管理员账号</h4>
    <!-- <h5>{{id}}</h5> -->
    <el-divider content-position="left">智慧养老</el-divider>
    <!--    <br>-->
    <el-tabs :tab-position="tabPosition" style="margin-top: 5%" @tab-click="message">
      <el-tab-pane label="账号">
        <el-form
          :model="ruleForm1"
          status-icon
          :rules="rules1"
          ref="ruleForm1"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="原密码" prop="oldPass">
            <el-input
              type="password"
              v-model="ruleForm1.oldPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPass">
            <el-input
              type="password"
              v-model="ruleForm1.newPass"
              autocomplete="off"
              placeholder="请输入格式为：数字+小写字母+大写字母+特殊字符的密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm1.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm1('ruleForm1')"
              >更新密码</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane  label="信息">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="真实姓名" prop="name">
            <el-input v-model="ruleForm2.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="userName">
            <el-input
              v-model="ruleForm2.userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm2.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="入职时间" prop="in_time">
            <el-date-picker
              v-model="ruleForm2.in_time"
              type="date"
              placeholder="选择日期"
              style="width: 700px"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm2('ruleForm2')"
              >更新信息</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data: function () {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入原密码"));
      } else {
        if (this.ruleForm1.checkPass !== "") {
          this.$refs.ruleForm1.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      //正则判断密码格式是否为小写字母+大写字母+数字+特殊字符
      var reg = /[0-9]+/;
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (reg.test(value)) {
          callback();
        } else {
          callback(new Error("密码格式不正确"));
        }
      }

      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.ruleForm1.checkPass !== "") {
          this.$refs.ruleForm1.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm1.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

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

    //正则判断用户名不能有特殊字符，且长度小于10字符
    var validUserName = (rule, value, callback) => {
      const userNameReg = /^[a-zA-Z0-9_]{1,10}$/;
      if (!value) {
        return callback(new Error("请输入用户名!!"));
      }
      setTimeout(() => {
        if (!userNameReg.test(value)) {
          return callback(
            new Error("用户名格式错误,请勿输入特殊字符或超过10字符!")
          );
        } else {
          callback();
        }
      }, 500);
    };

    return {
      manager_id: 0,
      // name: "",
      url: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      tabPosition: "right",
      ruleForm1: {
        oldPass: "",
        newPass: "",
        checkPass: "",
      },
      ruleForm2: {
        phone: "",
        name: "",
        userName: "",
        in_time: "",
      },
      rules1: {
        oldPass: [{ validator: validatePass, trigger: "blur", required: true }],
        newPass: [
          { validator: validatePass2, trigger: "blur", required: true },
        ],
        checkPass: [
          { validator: validatePass3, trigger: "blur", required: true },
        ],
      },
      rules2: {
        phone: [{ validator: validPhone }],
        name: [{ validator: validRealName }],
        userName: [{ validator: validUserName }],
      },
    };
  },
  created() {
    this.manager_id = localStorage.getItem("manager_id");
    //页面加载时就从本地通过localstorage获取存储的token值
    // this.token = localStorage.getItem("token");
    // this.$api.test({}).then((response) =>{
    //     console.log(response)
    // })
    this.init();
  },
  methods: {
    message(){
      this.init()
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
    submitForm1() {
      this.$refs.ruleForm1.validate((valid) => {
        let param = {
          id: 1,
          old_password: this.ruleForm1.oldPass,
          new_password: this.ruleForm1.newPass,
        };
        this.$api
          .update_manager_password(param, { type: "json" })
          .then((response) => {
            if (response.state === 1) {
              this.success_box("修改成功");
              if (this.$refs.ruleForm1) {
                // this.$refs.form.clearValidate();
                this.$refs.ruleForm1.resetFields();
              }
            } else {
              this.fail_box(response.msg);
            }
          });
      });
    },
    submitForm2() {
      this.$refs.ruleForm2.validate((valid) => {
        let param = {
          id: parseInt(this.manager_id),
          username: this.ruleForm2.userName,
          name: this.ruleForm2.name,
          tel: this.ruleForm2.phone,
          entry_time:
            this.ruleForm2.in_time
        };
        console.log(param)
        this.$api
          .update_manager_info(param, { type: "json" })
          .then((response) => {
            if (response.state === 1) {
              this.success_box("修改成功");
              if (this.$refs.ruleForm2) {
                // this.$refs.form.clearValidate();
                this.$refs.ruleForm2.resetFields();
              }
            } else {
              this.fail_box(response.msg);
            }
          });
      });
    },
    //初始化页面
    init() {
      this.$api.get_manager_info({}, { type: "json", urlParam: this.manager_id }).then(response => {
        if(response.state === 1){
          this.ruleForm2.userName = response.username,
          this.ruleForm2.name = response.name,
          this.ruleForm2.phone = response.tel,
          this.ruleForm2.in_time = response.entry_time
        }
      });
    }
  },

  mounted() {
    // this.$api.()
  },
};
</script>

<style>
</style>
