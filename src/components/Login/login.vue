<template id="login">
  <div id="login_div_right">
    <!-- 登录方式选择 -->
    <div>
      <a class="login_username" href="javascript:"
         @click="login_way=true;tel='';password='';username='';auth_code='';login_type='password'">用户名密码登录</a>
      <a class="login_phone" href="javascript:"
         @click="login_way=false;tel='';password='';username='';auth_code='';login_type='phone'">手机登录</a>
    </div>

    <!-- 用户名密码登录 -->
    <div :class="{on : !login_way}">

      <el-input class="input_username" placeholder="请输入用户名" suffix-icon="el-icon-user-solid"
                v-model="username"></el-input>
      <el-input class="input_password" placeholder="请输入密码" show-password v-model="password"></el-input>
    </div>

    <!-- 手机号验证码登录 -->
    <div :class="{on : login_way}">
      <el-input class="input_tel" placeholder="请输入手机号" suffix-icon="el-icon-user-solid" v-model="tel">
      </el-input>
      <el-input placeholder="请输入验证码" v-model="auth_code" class="input_auth_code">
        <el-button slot="append"
                   :disabled="show" @click="send_auth_code">
          {{show?('重新获取('+auth_code_wait_time+')') : "获取验证码"}}</el-button>
      </el-input>
    </div>
    <el-button type="success" id="login_button" @click="login">登 录</el-button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      login_way: true,   //登录方式选择

      password: "",
      tel: "",
      username: "",
      auth_code: "",       //输入的验证码
      return_auth_code: "",//后端返回的验证码

      login_type: "password",//登录方式

      show: false,
      auth_code_wait_time: 60,// 验证码等待时间
    };
  },

  methods: {
    //登录成功弹出框
    success_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'success'
      });
    },
    //登录失败弹出框
    fail_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      });
    },
    //输入信息不完整
    no_complete_info(msg) {
      this.$message({
        showClose: true,
        message: '请输入' + msg,
        type: 'warning'
      });
    },
    //登录
    login() {
      if (this.login_type === 'password') {
        if (this.username.length === 0) {
          this.no_complete_info("用户名")
          return;
        } else if (this.password.length === 0) {
          this.no_complete_info("密码")
          return;
        }
      } else {
        if (this.tel.length === 0) {
          this.no_complete_info("手机号")
          return;
        } else if (this.auth_code.length === 0) {
          this.no_complete_info("验证码")
          return;
        } else if (this.auth_code !== this.return_auth_code){
          this.fail_box("验证码错误！")
          return;
        }
      }
      let param = {
        login_type: this.login_type,
        username: this.username,
        password: this.password,
        tel:this.tel,
      }
      console.log(param)
      //点击登录发送登录请求，进行验证
      this.$api.login(param, { type: "json" }).then((response) =>{
        //理论上应该返回一个token：waiting
        console.log(response)
        if (response.state === 1) {
          this.success_box("登录成功");
          localStorage.setItem("token",response.token)//设置token，暂时没有
          localStorage.setItem("isLogin", 1);
          this.$router.push({path: '/mainwindow'})
        } else {
          //错误
          this.fail_box(response.msg);
        }
      }).catch(error=>{
        console.log(error)
        this.fail_box('网络未连接');
      })
    },


    //发送/接受验证码
    send_auth_code(){
      // 判断手机格式
      let that = this
      if(!/^[1][34578][0-9]{9}$/.test(this.tel)){
        this.fail_box("手机号格式错误");
      }else{
        this.show = true;
        this.auth_code_wait_time = 60;
        let timer = setInterval(()=>{
          if(this.auth_code_wait_time === 0){
            this.show = false;
            clearInterval(timer);
          }
          this.auth_code_wait_time -= 1;
        }, 1000);

        that.$api.login_send_auth_code({
          tel: Number(this.tel),
        }, {type: 'json'}).then((response) => {
          console.log(response.userInfo)
          this.return_auth_code = response.verifycode
          this.username = response.userInfo
        })
      }
    },
  }
}

</script>

<style scoped>

#login_button {
  position: absolute;
  font-size: 20px;
  width: 380px;
  top: 390px;
  height: 48px;
  border-radius: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: rgb(239, 79, 25);
  border-color: rgb(239, 79, 25);
}

/* 
.login_radio {
  position: absolute;
  top: 120px;
  height: 27px;
  font-size: 18px;
}

.login_radio1 {
  position: absolute;
  left: -130px;
}

.login_radio2 {
  position: absolute;
  left: 0;
} */

.input_username, .input_tel {
  position: absolute;
  height: 36px;
  width: 380px;
  top: 211px;
  left: 50%;
  transform: translate(-50%, 0%);
}

.input_password, .input_auth_code {
  position: absolute;
  height: 36px;
  width: 380px;
  top: 283px;
  left: 50%;
  transform: translate(-50%, 0%);
}

a {
  text-decoration: none;
  color: #999;
}

a::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 0;
  border-bottom: 2px solid #009688;
}

/* 点击之后显示的下划线 */
.active {
  border-bottom: 2px solid #009688;
}

a:hover::before {
  transition: 0.2s all linear;
  width: 100%;
}

.login_username {
  position: absolute;
  font-size: 16px;
  top: 330px;
  left: 230px;
}

.login_phone {
  position: absolute;
  font-size: 16px;
  top: 330px;
  left: 350px;
}

.on {
  display: none;
}
</style>