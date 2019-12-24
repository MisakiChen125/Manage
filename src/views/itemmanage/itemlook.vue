<template>
  <div class="itemlook">
    <h3>查看试题</h3>
    <div class="test_title">
      <ul class="tt_nav">
        <li>
          <h3>课程类型：</h3>
        </li>
        <li v-for="(item,index) in Subject" :key="index">{{item.subject_text}}</li>
      </ul>
      <ul class="tt_main">
        <li>
          <h3>考试类型：</h3>
          <select name id>
            <option
              v-for="(item,index) in ExamType"
              :key="index"
              :value="item.exam_name"
              :class="{active:index===0}"
            >{{item.exam_name}}</option>
          </select>
        </li>
        <li>
          <h3>题目类型：</h3>
          <select name id>
            <option
              v-for="(item,index) in QuestionsType"
              :key="index"
              :value="item.exam_name"
              :class="{active:index===0}"
            >{{item.questions_type_text}}</option>
          </select>
        </li>
        <li>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </li>
      </ul>
    </div>
    <div class="test_main">
      <div class="tm_item" v-for="(item,index) in AllList" :key="index">
        <div class="tm_i_left">
          <p>{{item.title}}</p>
          <ul>
            <li>{{item.questions_type_text}}</li>
            <li>{{item.subject_text}}</li>
            <li class="last">{{item.exam_name}}</li>
          </ul>
          <span>{{item.user_name}} 发布</span>
        </div>
        <span class="tm_i_right">编辑</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      ExamType: state => state.questions.ExamType,
      Subject: state => state.questions.Subject,
      QuestionsType: state => state.questions.QuestionsType,
      AllList: state => state.questions.AllList
    })
  },
  methods: {
    ...mapActions({
      examType: "questions/examType",
      getexamType: "questions/getexamType",
      getQuestionsType: "questions/getQuestionsType",
      acquireAllQuestions: "questions/acquireAllQuestions"
    })
  },
  async created() {
    this.acquireAllQuestions();
    this.examType();
    this.getexamType();
    this.getQuestionsType();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.itemlook {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  padding: 1rem;
  box-sizing: border-box;
  & > h3 {
    width: 100%;
    font-weight: normal;
    flex-shrink: 0;
    margin: 1rem 0;
    padding-bottom: 0.5rem;
    box-sizing: border-box;
  }
  .test_title,
  .test_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    padding: 1rem;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    margin: 0.5rem 0;
    .tm_item {
      width: 100%;
      padding: 1rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
      .tm_i_left {
        flex: 1;
        p {
          width: 100%;
          padding: 0.5rem 0;
          box-sizing: border-box;
        }
        ul {
          width: 100%;
          display: flex;
          padding: 0.5rem 0;
          box-sizing: border-box;
          li {
            padding: 0.1rem 0.5rem;
            box-sizing: border-box;
            color: skyblue;
            background: #ceeaec;
            border: 1px solid #44bbde;
            margin-right: 0.5rem;
            &.last {
              background: orange;
              color: orangered;
              border: 1px solid orangered;
            }
          }
        }
      }
      span {
        color: #00f;
        font-size: 0.85rem;
      }
    }
    .tt_nav,
    .tt_main {
      display: flex;
      padding: 1rem;
      box-sizing: border-box;
      align-items: center;
      flex-wrap: wrap;
      & > li {
        padding: 0.1rem 0.3%;
        box-sizing: border-box;
        white-space: nowrap;
        font-size: 1rem;
        display: flex;
        align-items: center;
        h3 {
          font-weight: normal;
          font-size: 1rem;
        }
        select {
          width: 10rem;
          padding: 0.35rem 0.5rem;
          box-sizing: border-box;
          border: 1px solid #dadada;
        }
      }
    }
    .tt_main > li {
      padding-right: 2%;
    }
  }
}
</style>