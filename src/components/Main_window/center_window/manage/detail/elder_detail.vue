<template>
  <div>
    <el-form
      ref="form1"
      :model="form"
      label-width="80px"
      :rules="rules"
      style="
        height: 20%;
        width: 40%;
        margin-left: 25%;
        margin-top: 3%;
        padding: 3%;
        background-color: white;
      "
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" :disabled="isUse" style="text-algin:center"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="form.gender" :disabled="isUse">
          <el-radio label="女"></el-radio>
          <el-radio label="男"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="form.tel" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="id_card">
        <el-input v-model="form.id_card" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="房间号" prop="room_number">
        <el-input v-model="form.room_number" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="生日" prop="birthday">
        <el-input v-model="form.birthday" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="入院时间" prop="in_time">
        <el-input v-model="form.in_time" :disabled="isUse"></el-input>
      </el-form-item>

      <el-form-item label="监护人" prop="guardian_name">
        <el-input v-model="form.guardian_name" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="监护电话" prop="guardian_tel">
        <el-input v-model="form.guardian_tel" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item label="关系" prop="guardian_relation">
        <!-- <el-input v-model="form.guardian_relation" :disabled="isUse"></el-input> -->
        <el-select
          v-model="form.guardian_relation"
          style="width:100%"
          :disabled="isUse"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注" prop="remarks">
        <el-input v-model="form.remarks" :disabled="isUse"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="margin-left: -30px">{{ msg }}</el-button>
        <el-button @click="onCancel">{{ msg2 }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data: function() {
    var validPhone = (rule, value, callback) => {
      //正则判断手机号只能为11位数字
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机号格式不正确"));
      } else {
        callback();
      }
    };
    var validRealName = (rule, value, callback) => {
      const realnameReg = /^([a-zA-Z\u4e00-\u9fa5\·]{1,10})$/;
      if (!value) {
        return callback(new Error("真实姓名不能为空!!"));
      }
      setTimeout(() => {
        if (!realnameReg.test(value)) {
          return callback(new Error("您的真实姓名格式错误,请输入英文或汉字!"));
        } else {
          callback();
        }
      }, 500);
    };

    //正则判断身份证号只能为18位数字，最后一位可以为数字或者X
    var validIdCard = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入身份证号"));
      } else if (
        !/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
          value
        )
      ) {
        callback(new Error("身份证号格式不正确"));
      } else {
        callback();
      }
    };

    //正则判断房间号只能为3位数字
    var validRoomNumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入房间号"));
      } else if (!/^[0-9]{3}$/.test(value)) {
        callback(new Error("房间号格式为三位数字"));
      } else {
        callback();
      }
    };

    //正则判断生日输入的格式为“yyyy-mm-dd”，并且mm只能为1-12，dd只能为1-31
    var validBirthday = (rule, value, callback) => {
      var reg =
        "^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)| (?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$";
      if (value === "") {
        callback(new Error("请输入生日"));
      } else if (!new RegExp(reg).test(value)) {
        callback(new Error("生日格式为“yyyy-mm-dd”"));
      } else {
        callback();
      }
    };

    //正则判断生日输入的格式为“yyyy-mm-dd”，并且mm只能为1-12，dd只能为1-31
    var validInTime = (rule, value, callback) => {
      var reg =
        "^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)| (?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$";
      if (value === "") {
        callback(new Error("请输入入院时间"));
      } else if (!new RegExp(reg).test(value)) {
        callback(new Error("入院时间格式为“yyyy-mm-dd”"));
      } else {
        callback();
      }
    };

    //正则判断输入的字数不能超过30字符
    var validRemarks = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入备注"));
      } else if (value.length > 30) {
        callback(new Error("备注不能超过30字符"));
      } else {
        callback();
      }
    };

    return {
      options: [
        {
          value: "选项1",
          label: "儿子"
        },
        {
          value: "选项2",
          label: "女儿"
        },
        {
          value: "选项3",
          label: "孙子"
        },
        {
          value: "选项4",
          label: "孙女"
        },
        {
          value: "选项5",
          label: "其他"
        }
      ],
      name: "",
      msg: "编辑",
      msg2: "返回",
      isUse: true,
      token: "",
      form: {
        name: "",
        gender: "",
        tel: "",
        id_card: "",
        room_number: "",
        birthday: "",
        in_time: "",
        guardian_name: "",
        guardian_tel: "",
        guardian_relation: "",
        remarks: ""
      },
      all_info: {},
      rules: {
        name: [{ validator: validRealName }],
        tel: [{ validator: validPhone }],
        id_card: [{ validator: validIdCard }],
        room_number: [{ validator: validRoomNumber }],
        birthday: [{ validator: validBirthday }],
        in_time: [{ validator: validInTime }],
        guardian_name: [{ validator: validRealName }],
        guard_tel: [{ validator: validPhone }],
        remarks: [{ validator: validRemarks }]
      }
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
        type: "success"
      });
    },
    //失败弹出框
    fail_box(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: "error"
      });
    },
    onSubmit() {
      // console.log("submit!");
      // console.log(this.msg);
      if (this.msg == "编辑") {
        // console.log("1111");
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
          create_manager_id: this.form.create_manager_id
        };
        // console.log(param);
        this.$api
          .update_elderly_info(param, { type: "json" })
          .then(response => {
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
      // console.log("Cancel!");
      // console.log(this.msg);
      if (this.msg2 == "返回") {
        // console.log("1111");
        this.msg2 = "取消";
        this.$router.push({ path: `/mainwindow/manage/elder_manage` });
        // console.log("1111");
      } else if (this.msg2 == "取消") {
        this.msg = "编辑";
        this.msg2 = "返回";
        this.isUse = true;
        if (this.$refs.form1) {
          // this.$refs.form1.clearValidate();
          this.$refs.form1.resetFields();
        }
      }
    }
  }
};
</script>

<style scoped>
@import "../../../../../assets/css/page.css";
</style>
