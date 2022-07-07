<template>
  <div class="Echarts">
    <div id="echart1" style="width: 100%; height: 340px; margin-top:45px"></div>
  </div>
</template>

<script>
export default {
  name: "elderChart1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: {
          text: "年龄统计图",
          subtext: "\n老人总数（人）：\n\n    10000人",
          x: 35,
          y: 8
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c}人 ({d}%)"
        },
        toolbox: {
          show: true,
          left: 515,
          top: 15,
          feature: {
            saveAsImage: {}
          }
        },

        legend: {
          orient: "vertical",
          // x: "right",
          padding: [35, 20, 0, 0],
          top: 25,
          right: 100
        },
        series: [
          {
            center: ["44%", "55%"],
            name: ["60-70", "70-80", "80-90", "90-100", "100+"],
            type: "pie",
            radius: "70%",
            data: [
              { value: 2, name: "60-70" },
              { value: 14, name: "70-80" },
              { value: 19, name: "80-90" },
              { value: 22, name: "90-100" },
              { value: 10, name: "100+" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped>
</style>