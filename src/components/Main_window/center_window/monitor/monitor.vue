<template>
  <div>
    <div v-if="isRouterAlive">
      <el-row class="video_row">
        <el-col :span="12" class="video_col">
          <img src="http://localhost:8000/api/room_video"/>
        </el-col>
        <el-col :span="12" class="video_col">
          <img src="http://localhost:8000/api/aisle_video"/>
        </el-col>
      </el-row>
      <el-row class='video_row'>
        <el-col :span="12" class="video_col">
          <img src="http://localhost:8000/api/yard_video"/>
        </el-col>
        <el-col :span="12" class="video_col">
          <img src="http://localhost:8000/api/desk_video"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      videoName: {
        roomVideo: '房间',
        aisleVideo: '走廊',
        yardVideo: '院子',
        deskVideo: '桌子'
      },
      isRouterAlive: true
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style scoped>
.text {
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.subtext {
  font-size: 14px;
  text-align: center;
}

.video_row{
  width: 100%;
  height: 50%;
}
.video_col{
  width: 50%;
}
</style>
