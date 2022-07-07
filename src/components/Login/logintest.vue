<template>
  <div id="login_div">
    <img :src="img1" alt="">
  </div>
</template>

<script>

export default {

  data() {
    return{
      img1:'',
      visible: true,
      register: false
    }
  },

  created(){
    this.img1 = this.$api.avatar + "?user=" + this.username// get
  },
  methods:{

    login() {
      this.visible = false;
    },
    back() {
      this.visible = true;
    },
  }
};
</script>

<style scoped>

</style>
