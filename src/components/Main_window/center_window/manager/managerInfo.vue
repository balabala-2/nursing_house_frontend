<template>
  <div  style="height: 20%; width: 50%; margin-left: 30%;margin-top: 7%;padding: 3%" >
    <el-avatar :size="small" :src="url" style="margin-top: 5%"></el-avatar>
    <h4>管理员账号</h4>
    <h5> {{id}} </h5>
    <el-divider content-position="left">智慧养老</el-divider>
<!--    <br>-->
    <el-tabs :tab-position="tabPosition" style="margin-top: 5%">
      <el-tab-pane label="账号">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="原密码" prop="oldPass">
            <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPass">
            <el-input type="password" v-model="ruleForm.newPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">更新密码</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="通知">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="tel">
            <el-input v-model="ruleForm.tel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="移动电话" prop="phone">
            <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">更新通知</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="信息">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="真实姓名" prop="name">
            <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="newPass">
            <el-select
              v-model="ruleForm.sex"
              placeholder="请选择性别">
              <!--                style="width: 560px">-->
              <el-option label="男" value="male"></el-option>
              <el-option label="女" value="female"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="说明" prop="addition">
            <el-input v-model="ruleForm.addition" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">更新信息</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data: function () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入原密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if (value !== this.ruleForm.newPass) {
        callback(new Error('邮箱格式有误!'));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入移动电话'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('移动电话格式有误!'));
      } else {
        callback();
      }
    };
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入姓名'));
      }  else {
        callback();
      }
    };

    return {
      name: "",
      id: "管理员账号",
      token: "",
      url:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      tabPosition: "right",
      ruleForm: {
        oldPass: '',
        newPass: '',
        checkPass: '',
        email: '',
        tel: '',
        phone: '',
        name: '',
        sex: '',
        additon: '',
      },
      rules: {
        oldPass: [
          { validator: validatePass, trigger: 'blur', required: true}
        ],
        newPass: [
          { validator: validatePass2, trigger: 'blur', required: true}
        ],
        checkPass: [
          { validator: validatePass3, trigger: 'blur', required: true}
        ],
        email: [
          { validator: validateEmail, trigger: 'blur', }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur', required: true}
        ],
        name: [
          { validator: validateName, trigger: 'blur', required: true}
        ],
      }
    };
  },

  methods:{
    submitForm(){
      this.$refs.ruleForm.validate((valid)=>{
        console.log(valid)
      })
    }
  },

  created() {
    //页面加载时就从本地通过localstorage获取存储的token值
    // this.token = localStorage.getItem("token");
    // this.$api.test({}).then((response) =>{
    //     console.log(response)
    // })
  },
  mounted(){
    // this.$api.()
  }
};
</script>

<style>
</style>
