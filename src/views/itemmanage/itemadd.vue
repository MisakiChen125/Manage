<template>
  <div class="TestManagement">
    <h2>添加试题</h2>
    <div class="test-box">
      <div class="test-title">
        <h3>题目信息</h3>
        <p>题干</p>
        <div class="iptCon">
          <el-input placeholder="请输入题目信息，不超过20个字" v-model="title" clearable></el-input>
        </div>
      </div>

      <div class="editor-container">
        <el-tag class="tag-title">题目主题:</el-tag>
        <markdown-editor v-model="content" height="300px" />
      </div>

      <div class="test-select">
        <p class="ts_title">请选择考试类型：</p>
        <el-select v-model="Evalue" clearable placeholder="请选择">
          <el-option
            v-for="(item,index) in ExamList"
            :key="index"
            :label="item.exam_name"
            :value="item"
          ></el-option>
        </el-select>

        <p class="ts_title">请选择课程类型：</p>
        <el-select v-model="Cvalue" clearable placeholder="请选择">
          <el-option
            v-for="(item,index) in ClassList"
            :key="index"
            :label="item.subject_text"
            :value="item"
          ></el-option>
        </el-select>

        <p class="ts_title">请选择题目类型：</p>
        <el-select v-model="Qvalue" clearable placeholder="请选择">
          <el-option
            v-for="(item,index) in ExamTypeList"
            :key="index"
            :label="item.questions_type_text"
            :value="item"
          ></el-option>
        </el-select>
      </div>

      <div class="editor-container">
        <el-tag class="tag-title">答案信息:</el-tag>
        <markdown-editor v-model="answer" height="300px" />
      </div>

      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
//引入组件库
import MarkdownEditor from "@/components/MarkdownEditor";
export default {
  data() {
    return {
      // content: this.$route.query.questions_stem,
      // answer: this.$route.query.questions_answer,
      // title: this.$route.query.title,
      // Evalue: this.$route.query.exam_name,
      // Cvalue: this.$route.query.subject_text,
      // Qvalue: this.$route.query.questions_type_text,
      // EID: "", //考试类型ID
      // CID: "", //课程类型ID
      // QID: "" //题目类型ID
    };
  },
  async created() {},
  computed: {},
  components: {
    MarkdownEditor
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.TestManagement {
  height: 100%;
  padding: 0px 24px 24px;
  box-sizing: border-box;
  min-height: calc(100vh - 84px);
}
.test-box {
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
  min-height: calc(100vh - 84px);
}

h2 {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

h3 {
  font-weight: normal;
}
.test-select {
  margin-bottom: 35px;
}

.iptCon {
  width: 100%;
  margin-bottom: 35px;

  .el-input {
    max-width: 500px;
  }
}

.editor-container {
  margin-bottom: 35px;
}
</style>
