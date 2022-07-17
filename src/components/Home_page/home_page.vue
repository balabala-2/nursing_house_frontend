<template>
  <div>
    <el-container>
      <el-main class="el-main">
        <div class="main_div">
          <div id="main_header">
            <div id="main_header_text_chinese1" style="z-index: 99">
              <vue-typed-js :strings="['我是，您身边的']" :typeSpeed="50" :show-cursor="false">
                <span class="typing"></span>
              </vue-typed-js>
            </div>
            <div id="main_header_text_chinese2" style="z-index: 99">
              <vue-typed-js
                :strings="['智能老人管家']"
                :typeSpeed="50"
                :start-delay="1200"
                :showCursor="false"
              >
                <span class="typing"></span>
              </vue-typed-js>
            </div>
            <div class="btn">
              <el-button
                @click="login"
                id="main_header_btn"
                round
                style="z-index: 99"
                type="primary"
                v-show="visible"
              >登录</el-button>
              <el-button
                @click="back"
                id="main_header_btn_back"
                round
                style="z-index: 99"
                type="primary"
                v-show="!visible"
              >返回</el-button>
            </div>

            <img
              class="backimg"
              id="img1"
              src="../../assets/img/home_page/main_bk.jpg"
              style="display: block; width: 100%; height: 100%"
            />

            <div id="login_div" v-show="!visible">
              <login :class="{ login_div: register }"></login>
              <el-button
                :class="{ login_div: register }"
                @click="register = true"
                id="login_register"
                type="text"
              >没有账号？立即注册</el-button>
              <register :class="{ login_div: !register }"></register>
              <el-button
                :class="{ login_div: !register }"
                @click="register = false"
                id="register_login"
                type="text"
              >已有帐号？马上登录</el-button>
            </div>
          </div>
          <div id="main_main">
            <el-row>
              <el-col :span="6">
                <div class="show_advantage">
                  <el-image
                    :fit="fit"
                    src="http://www.yytong.com/images/pro-02.png"
                    style="width: 180px; height: 110px"
                  ></el-image>
                  <div class="advantage_text">老人档案管理</div>
                  <div class="advantage_detail">完善老人数据信息，以及老人行为情感信息分析</div>
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
                  <div class="advantage_detail">摄像头监测，实时识别人脸，分析老人情感，监控老人行为</div>
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
                  <div class="advantage_detail">提供丰富数据可视化图表，监测信息可视化</div>
                </div>
              </el-col>
            </el-row>
          </div>
          <div id="main_footer">
            <el-row>
              <el-col :span="24">
                <div class="scenarios_title">
                  <div class="scenarios_title_text">项目背景</div>
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
              <el-col :span="13">
                <div
                  class="about_text"
                  style="padding-top: 40px"
                >老人之家是一个基于情感分析的智慧养老系统。通过摄像头实时拍摄到的画面，人工智能算法实时分析老人的情感、分析是否有人摔倒、分析是否有人闯入禁止区域、分析老人是否有和义工互动并追踪义工、分析是否有陌生人出现并追踪陌生人。一旦上述事件发生，该事件会立即插入到数据库中。这些事件数据被实时地更新在报表中，管理人员因此可以迅速做出反应。</div>
              </el-col>
            </el-row>
          </div>
          <div id="technology">
            <div class="scenarios_title">
              <div class="scenarios_title_text">技术介绍</div>
              <el-divider class="scenarios_divider"></el-divider>
            </div>
            <div class="tech_area">
              <el-row>
                <el-col :span="6">
                  <div class="show_advantage">
                    <el-image
                      :fit="fit"
                      :src="require(`../../assets/img/advantage/bk1.jpg`)"
                      style="width: 240px; height: 200px"
                    ></el-image>
                    <div class="advantage_text">YOLO5</div>
                    <div class="advantage_detail">一个用于目标检测的网络。可以用来确定图像中存在某些对象的位置，以及对这些对象进行分类。</div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="show_advantage_2">
                    <el-image
                      :fit="fit"
                      :src="require(`../../assets/img/advantage/face.jpg`)"
                      style="width: 240px; height: 200px"
                    ></el-image>
                    <div class="advantage_text">DeepFace</div>
                    <div
                      class="advantage_detail"
                    >deepface是python的轻量级面部识别和面部属性分析（年龄，性别，情感和种族）框架。您只需几行代码就可以应用面部分析。它弥合了软件工程和机器学习研究之间的鸿沟，非常适合想开车但不会造车的你。</div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="show_advantage">
                    <el-image
                      :fit="fit"
                      :src="require(`../../assets/img/advantage/ORM.jpg`)"
                      style="width: 240px; height: 200px"
                    ></el-image>
                    <div class="advantage_text">ORM</div>
                    <div class="advantage_detail">ORM通过使用描述对象和数据库之间映射的元数据，将程序中的对象自动持久化到关系数据库中。</div>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="show_advantage">
                    <el-image
                      :fit="fit"
                      :src="require(`../../assets/img/advantage/pp.jpg`)"
                      style="width: 240px; height: 200px"
                    ></el-image>
                    <div class="advantage_text">mediapipe</div>
                    <div class="advantage_detail">
                      MediaPipe是一个用于构建机器学习管道的框架，用于处理视频、音频等时间序列数据。这个跨平台框架适用于桌面/服务器、Android、iOS和嵌入式设备，如Raspberry
                      Pi和Jetson Nano。。
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-footer class="footer">
      <div class="el_footer_text">Copyright© 2022疯人院 All Rights Reserved</div>
    </el-footer>
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
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      // bg2: require('C:/Users/BaiYu/Desktop/图片资源/Google/LeetCode.png'),
      register: false
    };
  },
  components: {
    login,
    register
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
    isSearch() {}
  }
};
</script>

<style scoped>
#login_div {
  position: absolute;
  left: 62%;
  opacity: 0.9;
  bottom: 750px;
  height: 100px;
  width: 450px;
}

.main_div {
  width: 100%;
}

.el-main {
  color: #333;
  text-align: center;
  padding: 0;
  margin: 0;
  height: 1458px;
  width: 100%;
}

#email_logo {
  position: absolute;
  left: 80%;
}
.login_div {
  display: none;
}

#cube {
  position: absolute;
  top: 50px;
  left: 65%;
  animation: changeDeg 60s linear 0.05s infinite;
}

#main_header {
  position: relative;
  /* top: 60px; */
  left: 0;
  width: 100%;
  height: 961px;
  background-color: #171717;
}

#main_main {
  position: absolute;
  top: 1020px;
  left: 0;
  width: 100%;
  height: 286px;
  background-color: #f9f9f9;
}

#main_footer {
  position: absolute;
  top: 1305px;
  left: 0;
  width: 100%;
  height: 713px;
  background-color: #f9f9f9;
}
.footer {
  position: absolute;
  top: 2465px;
  left: 0;
  width: 100%;
  height: 713px;
  background-color: #22282d;
  color: #f9f9f9;
}

.el_footer_text {
  padding: 20px;
  color: #8e8f90;
  font-family: 微軟正黑體;
  font-size: 14px;
}

#technology {
  position: absolute;
  top: 1805px;
  left: 0;
  width: 100%;
  height: 713px;
  background-color: #f9f9f9;
}

#main_header_text_chinese1 {
  position: absolute;
  left: 15%;
  top: 255px;
  color: #f9f9f9;
  font-family: 微軟雅黑;
  font-size: 85px;
  font-weight: 900;
}

#main_header_text_chinese2 {
  position: absolute;
  left: 15%;
  top: 400px;
  color: #f9f9f9;
  font-family: 微軟雅黑;
  font-size: 105px;
  font-weight: 900;
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
  margin-top: 22px;
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
  margin-top: 22px;
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
  text-align: justify;
  font-family: Arial, "微软雅黑", sans-serif;
  font-size: 24px;
  line-height: 200%;
  color: #5e5e5e;
}

.btn {
  position: fixed;
  right: 5%;
  top: 1%;
}
</style>
