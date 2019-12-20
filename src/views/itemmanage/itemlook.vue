<template>
  <div class="itemlook">
    <h3>查看试题</h3>
    <div class="test_title">
      <ul class="tt_nav">
        <li>
          <h3>课程类型：</h3>
        </li>
        <li v-for="(item,index) in nav" :key="index">{{item}}</li>
      </ul>
      <ul class="tt_main">
        <li>
          <h3>考试类型：</h3>
          <select name id></select>
        </li>
        <li>
          <h3>考试类型：</h3>
          <select name id></select>
        </li>
        <li>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </li>
      </ul>
    </div>
    <div class="test_main">
      <div class="tm_item" v-for="(item,index) in 5" :key="index">
        <div class="tm_i_left">
          <p>机器人扫描</p>
          <ul>
            <li>代码补全</li>
            <li>javaScript上</li>
            <li class="last">周考一</li>
          </ul>
          <span>dingshaoshan 发布</span>
        </div>
        <span class="tm_i_right">编辑</span>
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
      nav: [
        "All",
        "javaScript上",
        "javaScript下",
        "模块化开发",
        "移动端开发",
        "node基础",
        "组件化开发",
        "渐进式开发",
        "javaScript高级",
        "node高级"
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
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

      & > li {
        padding: 0 0.5rem;
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
      padding-right: 5%;
    }
  }
}
</style>