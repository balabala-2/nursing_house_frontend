<template>
  <div>管理员信息页面</div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "",
      token: "",
    };
  },
  created() {
    //页面加载时就从本地通过localstorage获取存储的token值
    this.token = localStorage.getItem("token");
    this.$api.test({}).then((response) =>{
        console.log(response)
    })
  },
  mounted(){
    // this.$api.()
  }
};
</script>

<style>
</style>