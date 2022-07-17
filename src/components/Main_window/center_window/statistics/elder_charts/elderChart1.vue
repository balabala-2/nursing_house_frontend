<template>
  <div class="Echarts">
    <div id="echart1" style="width: 100%; height: 340px; margin-top:45px"></div>
  </div>
</template>

<script>
export default {
  name: "elderChart1",
  data(){
    return{
      option: {},
      person_divide:{
        // sixty_seventy: 2,
        // seventy_eighty: 14,
        // eighty_ninety: 19,
        // ninety_hundred: 22,
        // over_hundred: 10,
      },
      elderly_num: 0,
    }
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echart1"));
    this.updateEcharts();
  },
  created(){
    this.init();
  },
  methods: {
    init(){
      this.$api.get_elderly_ages({}, {type: "json"}).then((response)=>{
        if(response.state === 1){
          this.person_divide = {
            sixty_seventy: response.sixty_seventy,
            seventy_eighty: response.seventy_eighty,
            eighty_ninety: response.eighty_ninety,
            ninety_hundred: response.ninety_hundred,
            over_hundred: response.over_hundred,
          }
          this.elderly_num = response.elderly_num
          this.updateEcharts();
        }
      })
    },
    updateEcharts() {
      this.option = {
        title: {
          text: "年龄统计图",
          subtext: "\n老人总数（人）：\n\n    "+this.elderly_num+"人",
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
              { value: this.person_divide.sixty_seventy, name: "60-70" },
              { value: this.person_divide.seventy_eighty, name: "70-80" },
              { value: this.person_divide.eighty_ninety, name: "80-90" },
              { value: this.person_divide.ninety_hundred, name: "90-100" },
              { value: this.person_divide.over_hundred, name: "100+" }
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