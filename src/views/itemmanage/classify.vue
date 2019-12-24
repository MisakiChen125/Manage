<template>
  <div class="classify">
    <AddMask />
    <h3>试卷分类</h3>
    <div class="test">
      <button>+ 添加类型</button>
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
import AddMask from "@/components/AddMask";
export default {
  props: {},
  components: {
    AddMask
  },
  data() {
    return {};
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
    button {
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
}
</style>