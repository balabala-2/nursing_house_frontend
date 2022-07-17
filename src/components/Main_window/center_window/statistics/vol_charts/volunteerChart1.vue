<template>
  <div class="Echarts">
    <div id="echart1" style="width: 100%; height: 740px; margin-top:45px"></div>
  </div>
</template>

<script>
export default {
  name: "volunteerChart1",
  data() {
    return {
      option: {},
      entry_num_info: [],
      resignation_num_info: [],
    };
  },
  created() {
    this.init();
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart1"));
    this.updateEcharts();
  },
  methods: {
    init() {
      this.$api.get_volunteer_entry_resignation({}, { type: "json" }).then((response) => {
        if (response.state === 1) {
          
          this.entry_num_info = response.entry_num_info;
          this.resignation_num_info = response.resignation_num_info;
          this.updateEcharts();
        }
      });
    },
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
          itemHeight: 15,
          y: 40
        },
        toolbox: {
          left: 1200,
          top: 38,
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          y: 180,
          height: 400,
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
            name: "义工人数",
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
            data: this.resignation_num_info 
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
            data: this.entry_num_info
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