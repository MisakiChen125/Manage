<template>
  <div class="itemadd">
    <!-- {{AllQuestions}} -->
    <h3>添加试卷</h3>
    <div class="test">
      <div class="test_title">
        <p>题目信息</p>
        <div class="tt_item">
          <b>题干</b>
          <input type="text" placeholder="请输入题目标题，不超过20个字" />
        </div>
      </div>
      <div class="test_main">
        <p>题目主题</p>
        <textarea></textarea>
      </div>
      <div class="test_item">
        <b>考试类型</b>
        <select value>
          <option
            v-for="(item,index) in ExamType"
            :key="index"
            :value="item.exam_name"
            :class="{active:index===0}"
          >{{item.exam_name}}</option>
        </select>
      </div>
      <div class="test_item">
        <b>课程类型</b>
        <select value>
          <option
            v-for="(item,index) in Subject"
            :key="index"
            :value="item.subject_text"
            :class="{active:index===0}"
          >{{item.subject_text}}</option>
        </select>
      </div>
      <div class="test_item">
        <b>题目类型</b>
        <select value>
          <option
            v-for="(item,index) in QuestionsType"
            :key="index"
            :value="item.questions_type_text"
            :class="{active:index===0}"
          >{{item.questions_type_text}}</option>
        </select>
      </div>
      <div class="test_main">
        <p>答案信息</p>
        <textarea></textarea>
        <el-button type="text" class="btn" @click="centerDialogVisible = true">提交</el-button>

        <el-dialog title="?" :visible.sync="centerDialogVisible" width="30%" center >
          <div class="content">
            <h3>你确定要添加这道试题吗?</h3>
            <span>真的要添加吗？</span>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
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
      ExamType: state => state.questions.ExamType,
      Subject: state => state.questions.Subject,
      QuestionsType: state => state.questions.QuestionsType
    })
  },
  methods: {
    ...mapActions({
      examType: "questions/examType",
      getexamType: "questions/getexamType",
      getQuestionsType: "questions/getQuestionsType"
    })
  },
  async created() {
    this.examType();
    this.getexamType();
    this.getQuestionsType();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.itemadd {
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

    .test_title {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      p {
        width: 100%;
        padding: 0.5rem 0;
        box-sizing: border-box;
      }
    }
    .test_main {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      p {
        width: 100%;
        padding: 0.5rem 0;
        box-sizing: border-box;
      }
      textarea {
        width: 100%;
        height: 16rem;
        padding: 1rem;
        box-sizing: border-box;
      }
      .btn {
        width: 4rem;
        padding: 0.5rem 0;
        display: flex;
        background-color: #4e75ff;
        border-color: #4e75ff;
        box-sizing: border-box;
        justify-content: center;
        border: 0;
        border-radius: 2px;
        color: #fff;
        margin: 1rem 0;
      }
    }
  }
  .tt_item,
  .test_item {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    b {
      font-weight: normal;
      padding-bottom: 0.5rem;
      box-sizing: border-box;
    }
    input,
    select {
      width: calc(100% / 3);
      padding: 0.5rem;
      border: 1px solid #ccc;
      outline: none;
      background: #fff;
      border-radius: 2px;
      font-size: 0.95rem;
      option {
        &.active {
          font-weight: bold;
        }
      }
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3,
    span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>