<template>
  <div class="usershow">
    <h3>用户展示</h3>
    <ul class="nav">
      <li :class="{active:index===0}" v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
    <div class="main">
      <h3 class="m_title">用户数据</h3>
      <div class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="用户名" width="180"></el-table-column>
          <el-table-column prop="name" label="密码" ></el-table-column>
          <el-table-column prop="address" label="身份" width="180"></el-table-column>
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
      arr: [
        "用户数据",
        "身份数据",
        "api接口权限",
        "身份和api接口关系",
        "视图接口权限",
        "身份和视图权限关系"
      ],
      tableData: [
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
        },
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
        },
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
        },
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
        },
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
        },
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
        },
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
        },
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
        },
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
        },
        {
          date: "gwx",
          name: "1235678oi6421267ioiqwhjtwky3rmnewhjy3rhh",
          address: "出题者"
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
.usershow {
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
    &.m_title {
      font-size: 1.5rem;
    }
  }
  .nav {
    width: 100%;
    display: flex;
    li {
      padding: 0.2rem 0.5rem;
      box-sizing: border-box;
      font-size: 0.85rem;
      border: 1px solid#ccc;
      background: #fff;
      &.active {
        border: 1px solid#00f;
        color: #00f;
      }
    }
  }
}
</style>