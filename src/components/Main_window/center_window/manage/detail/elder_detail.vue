<template>
  <div>
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      style="
        height: 20%;
        width: 40%;
        margin-left: 30%;
        margin-top: 3%;
        padding: 3%;
        background-color: white;
      "
    >
      <el-form-item label="姓名">
        <el-input v-model="form.name" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.gender" :disabled="isUse">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.tel" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="身份证">
        <el-input v-model="form.id_card" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="房间号">
        <el-input v-model="form.room_number" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-input v-model="form.birthday" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="入院时间">
        <el-input v-model="form.in_time" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="出院时间">
        <el-input v-model="form.out_time" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="监护人">
        <el-input v-model="form.guardian_name" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="监护电话">
        <el-input v-model="form.guardian_tel" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="关系">
        <el-input v-model="form.guardian_relation" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remarks" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="margin-left: -30px">
          {{ msg }}
        </el-button>
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
        // id: 0,
        // name: 'ffff',
        // gender:'',
        // tel:'',
        // id_card:'',
        // room_number: '',
        // birthday: '',
        // in_time:'',
        // out_time:'',
        // guardian_name:'',
        // guardian_tel:'',
        // guardian_relation:'',
      },
      all_info: {},
    };
  },
  created() {
    // console.log(this.$route.query.elder_info)
    this.all_info = this.$route.query.elder_info;
    this.form = this.all_info;
    // this.form.name = this.all_info.name;
    // this.form.sex = this.all_info.sex;
    // this.form.tel = this.all_info.tel;
    // this.form.id_Card = this.all_info.id_card;
    // this.form.in_time = this.all_info.in_time;
    // this.form.out_time = this.all_info.out_date;
    // this.form.room = this.all_info.room;
    // this.form.birth = this.all_info.birthday;
    // this.form.guard_name = this.all_info.guardian_name;
    // this.form.guard_tel = this.all_info.guardian_tel;
    // this.form.relation = this.all_info.guardian_relation;

    // 页面加载时就从本地通过localstorage获取存储的token值
    // this.token = localStorage.getItem("token");
    // this.$api.test({}).then((response) =>{
    //   console.log(response)
    // })
  },
  mounted() {
    // this.$api.()
  },
  methods: {
    //成功弹出框
    success_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "success",
      });
    },
    //失败弹出框
    fail_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "error",
      });
    },
    onSubmit() {
      console.log("submit!");
      console.log(this.msg);
      if (this.msg == "编辑") {
        console.log("1111");
        this.isUse = false;
        this.msg = "确定";
        this.msg2 = "取消";
      } else if (this.msg == "确定") {
        let param = {
          id: this.form.id,
          name: this.form.name,
          gender: this.form.gender == "男" ? 1 : 0,
          tel: this.form.tel,
          id_card: this.form.id_card,
          birthday: this.form.birthday,
          in_time: this.form.in_time,
          out_time: this.form.out_time,
          face_feature: this.form.face_feature,
          room_number: this.form.room_number,
          guardian_name: this.form.guardian_name,
          guardian_tel: this.form.guardian_tel,
          guardian_relation: this.form.guardian_relation,
          remarks: this.form.remarks,
          create_manager_id: this.form.create_manager_id,
        };
        console.log(param);
        this.$api
          .update_elderly_info(param, { type: "json"})
          .then((response) => {
            if (response.state === 1) {
              this.success_box("修改成功");
              this.msg = "编辑";
              this.msg2 = "返回";
              this.isUse = true;
            } else {
              this.fail_box(response.msg);
            }
          });
        //TODO： 修改信息：
      }
      //修改接口
    },
    onCancel() {
      console.log("Cancel!");
      console.log(this.msg);
      if (this.msg2 == "返回") {
        console.log("1111");
        this.msg2 = "取消";
        this.$router.push({ path: `/mainwindow/manage/elder_manage` });
        console.log("1111");
      } else if (this.msg2 == "取消") {
        this.msg = "编辑";
        this.msg2 = "返回";
        this.isUse = true;
      }
    },
  },
};
</script>

<style scoped>
@import "../../../../../assets/css/page.css";
</style>
