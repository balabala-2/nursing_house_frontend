<template>
  <div class="Echarts">
    <div id="echart1" style="width: 100%; height: 440px; margin-top:45px"></div>
  </div>
</template>

<script>
export default {
  name: "personChart1",
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart1"));
    this.updateEcharts();
  },
  methods: {
    updateEcharts() {
      this.option = {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["离职人数", "入职人数"],
          textStyle: {
            //图例文字的样式
            // color: "#fff",
            fontSize: 20
          },
          itemWidth: 15,
          itemHeight: 15
        },
        toolbox: {
          left: 800,
          top: -3,
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          y: 80,
          height: 330,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: [
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月"
            ],
            axisLine: {
              show: true,
              symbol: ["none", "arrow"],
              symbolSize: [5, 10],
              symbolOffset: 10
            }
          }
        ],
        yAxis: [
          {
            show: true,
            type: "value",
            name: "工作人员人数",
            nameTextStyle: {
              fontSize: 16
            },
            axisLine: {
              show: true,
              symbol: ["none", "arrow"],
              symbolSize: [5, 10],
              symbolOffset: 10
            }
          }
        ],
        series: [
          {
            name: "离职人数",
            type: "line",
            stack: "总量",
            areaStyle: { normal: {} },
            data: [2, 5, 1, 3, 0, 4, 2, 2, 1, 0, 3, 1]
          },
          {
            name: "入职人数",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: [5, 10, 3, 5, 2, 6, 10, 5, 8, 2, 10, 13]
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