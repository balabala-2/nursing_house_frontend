<template>
  <div class="Echarts">
    <div id="echarts3" style="width: 100%; height: 370px; margin-left:10px"></div>
  </div>
</template>

<script>
export default {
  name: "elderChart3",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts3"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        tooltip: {
          trigger: "axis",
          transitionDuration: 0
        },
        legend: {
          data: ["老人情绪变化"],
          left: 580,
          top: 340,
          textStyle: {
            //图例文字的样式
            // color: "#fff",
            fontSize: 20
          },
          itemWidth: 15,
          itemHeight: 15
        },
        toolbox: {
          left: 230,
          top: 40,
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          //   x: 0,
          y: 80,
          height: 230,
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 10
          }
        },
        yAxis: {
          show: true,
          type: "category",
          name: "老人情绪",
          nameTextStyle: {
            fontSize: 16
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 10
          }
          //   boundaryGap: ["20%", "20%"]
        },
        series: [
          {
            name: "老人情绪变化",
            type: "line",
            // stack: "Total",
            data: ["高兴", "悲伤", "振奋", "高兴", "悲伤", "振奋", "高兴"]
          }
        ]
      };

      this.myChart.setOption(this.option);
    }
  }
};
</script>

<style>
</style>