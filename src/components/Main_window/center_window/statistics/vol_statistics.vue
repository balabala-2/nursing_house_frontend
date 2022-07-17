<template>
  <div>
    <el-row>
      <el-col :span="24">
        <volunteerChart1></volunteerChart1>
      </el-col>
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

</style>
