<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px"
             style="height: 30%; width: 40%; margin-left: 30%;padding: 3%; background-color: white">
      <el-form-item label="姓名">
        <el-input v-model="form.name" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex" :disabled="isUse">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.tel" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="学历">
        <el-input v-model="form.edu" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="职务">
        <el-input v-model="form.occuption" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="工资">
        <el-input v-model="form.wage" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="入职时间">
        <el-input v-model="form.in_time" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="离职时间">
        <el-input v-model="form.out_time" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.out_time" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="margin-left: -30px">  {{msg}} </el-button>
        <el-button @click="onCancel">{{ msg2 }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "",
      msg: "编辑",
      msg2: "返回",
      isUse: true,
      token: "",
      form: {
        name: 'ffff',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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

  },
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.msg);
      if(this.msg=="编辑"){
        console.log("1111");
        this.isUse = false;
        this.msg = "确定";
        this.msg2 = "取消";
      }
      else if(this.msg == "确定"){
        this.msg = "编辑";
        this.msg2 = "返回";
        this.isUse = true;
      }
    },
    onCancel(){
      console.log('Cancel!');
      console.log(this.msg);
      if(this.msg2=="返回"){
        console.log("1111");
        this.msg2 = "取消";
        this.$router.push({ path: `/mainwindow/manage/vol_manage` });
        console.log("1111");
      }
      else if(this.msg2 == "取消"){
        this.msg = "编辑";
        this.msg2 = "返回";
        this.isUse = true;
      }
    }
  }
};
</script>

<style scoped>
@import "../../../../../assets/css/page.css";
</style>
