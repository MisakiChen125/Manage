<template>
  <div class="class_page">
    <div class="title">班级管理</div>
    <div class="class_main" >
      <el-button type="primary" @click="addBtn">添加班级 +</el-button>
      <el-table :data="classList" style="width: 100%">
        <el-table-column prop="grade_name" label="班级名"></el-table-column>
        <el-table-column prop="subject_text" label="课程名"></el-table-column>
        <el-table-column prop="room_text" label="教室号"></el-table-column>
       
                 <el-table-column label="操作">
                    <template slot-scope="scope">
                    <p @click="handleEdit(scope.row)">修改</p>
                    <p @click="handleDelete(scope.row)">删除</p>
                </template>
                 </el-table-column>
               
      </el-table>
    </div>
    <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
      <el-form v-model="roleFrom">
        <el-form-item label="班级名" :label-width="formLabelWidth">
          <el-input 
                v-model="roleFrom.grade_name"
                autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="教室号" :label-width="formLabelWidth">
          <el-select 
                v-model="roleFrom.room_id" 
                placeholder="请选择教室号">
            <el-option 
                v-for="(item,index) in classList" 
                :key="index" 
                :label="item.room_text" 
                :value="item.room_id">
            </el-option>
           
          </el-select>
        </el-form-item>
        <el-form-item label="课程名" :label-width="formLabelWidth">
          <el-select v-model="roleFrom.subject_id" placeholder="请选择课程名">
            <el-option v-for="(item,index) in classList" 
                :key="index" 
                :label="item.subject_text" 
                :value="item.subject_id">
           </el-option>
            
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="qBtn()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  props: {},
  components: {},
  data() {
    return {
      roleFrom:{
        grade_id:"",
       room_id:"",
       subject_id:"",
       
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
     

      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState({
      classList: state => state.studentClass.classList
    })
  },
  methods: {
    ...mapActions({
      acquireYetClass: "studentClass/acquireYetClass",
      addClass:"studentClass/addClass",
      deleteClass:"studentClass/deleteClass"


    }),
    addBtn() {
      this.dialogFormVisible = true
     
      
    },
    qBtn(){
      this.dialogFormVisible = false;
      //  console.log()
       this.addClass(this.roleFrom).then(res=>{
         this.acquireYetClass()
       })
    },
    handleEdit(row) {
            // this.showForm = true
            // this.grade_name= row.grade_name,
            // this.room_text= row.room_id,
            // this.subject_text= row.subject_id,
            // this.grade_id=row.grade_id
      },
      //删除
      handleDelete(row) {
          if(confirm('是否删除')){
              this.deleteClass({grade_id:row.grade_id}).then(res=>{
                 this.acquireYetClass()
              })
             
          }else{
              alert('取消成功')
          }
          
      },
   
  },
  created() {
    this.acquireYetClass();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.class_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin: 20px;
    font-size: 20px;
  }
  .class_main {
    flex: 1;
    margin: 0 20px;
    background: #fff;
  }
  .el-button {
    margin: 20px;
    background: #4e75ff;
  }
}
.el-table_3_column_11{
  display: flex;

}
</style>