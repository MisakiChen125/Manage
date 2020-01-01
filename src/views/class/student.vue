import { mapState, mapActions } from 'vuex';
<template>
  <div class="student_page">
    <div class="titles">学生管理</div>
    <div class="titlebar">
      <el-form :inline="true" :model="roleForm" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="roleForm.name" placeholder="输入学生姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="roleForm.room_id" placeholder="请选择教室号">
            <el-option v-for="(item,index) in yiList" :key="index" 
            :label="item.room_text" 
            :value="item.room_text"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="roleForm.grade_id" placeholder="班级名">
            <el-option v-for="(item,index) in yiList" :key="index" :label="item.grade_name" :value="item.grade_name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="serachBtn">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="student_form">
      <el-table :data=" yiList.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="student_name" label="姓名" ></el-table-column>
        <el-table-column prop="student_id" label="学号" ></el-table-column>
        <el-table-column prop="grade_name" label="班级"></el-table-column>
        <el-table-column prop="room_text" label="教室"></el-table-column>
        <el-table-column prop="student_pwd" label="密码"></el-table-column>
        <el-table-column  label="操作">
           <template slot-scope="scope">
                    <p @click="handleDelete(scope.row)">删除</p>
                </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
        
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
               :current-page="currentPage"
                :page-sizes="[5,10,20,50,100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="yiList.length">
             </el-pagination>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex'
import variables from '@/styles/variables.scss';
export default {
  data() {
    return {
      roleForm: {
        name:"",
        grade_id:"",
        room_id:""
      },
      studentId:"",
      currentPage:1,
      pageSize:5,
      totle:""
    };
  },
  computed: {
    ...mapState({
     yiList:state=>state.studentClass.yiList,
     setStudentList:state=>state.studentClass.setStunt
    })
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleSizeChange(val) {
      this.pageSize=val
      this.currentPage=1
    },
    handleCurrentChange(val) {
     
      this.currentPage=val
      console.log(val)
    },
    ...mapActions({
      YetStudent:"studentClass/YetStudent",
       deleteStudent:"studentClass/deleteStudent"
    }),
    handleDelete(row){
    if(confirm('是否删除')){
              this.deleteStudent({student_id:row.student_id}).then(res=>{
                 this.YetStudent()
              })
             
          }else{
              alert('取消成功')
          }
    },
    ...mapMutations({
      setRoom:"studentClass/setRoom",//筛选教室
      setGrade:"studentClass/setGrade",//筛选班级
      setSearched:"studentClass/setSearched"//筛选名字
    }),
    serachBtn(){
      // this.setSearched(this.roleForm.name)
      console.log(1818)
    }
    
  },
  created() {
    this.YetStudent();
    console.log(this.totle)
  },
};
</script>
<style lang="scss" scoped>
.student {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.titles {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 10px 20px;
  font-size: 20px;
}
.titlebar {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 0 20px;
}
.student_form {
  flex: 1;
  margin: 20px;
}
el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .block{
      display: flex;
  }
</style>