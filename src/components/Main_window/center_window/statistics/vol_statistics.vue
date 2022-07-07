<template>
  <div>
    <el-row>
      <el-col :span="24">
        <volunteerChart1></volunteerChart1>
      </el-col>
    </el-row>
    <el-row>
      <div id="analyze">义工数据分析</div>
      <el-col :span="12">
        <div>
          <h4>入职分析</h4>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h4>离职分析</h4>
        </div>
      </el-col>
      <div id="sum">义工总结</div>
    </el-row>
  </div>
</template>

<script>
import volunteerChart1 from "./vol_charts/volunteerChart1.vue";
export default {
  components: {
    volunteerChart1
  }
};
</script>

<style>
#analyze {
  margin: 40px;
  font-size: 20px;
  font-weight: 900;
}

#sum {
  margin: 40px;
  font-size: 18px;
  font-weight: 700;
}
</style>
