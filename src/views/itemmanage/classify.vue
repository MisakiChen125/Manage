<template>
  <div class="classify">
    <h3>试卷分类</h3>
    <div class="test">
      <el-button type="text" class="btn" @click="centerDialogVisible = true">+ 添加类型</el-button>
      <el-dialog title="创建新类型" :visible.sync="centerDialogVisible" width="30%" center>
        <input type="text" class="content" placeholder="请输入类型名称" />
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          <el-button @click="centerDialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
      <div class="table">
        <el-table :data="QuestionsType" style="width: 100%;">
          <el-table-column
            class="table_title"
            prop="questions_type_id"
            label="类型ID"
            style="background:#fcfcfc"
          ></el-table-column>
          <el-table-column
            class="table_title"
            prop="questions_type_text"
            label="类型名称"
            style="background:#fcfcfc"
          ></el-table-column>
          <el-table-column class="table_title" prop label="操作" style="background:#fcfcfc"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      centerDialogVisible: false
    };
  },
  computed: {
    ...mapState({
      QuestionsType: state => state.questions.QuestionsType
    })
  },
  methods: {
    ...mapActions({
      getQuestionsType: "questions/getQuestionsType"
    })
  },
  created() {
    this.getQuestionsType();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.classify {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  padding: 1rem;
  box-sizing: border-box;
  h3 {
    width: 100%;
    font-weight: normal;
    flex-shrink: 0;
    margin: 1rem 0;
    padding-bottom: 0.5rem;
    box-sizing: border-box;
  }
  .test {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    padding: 1rem;
    box-sizing: border-box;
    .btn {
      width: 15%;
      padding: 0.5rem 0;
      box-sizing: border-box;
      white-space: nowrap;
      background: -webkit-gradient(
        linear,
        right top,
        left top,
        from(#4e75ff),
        to(#0139fd)
      ) !important;
      background: linear-gradient(270deg, #4e75ff, #0139fd) !important;
      border: 0;
      color: #fff;
      border-radius: 2px;
      outline: none;
    }
    .table {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
    }
  }
  .content {
    width: 100%;
    height: 1rem;
    display: block;
    border: 0;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding: 1rem 0;
    box-sizing: border-box;
  }
}
</style>