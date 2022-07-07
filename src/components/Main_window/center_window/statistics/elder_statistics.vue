<template>
  <div>
    <el-row>
      <el-col :span="12">
        <elderChart1></elderChart1>
      </el-col>
      <el-col :span="12">
        <elderChart2></elderChart2>
      </el-col>
    </el-row>
    <el-row>
      <div id="search_elder">
        <el-autocomplete
          class="elder_search"
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="老人近七天情绪查询"
          @select="handleSelect"
        ></el-autocomplete>
        <el-button icon="el-icon-search" id="butt" circle></el-button>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24">
        <elderChart3></elderChart3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import elderChart1 from "./elder_charts/elderChart1.vue";
import elderChart2 from "./elder_charts/elderChart2.vue";
import elderChart3 from "./elder_charts/elderChart3.vue";
export default {
  components: {
    elderChart1,
    elderChart2,
    elderChart3
  }
};
</script>

<style>
#search_elder {
  margin-top: 40px;
}
.elder_search {
  position: absolute;
  left: 40px;
}

#butt {
  margin-right: 800px;
}
</style>
