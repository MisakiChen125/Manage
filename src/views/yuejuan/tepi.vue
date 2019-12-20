<template>
  <div class="tepi_page">
    <div class="title">待批班级</div>
    
    <template>
  
        <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="classname" label="班级名" width="180"></el-table-column>
        <el-table-column prop="subjectname" label="课程名称" width="180"></el-table-column>
        <el-table-column prop="status" label="阅卷状态"></el-table-column>
        <el-table-column prop="subjectname" label="课程名称" width="180"></el-table-column>
        <el-table-column prop="yield" label="成材率"></el-table-column>
        <el-table-column prop="operate" label="操作">
            <a href="#">批卷</a>
        </el-table-column>
      </el-table>
     
      
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: [
          {
              classname:"1704B",
              subjectname:"实训一",
              status:"",
              yield:"80%"

          },
          {
              classname:"1704B",
              subjectname:"实训一",
              status:"",
              yield:"80%"

          },
          {
              classname:"1704B",
              subjectname:"实训一",
              status:"",
              yield:"80%"

          },
          {
              classname:"1704B",
              subjectname:"实训一",
              status:"",
              yield:"80%"

          }

      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  computed: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.tepi_page{
    margin: 20px;
}


.title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  // margin: 20px;
  font-size: 20px;
  margin-bottom: 15px;
}
.el-table{
  border-radius: 10px;
  
 
}
 
</style>