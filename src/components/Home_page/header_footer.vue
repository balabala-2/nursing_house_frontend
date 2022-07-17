<template>
  <div>
    <el-container>
      <el-header style="height:100px;">
        <el-row>
          <el-col :span="12">
            <el-menu
              class="el-menu"
              mode="horizontal"
              @select="handleSelect"
              background-color="#22282d"
              text-color="#fff"
              active-text-color="#ef4f19"
            >
              <el-menu-item index="1" @click="change_view('/home_page')" class="menu_item">首&emsp;页</el-menu-item>
              <!-- <el-menu-item index="2" @click="change_view('/advantage')" class="menu_item">技术介绍</el-menu-item> -->
              <el-menu-item index="3" @click="change_view('/about_us')" class="menu_item">关于我们</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>

      <el-main class="el-main">
        <router-view class="home_page"></router-view>
      </el-main>
      <el-footer>
        <div class="el_footer_text">Copyright© 2022疯人院 All Rights Reserved</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "header-footer",
  data() {
    return {
      activeIndex: "1",
      fit: "scale-down"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    change_view(path) {
      const that = this;
      that.$router.replace(path);
    }
  }
};
</script>

<style scoped>
.el-menu.el-menu--horizontal {
  border-bottom: solid 0px #e6e6e6;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
  text-decoration: none;
}
/* .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
} */
.el-menu-item {
  height: 70px;
  padding: 0 40px;
}
.main_div {
  width: 100%;
}

.el-header {
  background-color: #22282d;
  color: #333;
  text-align: center;
  /* height: 600px; */
}
.el-footer {
  background-color: #22282d;
  color: #333;
  text-align: center;
  height: 500px;
  /* margin-top: 450px; */
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

.menu_item {
  line-height: 100px;
  font-size: 24px;
}
</style>
