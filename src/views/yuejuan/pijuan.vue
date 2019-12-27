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
    
      
    </div>
    <div class="page_main">
     <el-table :data="list" style="width: 100%">
        <el-table-column  label="班级">1610A</el-table-column>
         <el-table-column prop="student_name" label="姓名" ></el-table-column> -->
         <el-table-column  label="阅卷状态">未阅</el-table-column>
        <el-table-column prop="start_time" label="开始时间" ></el-table-column>
        <el-table-column prop="end_time" label="结束时间"></el-table-column>
        <el-table-column  label="成材率"></el-table-column>
        <el-table-column  label="操作">
            <a href="#" >批卷</a>
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
      value1: "",
      value2:""
     
    };
  },
  computed: {
    ...mapState({
    list:state=>state.exam.list
    })
  },
  methods: {
    ...mapActions({
        studentLists:"exam/studentLists"
    })
  },
  created() {
    this.studentLists()
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
        flex-shrink: 0;
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