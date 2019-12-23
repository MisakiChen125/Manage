<template>
  <div class="class_page">
    <div class="title">班级管理</div>
    <div class="class_main">
      <el-button type="primary" @click="dialogFormVisible = true">添加班级 +</el-button>
      <el-table :data="classList" style="width: 100%">
        <el-table-column prop="grade_name" label="班级名"></el-table-column>
        <el-table-column prop="subject_text" label="课程名"></el-table-column>
        <el-table-column prop="room_text" label="教室号"></el-table-column>
        <el-table-column label="操作">
          <li>
            <span @click="dialogFormVisible = true">修改</span>
            <span>删除</span>
          </li>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="班级名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="教室号" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择教室号">
            <el-option v-for="(item,index) in classList" :key="index" :label="item.room_text" value="shanghai"></el-option>
           
          </el-select>
        </el-form-item>
        <el-form-item label="课程名" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择课程名">
            <el-option v-for="(item,index) in classList" :key="index" :label="item.subject_text" value="shanghai"></el-option>
            
          </el-select>
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
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: [
        {
          cname: "1701A",
          jname: "javascript",
          cnum: "3305"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
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
      acquireYetClass: "studentClass/acquireYetClass"
    }),
    addBtn() {
      this.addShow = true;
    }
  },
  created() {
    this.acquireYetClass();
    console.log(this.classList);
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
</style>