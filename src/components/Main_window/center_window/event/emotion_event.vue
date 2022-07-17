<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-input style="border-color: rgb(239, 79, 25)" v-model="search" placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table
      :data="tables"
      border
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      style="width: 99%; margin-top: 1%; height:130%"
      :row-style="tableRolStyle"
      :default-sort="{ prop: 'in_time', order: 'descending' }"
    >
      <el-table-column label="id" width="158%" prop="id" sortable></el-table-column>
      <el-table-column label="老人姓名" prop="name" width="250%"></el-table-column>

      <el-table-column label="老人情感" width="380%" prop="emotion_type">
        <!-- <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.room_number }}</span>
        </template>-->
      </el-table-column>
      <el-table-column label="发生日期" width="260%" prop="create_time" sortable>
        <!-- <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.in_time }}</span>
        </template>-->
      </el-table-column>
      <el-table-column label="详情" width="260%">
        <template slot-scope="scope">
          <el-button size="mini" @click="showImg(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="老人情感详情" :visible.sync="dialogFormVisible" width="30%">
      <div>
        <img :src="face_feature_img_url" width="100%" />
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="back">返回</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { init } from "echarts";

export default {
  data() {
    return {
      search: "",
      dialogFormVisible: false,
      base_face_feature_img_url: "http://127.0.0.1:8000/api/emotion_img/",
      face_feature_img_url: "",
      tableData: []
    };
  },
  computed: {
    tables() {
      // console.log("success");
      let input = this.search && this.search.toLowerCase();
      // let input = "在院"
      let itemsFull = this.tableData;

      let items1;
      if (input) {
        items1 = itemsFull.filter(function(item) {
          return Object.keys(item).some(function(key1) {
            return String(item[key1])
              .toLowerCase()
              .match(input);
          });
        });
      } else {
        items1 = itemsFull;
      }
      return items1;
    }
  },
  created() {
    this.init();
  },
  methods: {
    tableRolStyle({ row, column, rowIndex, columnIndex }) {
      if (row.emotion_type === "happy") {
        return {
          backgroundColor: "oldlace"
        };
      }
    },
    back() {
      this.dialogFormVisible = false;
    },
    showImg(index, row) {
      console.log(row);
      this.dialogFormVisible = true;
      this.face_feature_img_url = this.base_face_feature_img_url + row.id;
    },
    init() {
      this.$api.get_elder_emotion().then(response => {
        if (response[0] === 1) {
          for (let i = 0; i < response[2].length; i++) {
            let val = response[2][i];
            let add_msg = {
              id: val.id,
              create_time: val.create_time,
              name: val.name,
              emotion_type: val.emotion_type,
              img: this.base_face_feature_img_url + val.id
            };
            this.tableData.push(add_msg);
          }
        }
      });
    }
  }
};
</script>

<style>
</style>