<template>
  <div class="classify">
    <h3>试卷分类</h3>
    <div class="test">
      <button>+ 添加类型</button>
      <div class="table">
        <el-table :data="tableData" style="width: 100%;">
          <el-table-column class="table_title" prop="date" label="类型ID" style="background:#fcfcfc"></el-table-column>
          <el-table-column class="table_title" prop="name" label="类型名称" style="background:#fcfcfc"></el-table-column>
          <el-table-column class="table_title" prop="address" label="操作" style="background:#fcfcfc"></el-table-column>
        </el-table>
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
      tableData: [
        {
          date: "774318-730z8m",
          name: "简答题",
          address: ""
        },
        {
          date: "774318-730z8m",
          name: "简答题",
          address: ""
        },
        {
          date: "774318-730z8m",
          name: "简答题",
          address: ""
        },
        {
          date: "774318-730z8m",
          name: "简答题",
          address: ""
        },
        {
          date: "774318-730z8m",
          name: "简答题",
          address: ""
        }
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