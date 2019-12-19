<template>
  <div class="itemadd">
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
      <div class="test_item" v-for="(item,index) in arr" :key="index">
        <b>{{item}}</b>
        <!-- <input type="text" placeholder="请输入题目标题，不超过20个字" /> -->
        <select></select>
      </div>
      <div class="test_main">
        <p>答案信息</p>
        <textarea></textarea>
        <button>提交</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      arr: ["考试类型", "课程类型", "题目类型"]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
.hasTagsView .app-main {
  display: flex;
  flex-direction: column;
}
</style>
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
        height: 20rem;
        padding: 1rem;
        box-sizing: border-box;
      }
      button {
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
      font-size: .95rem;
    }
  }
}
</style>