<template>
  <div class="room_page">
    <div class="title">教室管理</div>
    <div class="room_main">
      <el-button type="primary" @click="addBtn">添加教室 +</el-button>
      <el-table :data="classList" style="width: 100%">
        <el-table-column prop="grade_name" label="教室号"></el-table-column>
        <el-table-column style="width: 100%" label="操作">
          <el-button  type="text" @click="open">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="教室号" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    };
  },
  computed: {
      ...mapState({
          classList:state=>state.studentClass.classList,
          addList:state=>state.studentClass.addList
      })
  },
  methods: {
   ...mapActions({
      getClassList:"studentClass/acquireYetClass",
      addListFn:"studentClass/addClass"
   }),
    open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      addBtn(){
        this.dialogFormVisible = true;
        this.addListFn()
        
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