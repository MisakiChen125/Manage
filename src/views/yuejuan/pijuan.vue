<template>
  <div class="pijuan_page">
    <div class="page_head">

     <li>
         <label for="">状态:</label>
          <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
        :value="item.value"
        ></el-option>
      </el-select>
     </li>
     <li>
         <label for="">班级:</label>
          <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
        :value="item.value"
        ></el-option>
      </el-select>
     </li>
    
      <el-button type="primary">主要按钮</el-button>
    </div>
    <div class="page_main">
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
  props: {},
  components: {},
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      value1: "",
      value2:""
     
    };
  },
  computed: {
    ...mapState({
     
    })
  },
  methods: {
    ...mapActions({
     
    })
  },
  created() {
    
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.pijuan_page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .page_head{
        width: 100%;
        height: 100px;
        display: flex;
        background: #fff;
        border-radius: 5px;
        align-items: center;
        margin: 40px 50px 20px;
        .el-select--medium{
            margin: 0  30px 0 0;
        }
        li label{
            font-size: 16px;
            font-weight: normal;
            margin-left: 30px;
        }
    }
    .page_main{
        flex:1;
        margin:0 0 0 50px;
    }
}
</style>