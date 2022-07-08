<template>
  <div>
    <el-row>
      <el-col :span="22">
        <el-input style="border-color: rgb(239, 79, 25)" v-model="search" placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button icon="el-icon-plus" @click="dialogFormVisible = true"></el-button>
        <el-dialog title="添加员工" :visible.sync="dialogFormVisible" width="30%">
          <el-form :model="form">
            <el-form-item label="姓名：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" style="width: 220px"></el-input>
            </el-form-item>
            <el-form-item label="性别：" :label-width="formLabelWidth">
              <el-select
                v-model="form.sex"
                placeholder="请选择性别">
                <!--                style="width: 560px">-->
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="电话：" :label-width="formLabelWidth">
              <el-input v-model="form.tel" autocomplete="off" style="width: 220px"></el-input>
            </el-form-item>
            <el-form-item label="身份证：" :label-width="formLabelWidth">
              <el-input v-model="form.id_Card" autocomplete="off" style="width: 220px"></el-input>
            </el-form-item>
            <el-form-item label="年龄：" :label-width="formLabelWidth">
              <el-input v-model="form.age" autocomplete="off" style="width: 220px"></el-input>
            </el-form-item>
            <el-form-item label="入职日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.in_date"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="备注：" :label-width="formLabelWidth">
              <el-input v-model="form.remarks" autocomplete="off" style="width: 220px"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="nextStep">下一步</el-button>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      height="550"
      border
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center'}"
      style="width: 100%; margin-top: 1%">
      <el-table-column
        label="姓名"
        width="90">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="性别"
        width="60">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="电话"
        width="150">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.tel }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="学历"
        width="90">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.edu }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="备注"
        width="550">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.addition }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">详情</el-button>
          <el-popconfirm title="确定删除当前信息吗？" @confirm="handleDelete(scope.$index, scope.row)">
            <el-button
              size="mini"
              type="danger"
              slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      tableData: [{
        id: '1',
        url:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        name: '范星宇',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2001-11-19',
        addition: '我是陈俊哲爸爸'
      }, {
        id: '2',
        name: '陈俊哲',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2000-12-17',
        addition: '我是范星宇儿子'
      }, {
        id: '3',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2001-11-19',
        addition: ''
      }, {
        id: '4',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2001-11-19',
        addition: ''
      }],
      dialogFormVisible: false,
      form: {
        name: '',
        sex: '',
        tel: '',
        in_date: '',
        out_date: '',
        birthday: '',
        id_Card: '',
        face_feature: '',
      },
      formLabelWidth: '120px',
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
    }
  },
  created(){
    this.init();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: `/mainwindow/detail/person_detail` });
    },
    handleCancel(){
      visible = false;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index,1);
    },
    nextStep(){
      console.log(this.form);
      this.dialogFormVisible = false;
      this.dialogFormVisible1 = true;
    },
    //初始化页面
    init() {
      this.$api.staff_info({}, { type: "json" }).then((response) => {
        console.log(response)
        if (response.state === 1) {
          //查询成功
          this.tableData = [];
          for (let i = 0; i < response.elderly_info.length; i ++) {
            let val = response.staff_info[i];
            // console.log();
            let param = {
              url: "", //头像：还没有
              name: val.name,
              address: "记得让后端传",
              sex: val.gender == 1 ? '男': '女',
              tel: val.tel,
              edu: "带专",
              id_card: val.id_card,
              age: this.doHandleYear() - parseInt(val.birthday.slice(0, 4)),
              in_date: val.in_time,
              out_date: val.out_time,
              face_feature: "unknown",
              room:val.room_number,
              guardian_name: val.guardian_name,
              guardian_tel: val.guardian_tel,
              guardian_relation: val.guardian_relation,
              addition: val.remarks
            };
            this.tableData.push(param);
          }
        }
      });
    },

    //获取年月
    doHandleDate() {
      var myDate = new Date();
      var tYear = myDate.getFullYear();
      var tMonth = myDate.getMonth();

      var m = tMonth + 1;
      if (m.toString().length == 1) {
        m = "0" + m;
      }
      return tYear + "-" + m;
    },

    //获取年份
    doHandleYear(tYear) {
      var myDate = new Date();
      var tYear = myDate.getFullYear();

      return tYear;
    },
    doHandleMonth() {
      var myDate = new Date();
      var tMonth = myDate.getMonth();

      var m = tMonth + 1;
      if (m.toString().length == 1) {
        m = "0" + m;
      }
      return m;
    },
  }
}
</script>

<style scoped>
@import "../../../../assets/css/page.css";
</style>
