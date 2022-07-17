<template>
  <div>
    <h1>项目技术介绍<br/>Technology Introduction</h1>
    <div class="background"
         v-bind:style="{backgroundImage:'url(' + require('../../assets/img/advantage/bk3.jpg') + ')'}">
      <!-- <span>Tech</span> -->
    </div>
    <h2>
      <div class="tech_area">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="show_advantage">
              <el-image
                :fit="fit"
                :src="require(`../../assets/img/advantage/bk1.jpg`)"
                style="width: 240px; height: 200px"></el-image>
              <div class="advantage_text">YOLO5</div>
              <div class="advantage_detail">一个用于目标检测的网络。可以用来确定图像中存在某些对象的位置，以及对这些对象进行分类。</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="show_advantage_2">
              <el-image
                :fit="fit"
                :src="require(`../../assets/img/advantage/face.jpg`)"
                style="width: 240px; height: 200px"></el-image>
              <div class="advantage_text">DeepFace</div>
              <div class="advantage_detail">deepface是python的轻量级面部识别和面部属性分析（年龄，性别，情感和种族）框架。您只需几行代码就可以应用面部分析。它弥合了软件工程和机器学习研究之间的鸿沟，非常适合想开车但不会造车的你。</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="show_advantage">
              <el-image
                :fit="fit"
                :src="require(`../../assets/img/advantage/ORM.jpg`)"
                style="width: 240px; height: 200px"></el-image>
              <div class="advantage_text">ORM</div>
              <div class="advantage_detail">ORM通过使用描述对象和数据库之间映射的元数据，将程序中的对象自动持久化到关系数据库中。</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="show_advantage">
              <el-image
                :fit="fit"
                :src="require(`../../assets/img/advantage/pp.jpg`)"
                style="width: 240px; height: 200px"></el-image>
              <div class="advantage_text">mediapipe</div>
              <div class="advantage_detail">MediaPipe是一个用于构建机器学习管道的框架，用于处理视频、音频等时间序列数据。这个跨平台框架适用于桌面/服务器、Android、iOS和嵌入式设备，如Raspberry Pi和Jetson Nano。。</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  name: "tmp_bg",

  mounted() {
    // const bkg = document.querySelector(".background")
    // document.addEventListener('scroll', () =>{
    //   console.log(bkg)
    //   const scrollY = window.scrollY
    //   if(scrollY !== 0){
    //     bkg.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
    //   }else{
    //     bkg.style.backgroundPosition = ''
    //   }
    // })
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  height: 200vh;
  overflow-x: hidden;
}

.background{
  background-size: cover;
  background-position: 75% 75%;
  height: 1458px;
  font: 900 36rem '';
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  position: relative;
  text-align: center;
  overflow: hidden;
}
/*
.background::before{
  content: '';
  background-size: cover;
  background-image: inherit;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -99;
} */

h1{
  position: absolute;
  text-align: center;
  width: 100%;
  letter-spacing: 10px;
  color: #3c3f41;
}

h2{
  position: absolute;
  letter-spacing: 1px;
  font-size: 20px;
  top: 120vh;
  width: 100%;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);
  padding: 30px;
  background-color: rgba(0, 0, 0, .3);
}

.advantage_text{
  font-size: 20px;
  color: #ffffff;
}

.advantage_detail{
  font-size: 15px;
  color: #fcfcfc;
}

</style>
