<template>
  <div>
    <div style="display: flex; justify-content: center">
      <img src="../../assets/img/IMG_7161.jpeg" style="width: 65%" alt />
    </div>

    <!--                background-color="#324157"-->
    <el-menu
      :default-active="pageIndex"
      style="margin-left: 0px"
      background-color="#ffffff"
      text-color="#000000"
      active-text-color="#20a0ff"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <!--                background-color="#CCEEFF"-->
      <!--                text-color="#003377"-->
      <!--                active-text-color="#009FCC">-->
      <el-submenu index="monitor">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">监控信息</span>
        </template>
        <el-menu-item index="courtyard_monitor">
          <!--            <i class="el-icon-user"></i>-->
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;院子里监控</span>
        </el-menu-item>
        <el-menu-item index="corridor_monitor">
          <!--          <i class="el-icon-user"></i>-->
          <span slot="title"
            >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;走廊墙上监控</span
          >
        </el-menu-item>
        <el-menu-item index="room_monitor">
          <!--          <i class="el-icon-user"></i>-->
          <span slot="title"
            >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;房间墙上监控</span
          >
        </el-menu-item>
        <el-menu-item index="desk_monitor">
          <!--          <i class="el-icon-user"></i>-->
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;桌子上监控</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="manage">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span slot="title">人员管理</span>
        </template>
        <el-menu-item index="elder_manage">
          <!--            <i class="el-icon-user"></i>-->
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;老人管理</span>
        </el-menu-item>
        <el-menu-item index="vol_manage">
          <!--          <i class="el-icon-user"></i>-->
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;义工管理</span>
        </el-menu-item>
        <el-menu-item index="person_manage">
          <!--          <i class="el-icon-user"></i>-->
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;工作人员</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="statistics">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">统计报表</span>
        </template>
        <el-menu-item index="elder_statistics">
          <!--            <i class="el-icon-user"></i>-->
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;老人统计</span>
        </el-menu-item>
        <el-menu-item index="vol_statistics">
          <!--          <i class="el-icon-user"></i>-->
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;义工统计</span>
        </el-menu-item>
        <el-menu-item index="person_statistics">
          <!--          <i class="el-icon-user"></i>-->
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;工作人员</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="event">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">实时事件</span>
        </template>
        <el-menu-item index="emotion_event">
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;老人情感监测</span>
        </el-menu-item>
        <el-menu-item index="interactive_event">
          <span slot="title"
            >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;老人义工交互</span
          >
        </el-menu-item>
        <el-menu-item index="invade_event">
          <span slot="title"
            >&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;非法入侵检测</span
          >
        </el-menu-item>
        <el-menu-item index="fall_event">
          <span slot="title">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;老人摔倒监测</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "cliMenu",
  props: {
    pageIndex: {
      type: String,
    },
  },
  data() {
    return {};
  },

  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(keyPath);
      let path = "/mainwindow/";
      if (keyPath.length == 1) {
        var keyPath1 = keyPath[0].substring(0, 2);
        console.log(keyPath1);

        // path += keyPath[0] + "/" +keypath[1];

        // if (keyPath1 == "ev") {
        //   path += "event/" + keyPath[0];
        // }
        if (keyPath1 == "ma") {
          path += "manager/" + keyPath[0];
        }
      } else {
        path += keyPath[0] + "/" + keyPath[1];
      }
      this.$router.push({ path: path });
    },
  },
};
</script>

<style scoped>
</style>
