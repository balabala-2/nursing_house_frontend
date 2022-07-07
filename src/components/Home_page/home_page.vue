<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="10" style="margin-top: 12px">
            <el-image
              :fit="fit"
              :src="require(`@/assets/img/IMG_7161.jpeg`)"
              style="width: 120px; height: 50px"
            ></el-image>
          </el-col>
          <el-col :span="8" style="margin-top: 12px">
            <el-input style="border-color: rgb(239, 79, 25)">
              <el-button slot="append" icon="el-icon-search" style="background-color: rgb(239, 79, 25) border-color: rgb(239, 79, 25)"></el-button>
            </el-input>
            <!-- <el-card v-if="isSearch">...</el-card> -->
          </el-col>
          <el-col :span="4" style="margin-top: 12px">
            <el-button
              @click="login"
              id="main_header_btn"
              round
              style="z-index: 99"
              type="primary"
              v-show="visible"
            >登录
            </el-button>
            <el-button
              @click="back"
              id="main_header_btn_back"
              round
              style="z-index: 99"
              type="primary"
              v-show="!visible"
            >返回
            </el-button>
            <!-- <el-button round class="registBt">注册</el-button> -->
          </el-col>
        </el-row>
      </el-header>
      <el-main class="el-main">
        <div class="main_div">
          <div id="main_header">
            <div id="main_header_text_chinese" style="z-index: 99">
              <vue-typed-js
                :strings="['我是，您身边的智能老人管家']"
                :typeSpeed="50"
                :show-cursor="false"
              >
                <span class="typing"></span>
              </vue-typed-js>
            </div>
            <div id="main_header_text_English" style="z-index: 99">
              <vue-typed-js
                :strings="['Smart pension system based on sentiment analysis']"
                :typeSpeed="50"
                :start-delay="1200"
                :showCursor="false"
              >
                <span class="typing"></span>
              </vue-typed-js>
            </div>
            <el-button
              @click="login"
              id="main_header_btn"
              round
              style="z-index: 99"
              type="primary"
              v-show="visible"
            >登录
            </el-button>

            <el-button
              @click="back"
              id="main_header_btn_back"
              round
              style="z-index: 99"
              type="primary"
              v-show="!visible"
            >返回
            </el-button>

            <img
              class="backimg"
              id="img1"
              src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cHM6Ly81N2VhMjM2MDM2OWI1LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvYzkzYzNhY2Y0NTMzOWE4M2Q1NGI3ZjE2NTc2OGJhOTQtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp"
            />
            <img
              class="backimg"
              id="img2"
              src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS84NGI3MTgzMTQ0NWVkZWEyODMzOTRkMGI4NjI3ZTJmMS05MC53ZWJw.webp"
            />
            <img
              id="cube"
              src="https://www.htohcloud.com/images/product/chanpintop.jpg"
              v-show="visible"
            />
            <div id="login_div" v-show="!visible">
              <login :class="{ login_div: register }"></login>
              <el-button
                :class="{ login_div: register }"
                @click="register = true"
                id="login_register"
                type="text"
              >没有账号？立即注册
              </el-button>
              <register :class="{ login_div: !register }"></register>
              <el-button
                :class="{ login_div: !register }"
                @click="register = false"
                id="register_login"
                type="text"
              >
                已有帐号？马上登录
              </el-button>
            </div>
          </div>
          <div id="main_main">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="show_advantage">
                  <el-image
                    :fit="fit"
                    src="http://www.yytong.com/images/pro-02.png"
                    style="width: 180px; height: 110px"
                  ></el-image>
                  <div class="advantage_text">老人档案管理</div>
                  <div class="advantage_detail">
                    完善老人档案数据，档案支持批量导入导出，支持档案建档率及完整度分析
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="show_advantage_2">
                  <el-image
                    :fit="fit"
                    src="http://www.yytong.com/images/pro-08.png"
                    style="width: 180px; height: 110px"
                  ></el-image>
                  <div class="advantage_text">义工信息管理</div>
                  <div class="advantage_detail">管理义工信息，检测义工行动</div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="show_advantage">
                  <el-image
                    :fit="fit"
                    src="http://www.yytong.com/images/pro-09.png"
                    style="width: 180px; height: 110px"
                  ></el-image>
                  <div class="advantage_text">精准识别</div>
                  <div class="advantage_detail">
                    摄像头监测，实时识别人脸，分析老人情感，监控老人行为
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="show_advantage">
                  <el-image
                    :fit="fit"
                    src="http://www.yytong.com/images/pro-12.png"
                    style="width: 180px; height: 110px"
                  ></el-image>
                  <div class="advantage_text">数据可视化</div>
                  <div class="advantage_detail">
                    提供丰富大数据可视化中控平台，监测信息可视化
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div id="main_footer">
            <el-row>
              <el-col :span="24">
                <div class="scenarios_title">
                  <div class="scenarios_title_text">关于我们</div>
                  <el-divider class="scenarios_divider"></el-divider>
                </div>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="10">
                <div class="card">
                  <div class="imgBx">
                    <el-image
                      :fit="contain"
                      src="http://www.yytong.com/images/index-about.png"
                      style="width: 550px; height: 330px"
                    ></el-image>
                  </div>
                </div>
              </el-col>
              <el-col :span="14">
                <div class="about_text">
                  颐养通作为国内领先的智慧养老信息化解决方案提供商，为养老机构和养老服务公司提供
                  各类智慧养老相关的软硬件产品。支持多种养老业态，如居家养老、社区养老、机构养老、医
                  养结合、旅居养老等。主要产品包括智慧养老云管理系统、机构养老管理系统、居家养老管理
                  系统、社区养老管理系统、医院HIS管理系统、家属子女手机APP、管理人员APP、老人关爱
                  平台、一卡通管理系统、室内定位系统、健康管理系统、健康大数据平台等。适用各类养老院、福利院、养老社区、老年公寓、敬老院、居家养老中心、日间照料中心、康复院、护理院、养老地产等。
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script scoped>
import login from "@/components/Login/login";
import register from "@/components/Login/register";

export default {
  name: "tmp",
  data() {
    return {
      activeIndex: "1",
      visible: true,
      fit: "scale-down",
      contain: "contain",
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      // bg2: require('C:/Users/BaiYu/Desktop/图片资源/Google/LeetCode.png'),
      register: false,
    };
  },
  components: {
    login,
    register,
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    change_view(path) {
      const that = this;
      that.$router.replace(path);
    },
    login() {
      this.visible = false;
    },
    back() {
      this.visible = true;
    },
    focus() {},
    blur() {},
    isSearch() {},
  },
};
</script>

<style scoped>
#login_div {
  /* overflow: hidden; */
  position:absolute;
  /* margin-bottom: 1000px; */
  /* right: 100px; */
  /* position: relative; */
  left: 62%;
  opacity: 0.9;
  bottom: 450px;
  height: 100px;
  width: 450px;
}

.main_div {
  width: 100%;
}

.el-header {
  background-color: #22282d;
  color: #333;
  text-align: center;
  height: 78px;
}

.el-footer {
  background-color: #22282d;
  color: #333;
  text-align: center;
  height: 500px;
}

.el-main {
  color: #333;
  text-align: center;
  padding: 0;
  margin: 0;
  height: 1458px;
  width: 100%;
}

.el-menu {
  position: absolute;
  left: 40%;
}

.el_footer_text {
  padding: 20px;
  color: #8e8f90;
  font-family: 微軟正黑體;
  font-size: 14px;
}
#email_logo {
  position: absolute;
  left: 80%;
}
.login_div {
  display: none;
}
/*
@keyframes changeDeg {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes changeOpc1 {
  0% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes changeOpc2 {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */

#cube {
  position: absolute;
  top: 50px;
  left: 65%;
  animation: changeDeg 60s linear 0.05s infinite;
}

/* .main_div {
  width: 100%;
} */

.el-header {
  background-color: #22282d;
  color: #333;
  text-align: center;
  height: 78px;
}

.el-footer {
  background-color: #22282d;
  color: #333;
  text-align: center;
  height: 500px;
}

.el-main {
  color: #333;
  text-align: center;
  height: 1458px;
  width: 100%;
}

#main_header {
  position: relative;
  /* top: 60px; */
  left: 0;
  width: 100%;
  height: 461px;
  background-color: #171717;
}

#main_main {
  position: absolute;
  top: 520px;
  left: 0;
  width: 100%;
  height: 286px;
  background-color: #f9f9f9;
}

#main_footer {
  position: absolute;
  top: 805px;
  left: 0;
  width: 100%;
  height: 713px;
  background-color: #f9f9f9;
}

.el-menu {
  position: absolute;
  left: 40%;
}

#main_header_text_chinese {
  position: absolute;
  left: 10%;
  top: 135px;
  color: #f9f9f9;
  font-family: 微軟正黑體;
  font-size: 45px;
  font-weight: 700;
}

#main_header_text_English {
  position: absolute;
  left: 10%;
  top: 210px;
  color: #f9f9f9;
  font-family: courier new;
  font-size: 30px;
  font-weight: 500;
}

.el_footer_text {
  padding: 20px;
  color: #8e8f90;
  font-family: 微軟正黑體;
  font-size: 14px;
}

#main_header_btn {
  /* position: absolute; */
  /* left: 10%; */
  top: 265px;
  width: 170px;
  font-family: 微软雅黑;
  font-size: 16px;
  padding: 12px 40px;
  border-width: 1px;
  border-color: rgb(239, 79, 25);
  background-color: rgb(239, 79, 25);
  color: rgb(255, 255, 255);
}

#main_header_btn_back {
  /* position: absolute; */
  /* left: 9.371%; */
  top: 265px;
  width: 170px;
  font-family: 微软雅黑;
  font-size: 16px;
  padding: 12px 40px;
  border-width: 1px;
  border-color: rgb(239, 79, 25);
  background-color: rgb(239, 79, 25);
  color: rgb(255, 255, 255);
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.show_advantage {
  padding: 50px;
}

.show_advantage_2 {
  padding: 53px;
}

.advantage_text {
  font-size: 24px;
  font-weight: 900;
  color: black;
}

.advantage_detail {
  padding-top: 11px;
  font-size: 22px;
  color: #808080;
}

.scenarios_title {
  font-family: 微软雅黑;
  font-size: 36px;
  font-weight: 900;
  font-style: normal;
  color: #31353d;
  display: block;
  padding: 50px;
  vertical-align: bottom;
}

.scenarios {
  padding: 30px;
  background-color: #c9c9c9;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.scenarios_div {
  padding: 15px;
}

.scenarios_text {
  font-size: 20px;
  color: #31353d;
}

.scenarios_detail {
  font-size: 14px;
  color: #808080;
}

.backimg {
  position: absolute;
  left: 0;
  width: 100%;
}

#img1 {
  animation: changeOpc1 15s linear 1s infinite;
}

#img2 {
  animation: changeOpc2 15s linear 1s infinite;
}

#email_logo {
  position: absolute;
  left: 80%;
}

#login_register {
  position: absolute;
  transform: translate(-50%, 0%);
  top: 450px;
  left: 50%;
}

#register_login {
  position: absolute;
  transform: translate(-50%, 0%);
  top: 485px;
  left: 50%;
}

#register_back {
  position: absolute;
  transform: translate(-50%, 0%);
  top: 470px;
  left: 70%;
}

.scenarios_divider {
  position: absolute;
  left: 45%;
  width: 210px;
  height: 1px;
}

.container {
  position: relative;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

.container .card {
  position: relative;
  max-width: 300px;
  width: 400px;
  height: 200px;
  background: #fff;
  margin: 70px 80px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
}

.container .card:hover {
  height: 300px;
}

.container .card .imgBx {
  position: relative;
  width: 300px;
  height: 180px;
  top: -60px;
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.container .card .imgBx img {
  width: 100%;
  height: 180px;
  border-radius: 4px;
}

.container .card .content {
  position: relative;
  margin-top: -140px;
  padding: 5px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.container .card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: 15px;
  transition-delay: 0.3s;
  font-size: 30px;
  color: #31353d;
}

.about_text {
  text-indent: 2em;
  width: 1000px;
  text-align: justify;
  font-family: Arial, "微软雅黑", sans-serif;
  font-size: 24px;
  line-height: 200%;
  color: #5e5e5e;
}
</style>
