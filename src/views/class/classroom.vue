<template>
  <div class="room_page">
    <div class="title">教室管理</div>
    <div class="room_main">
      <el-button type="primary" @click="addBtn">添加教室 +</el-button>
      <el-table :data="classList" style="width: 100%">
        <el-table-column prop="room_text" label="教室号">
             <template slot-scope="scope">
                 <span style="margin-left: 10px">{{ scope.row.room_text }}</span>
             </template>
        </el-table-column>
        <el-table-column label="操作">
                    <template slot-scope="scope">
                    <p @click="handleDelete(scope.row)">删除</p>
                </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
      
               <p>教室号：</p>

           <el-form-item>
             <el-input type="text" v-model="roomValue"></el-input>
           </el-form-item>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="qBtn">确 定</el-button>
      </div>
    </el-dialog>
    
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {   
       dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          room_text:""
        },
        roomValue:"",
        formLabelWidth: '120px'
    };
  },
  computed: {
      ...mapState({
          classList:state=>state.studentClass.classList
      })
  },
  methods: {
   ...mapActions({
      getClassList:"studentClass/acquireYetClass",
      addClassRoom:"studentClass/addClassRoom",
      deleteRoom:"studentClass/deleteClassRoom"
   }),
      addBtn(row){
        this.dialogFormVisible = true;
        
        this.addClassRoom({room_text:this.roomValue})
      },
      qBtn(){
        this.dialogFormVisible = false;
        
        
      },
      handleDelete(row){
          console.log(row.room_id)
          if(confirm('是否删除')){
            this.deleteRoom({room_id:row.room_id}).then(res=>{
            this.getClassList()
          })
          }else{
            alert('取消删除')
          }
      }
  },
  created() {
    this.getClassList()
    
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.room_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  .title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin: 10px 20px;
  }
  .room_main {
    width: 100%;
    height: 100%;
    background: #fff;
    margin: 10px 20px;
  }
}
.el-button {
  margin: 20px 20px;
}
.el-table {
  margin: 0 20px;
}
.has-gutter {
  background: #f4f7f9;
}
</style>