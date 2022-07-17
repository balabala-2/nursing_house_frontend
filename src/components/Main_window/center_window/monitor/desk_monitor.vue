<template>
  <div>
    <div v-if="isRouterAlive">
      <h1 class="text">桌子上监控</h1>

      <el-row>
        <el-col :span="24" class="mmain">
          <img class="pic" :src="img_url" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_url:
        "http://127.0.0.1:8000/api/desk_video?time=" + new Date().getTime(),
      isRouterAlive: true
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
@import "../../../../assets/css/page.css";

.text {
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
}

.pic {
  width: 70%;
  height: 650px;
}
</style>
