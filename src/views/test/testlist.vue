<template>
  <div class="test-wrap">
    <header>试卷列表</header>
    <section class="test-sec">
      <div class="test-list">
        <div class="test-type">
          <li>考试类型：</li>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="(item,index) in examAllList"
            :key="index"
            :label="item.exam_name"
            :value="item.exam_name"
            ></el-option>
          </el-select>
          <li>课程：</li>
          <el-select v-model="value1" placeholder="请选择">
            <el-option
            v-for="(item,index) in getClass"
            :key="index"
            :label="item.subject_text"
            :value="item.subject_text" 
            ></el-option>
          </el-select>
          <el-button type="primary">查询</el-button>
        </div>
      </div>

      <div class="test-typ">
        <div class="head">
          <li>试卷列表</li>
          <div class="conent">
            <el-button size="mini">全部</el-button>
            <el-button size="mini">进行中</el-button>
            <el-button size="mini">已经结束</el-button>
          </div>
        </div>
        <div class="main">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="exam_exam_id" label="试卷信息"></el-table-column>
            <el-table-column prop="grade_name" label="班级"></el-table-column>            
            <el-table-column prop="user_name" label="创建人"></el-table-column>
             <el-table-column prop="start_time" label="开始时间"></el-table-column>
              <el-table-column prop="end_time" label="结束时间"></el-table-column>
            <el-table-column  label="操作">
                <span style="color: #409eff">详情</span>
            </el-table-column>
          </el-table>
        </div>
      </div>
       
    </section>
  </div>
</template>
<script>
import { mapState,mapActions } from 'vuex';
import XLSX from 'xlsx'
export default {
  props: {},
  components: {},
  data() {
    return {
      value: "",
      value1:"",
      grade_name:'',
      data:[]
    }
  },
  computed: {
     ...mapState({
         examAllList:state=>state.questions.examList,
         getClass:state=>state.questions.getClass,
         tableData:state=>state.questions.tableData
    }),
  },
  methods: {
    ...mapActions({
        examType:'questions/examType',
        examAllType:'questions/examAllType', 
        acquireExamList:'questions/acquireExamList'
    }),
    importExcel(){

    },
    exportExcel(){
       var wb=XLSX.utils.book_new();
       console.log(this.data,'keys...',Object.keys(this.data[0]));
      //  创建worksheet
      var ws=XLSX.utils.json_to_sheet(this.data,{header:Object.keys(this.data[0])});
      console.log('ws;;;;;;;;;;;;;',ws);
      XLSX.writeFile(wb,'')
    }
  },
  created() {
       this.examType(),
    this.examAllType(),
    this.acquireExamList()
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.test-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  header {
    width: 100%;
    height: 45px;
    line-height: 65px;
  }
}
.test-sec {
  width: 100%;
  box-sizing: border-box;
  border-radius: 13px 0;
  padding: 1rem;
}
.test-list {
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background: #ffffff;
}
.test-type {
  display: flex;
  box-sizing: border-box;
  li {
    margin-top: 30px;
    margin-left: 20px;
  }
  .el-select {
    margin-top: 20px;
  }
}
.test-type .el-button {
  width: 100px;
  height: 30px;
  margin-top: 25px;
  margin-left: 20px;
}
.test-typ {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background: #ffffff;
  margin-top: 20px;
}
.test-typ .head {
  display: flex;
  justify-content: space-between;
  li {
    margin-top: 20px;
    padding: 0 5px;
  }
  .conent {
    margin-top: 20px;
  }
}
</style>