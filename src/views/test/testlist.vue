<template>
  <div class="test-wrap">
    <header>试卷列表</header>
    <section class="test-sec">
      <div class="test-list">
        <div class="test-type">
          <li>考试类型：</li>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <li>课程：</li>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button type="primary">查询</el-button>
        </div>
      </div>

      <div class="test-typ">
        <div class="head">
          <li>试卷列表</li>
          <div class="conent">
            <el-button size="mini">全部</el-button>
            <el-button size="mini">进行中</el-button>
            <el-button size="mini">已经结束</el-button>
          </div>
        </div>
        <div class="main">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>            
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column  label="操作">
                <span style="color: #409eff">详情</span>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
       tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.test-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eeeeee;
  header {
    width: 100%;
    height: 45px;
    line-height: 65px;
  }
}
.test-sec {
  width: 100%;
  box-sizing: border-box;
  border-radius: 13px 0;
  padding: 1rem;
}
.test-list {
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background: #ffffff;
}
.test-type {
  display: flex;
  box-sizing: border-box;
  li {
    margin-top: 30px;
    margin-left: 20px;
  }
  .el-select {
    margin-top: 20px;
  }
}
.test-type .el-button {
  width: 100px;
  height: 30px;
  margin-top: 25px;
  margin-left: 20px;
}
.test-typ {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  background: #ffffff;
  margin-top: 20px;
}
.test-typ .head {
  display: flex;
  justify-content: space-between;
  li {
    margin-top: 20px;
    padding: 0 5px;
  }
  .conent {
    margin-top: 20px;
  }
}
</style>