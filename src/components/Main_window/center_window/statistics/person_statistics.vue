<template>
  <div>
    <el-row>
      <el-col :span="24">
        <personChart1></personChart1>
      </el-col>
    </el-row>
    <el-row>
      <div id="analyze">工作人员数据分析</div>
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
      <div id="sum">工作人员总结</div>
    </el-row>
  </div>
</template>

<script>
import personChart1 from "./person_charts/personChart1.vue";
export default {
  components: {
    personChart1
  }
};
</script>

<style>
</style>
