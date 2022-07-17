<template>
  <div>
    <el-row>
      <el-col :span="24">
        <personChart1></personChart1>
      </el-col>
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
