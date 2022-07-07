<template>
  <div>
    <el-row>
      <el-col :span="22">
        <el-input style="border-color: rgb(239, 79, 25)">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button icon="el-icon-plus" @click="dialogFormVisible = true"></el-button>
        <el-dialog title="添加老人" :visible.sync="dialogFormVisible" width="30%">
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
            <el-form-item label="出生日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.birthday"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="入院日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.in_date"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="出院日期：" :label-width="formLabelWidth">
              <el-date-picker
                v-model="form.out_date"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
<!--            <el-form-item label="房间号：" :label-width="formLabelWidth">-->
<!--              <el-input v-model="form.room" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="监护人姓名：" :label-width="formLabelWidth">-->
<!--              <el-input v-model="form.guardian_name" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="监护人电话：" :label-width="formLabelWidth">-->
<!--              <el-input v-model="form.guardian_tel" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="与被监护人的关系：" :label-width="formLabelWidth">-->
<!--              <el-input v-model="form.guardian_relation" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="备注：" :label-width="formLabelWidth">-->
<!--              <el-input v-model="form.remarks" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="管理员ID：" :label-width="formLabelWidth">-->
<!--              <el-input v-model="form.manager_id" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="nextStep">下一步</el-button>
          </div>
        </el-dialog>
        <el-dialog title="添加老人" :visible.sync="dialogFormVisible1" width="30%">
          <el-form :model="form">
<!--            <el-form-item label="姓名：" :label-width="formLabelWidth">-->
<!--              <el-input v-model="form.name" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="性别：" :label-width="formLabelWidth">-->
<!--              <el-select-->
<!--                v-model="form.sex"-->
<!--                placeholder="请选择性别">-->
<!--                &lt;!&ndash;                style="width: 560px">&ndash;&gt;-->
<!--                <el-option label="男" value="male"></el-option>-->
<!--                <el-option label="女" value="female"></el-option>-->
<!--              </el-select>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="电话：" :label-width="formLabelWidth">-->
<!--              <el-input v-model="form.tel" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="身份证：" :label-width="formLabelWidth">-->
<!--              <el-input v-model="form.id_Card" autocomplete="off"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="出生日期：" :label-width="formLabelWidth">-->
<!--              <el-date-picker-->
<!--                v-model="form.birthday"-->
<!--                type="date"-->
<!--                placeholder="选择日期">-->
<!--              </el-date-picker>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="入院日期：" :label-width="formLabelWidth">-->
<!--              <el-date-picker-->
<!--                v-model="form.in_date"-->
<!--                type="date"-->
<!--                placeholder="选择日期">-->
<!--              </el-date-picker>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="出院日期：" :label-width="formLabelWidth">-->
<!--              <el-date-picker-->
<!--                v-model="form.out_date"-->
<!--                type="date"-->
<!--                placeholder="选择日期">-->
<!--              </el-date-picker>-->
<!--            </el-form-item>-->
            <el-form-item label="房间号：" :label-width="formLabelWidth">
              <el-input v-model="form.room" autocomplete="off" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="监护人姓名：" :label-width="formLabelWidth">
              <el-input v-model="form.guardian_name" autocomplete="off" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="监护人电话：" :label-width="formLabelWidth">
              <el-input v-model="form.guardian_tel" autocomplete="off" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="关系：" :label-width="formLabelWidth">
              <el-input v-model="form.guardian_relation" autocomplete="off" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="备注：" :label-width="formLabelWidth">
              <el-input v-model="form.remarks" autocomplete="off" style="width: 80%"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="preStep">上一步</el-button>
            <el-button type="primary" @click="nextStep1">下一步</el-button>
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
      style="width: 100%">
      <el-table-column
        label="ID"
        width="60">
        <template slot-scope="scope">
<!--          <i class="el-icon-time"></i>-->
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="头像"
        width="80">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
<!--          <img :src=scope.row.src style="height: 50px;width: 50px">-->
          <el-avatar :size="small" :src="scope.row.url"></el-avatar>
        </template>
      </el-table-column>
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
        label="生日"
        width="150">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.birth }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="备注"
        width="350">
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
<!--          <el-button-->
<!--            size="mini"-->
<!--            type="danger"-->
<!--            @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      },{
        id: '2',
        name: '陈俊哲',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2000-12-17',
        addition: '我是范星宇儿子'
      }, {
        id: '2',
        name: '陈俊哲',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2000-12-17',
        addition: '我是范星宇儿子'
      }, {
        id: '2',
        name: '陈俊哲',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2000-12-17',
        addition: '我是范星宇儿子'
      }, {
        id: '2',
        name: '陈俊哲',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2000-12-17',
        addition: '我是范星宇儿子'
      }, {
        id: '2',
        name: '陈俊哲',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2000-12-17',
        addition: '我是范星宇儿子'
      }, {
        id: '2',
        name: '陈俊哲',
        address: '上海市普陀区金沙江路 1517 弄',
        sex: '男',
        tel: '13888888888',
        birth: '2000-12-17',
        addition: '我是范星宇儿子'
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
      dialogFormVisible1: false,
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
        room: '',
        guardian_name: '',
        guardian_tel: '',
        guardian_relation: '',
        remarks: '',
      },
      formLabelWidth: '120px',
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: `/mainwindow/detail/elder_detail` });
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
    nextStep1(){
      console.log(this.form);
      this.dialogFormVisible1 = false;
    },
    preStep(){
      console.log(this.form);
      this.dialogFormVisible = true;
      this.dialogFormVisible1 = false;
    },
  }
}
</script>

<style scoped>
@import "../../../../assets/css/page.css";
</style>
