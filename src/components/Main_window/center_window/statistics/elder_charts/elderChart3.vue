<template>
  <div class="Echarts">
    <el-row>
      <div id="search_elder">
        <el-select v-model="name" filterable placeholder="请选择" value-key="id" @change="applicantTypes">
          <el-option
            v-for="item in id_names"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <el-button icon="el-icon-search" id="butt" circle @click="getEmotion"></el-button>
      </div>
    </el-row>

    <el-row>
      <div
        id="echarts3"
        style="width: 100%; height: 370px; margin-left: 10px"
      ></div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "elderChart3",
  data() {
    return {
      dates:[],
      name: "",
      id_names: [],
      emotions:[],
    };
  },
  mounted() {
    this.myChart = this.$echarts.init(document.getElementById("echarts3"));
    this.updateEcharts();
  },
  created() {
    this.init();
  },
  methods: {
    querySearchAsync() {},
    getDate(offset){
      let now = new Date();
      let myDate = new Date(now - offset * 24*60*60*1000);
      let year = myDate.getFullYear();
      let month = myDate.getMonth() + 1;
      if (month.toString().length == 1) {
        month = "0" + month;
      }
      let day = myDate.getDate()
      if (day.toString().length == 1) {
        day = "0" + day;
      }
      return year + "-" + month + "-" + day;
    },
    getSevenDays(nums){
      
    },
    init() {
      let id_names = []
      this.$api.get_elderly_names().then((response) => {
        if (response.state === 1) {
          for (let i = 0; i < response.ids.length; i++) {
            let add_msg = {
              id: response.ids[i],
              name: response.names[i],
            };
            this.id_names.push(add_msg)
          }
        }
        this.$api.get_single_elderly_emotion({}, {urlParam: this.id_names[0].id}).then((response)=>{
          if(response[0] === 1){
            for (let i = 0; i < response[2].length; i++){
              this.emotions.push(response[2][i])
            }
          }
          this.name = this.id_names[0].name;
          this.dates = JSON.parse(JSON.stringify(this.emotions))
          //this.getSevenDays(this.emotions.length);
          this.updateEcharts();
        })
      });
      //初始化：第一个老人
    },
    getEmotion(){
      
    },
    applicantTypes(id){
      this.$api.get_single_elderly_emotion({}, {urlParam: id}).then((response)=>{
        if(response.state === 1){
          for (let i = 0; i < response.results.length; i++){
            this.emotions.push(response.results.times)
          }
          this.updateEcharts();
        }
      })
    },
    handleSelect() {},
    updateEcharts() {
      this.option = {
        tooltip: {
          trigger: "axis",
          transitionDuration: 0,
        },
        legend: {
          data: ["老人情绪变化"],
          left: 580,
          top: 340,
          textStyle: {
            //图例文字的样式
            // color: "#fff",
            fontSize: 20,
          },
          itemWidth: 15,
          itemHeight: 15,
        },
        toolbox: {
          left: 230,
          top: 40,
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          //   x: 0,
          y: 80,
          height: 230,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.dates,
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 10,
          },
        },
        yAxis: {
          show: true,
          type: "category",
          name: "老人情绪",
          nameTextStyle: {
            fontSize: 16,
          },
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolSize: [5, 10],
            symbolOffset: 10,
          },
          //   boundaryGap: ["20%", "20%"]
        },
        series: [
          {
            name: "老人情绪变化",
            type: "line",
            // stack: "Total",
            data: this.dates,
          },
        ],
      };

      this.myChart.setOption(this.option);
    },
  },
};
</script>

<style>
</style>