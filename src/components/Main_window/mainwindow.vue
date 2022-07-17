<template>
  <div>
    <cli-title class="title"></cli-title>
    <div class="menu">
      <cli-menu page-index="1"></cli-menu>
    </div>
    <router-view class="center"></router-view>
  </div>
</template>

<script>
import CliTitle from "@/components/Main_window/cliTitle";
import CliMenu from "@/components/Main_window/cliMenu";
import TotalNum from "@/components/Main_window/totalNum";

export default {
  name: "index",
  components: { CliTitle, CliMenu }
};
</script>

<style scoped>
@import "../../assets/css/page.css";

.text {
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.subtext {
  font-size: 14px;
  text-align: center;
}

/*.mmain{*/
/*  background-color: lightblue;*/
/*}*/

/*.msmall{*/
/*  background-color: orange;*/
/*}*/
</style>
