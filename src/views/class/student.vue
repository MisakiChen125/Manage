import { mapState, mapActions } from 'vuex';
<template>
  <div class="student_page">
    <div class="titles">学生管理</div>
    <div class="titlebar">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.user" placeholder="输入学生姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="请选择教室号">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="formInline.region" placeholder="班级名">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="student_form">
      <el-table :data="studentMsg" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="card" label="学号" width="180"></el-table-column>
        <el-table-column prop="class" label="班级"></el-table-column>
        <el-table-column prop="room" label="教室"></el-table-column>
        <el-table-column label="密码">{{pwd}}</el-table-column>
        <el-table-column  label="操作">
            <span>删除</span>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
               
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout=" sizes, jumper"
                :total="400">
             </el-pagination>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      pwd:"Qaa123!",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  computed: {
    ...mapState({
      studentMsg:state=>state.studentLogin.studentMsg
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
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    ...mapActions({
      
    }),
    ...mapActions({
      getStudentMsg:"studentLogin/acquireStudent"
    })
  },
  created() {
    this.getStudentMsg()
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