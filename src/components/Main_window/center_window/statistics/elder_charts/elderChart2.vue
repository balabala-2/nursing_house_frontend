<template>
  <div class="Echarts">
    <div
      id="echart2"
      style="width: 100%; height: 340px; margin-top: 45px"
    ></div>
  </div>
</template>

<script>
export default {
  name: "elderChart2",
  data() {
    return {
      option: {},
      guardian_divide: {
        son: 2,
        daughter: 14,
        grandson: 19,
        granddaughter: 22,
        other: 10,
      },
      guardian_num: 0,
    };
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart2"));
    this.updateEcharts();
  },
  created(){
    this.init()
  },
  methods: {
    init(){
      this.$api.get_guardian_relation({}, {type: "json"}).then((response)=>{
        if(response.state === 1){
          this.guardian_divide={
            son: response.son,
            daughter: response.daughter,
            grandson: response.grandson,
            granddaughter: response.granddaughter,
            other: response.other,
          }
          this.guardian_num = response.guardian_num
          this.updateEcharts()
        }
      })
    },
    updateEcharts() {
      this.option = {
        title: {
          text: "监护人分布图",
          subtext: "\n监护人总数（人）：\n\n    "+this.guardian_num+"人",
          x: 35,
          y: 8,
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c}人 ({d}%)",
        },
        toolbox: {
          show: true,
          left: 515,
          top: 15,
          feature: {
            saveAsImage: {},
          },
        },

        legend: {
          orient: "vertical",
          // x: "right",
          padding: [35, 20, 0, 0],
          top: 25,
          right: 100,
        },
        series: [
          {
            center: ["44%", "55%"],
            name: ["儿子", "女儿", "孙子", "孙女", "其他"],
            type: "pie",
            radius: "70%",
            data: [
              { value: this.guardian_divide.son, name: "儿子" },
              { value: this.guardian_divide.daughter, name: "女儿" },
              { value: this.guardian_divide.grandson, name: "孙子" },
              { value: this.guardian_divide.granddaughter, name: "孙女" },
              { value: this.guardian_divide.other, name: "其他" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style scoped>
</style>