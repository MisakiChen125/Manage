<template>
  <div class="usershow">
    <h3>用户展示</h3>
    <ul class="nav">
      <li
        :class="{active:ind===index}"
        v-for="(item,index) in arr"
        :key="index"
        @click="()=>{
          ind=index
          }"
      >{{item.text}}</li>
    </ul>
    <div class="main">
      <h3 class="m_title">{{arr[ind].text}}</h3>
      <!-- {{showArr}} -->
      <div class="table">
        <el-table :data="showArr" style="width: 100%">
          <el-table-column :prop="backobj.date[0]" :label="backobj.date[1]" v-if="backobj.date"></el-table-column>
          <el-table-column :prop="backobj.name[0]" :label="backobj.name[1]" v-if="backobj.name"></el-table-column>
          <el-table-column :prop="backobj.id[0]" :label="backobj.id[1]" v-if="backobj.id"></el-table-column>
          <el-table-column
            :prop="backobj.method[0]"
            :label="backobj.method[1]"
            v-if="backobj.method"
          ></el-table-column>
        </el-table>
        <!-- <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="data.length"
          ></el-pagination> -->
        </div>
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
    return {
      currentPage: 1,
      pagesize: 10,
      // currentPage2: 5,
      // currentPage3: 5,
      // currentPage4: 4,
      ind: 0,
      arr: [
        {
          text: "用户数据"
        },
        {
          text: "身份数据"
        },
        {
          text: "api接口权限"
        },
        {
          text: "身份和api接口关系"
        },
        {
          text: "视图接口权限"
        },
        {
          text: "身份和视图权限关系"
        }
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
  computed: {
    ...mapState({
      UserList: state => state.jurisdiction.UserList,
      Identity: state => state.jurisdiction.Identity,
      Authority: state => state.jurisdiction.Authority,
      Api: state => state.jurisdiction.Api,
      View: state => state.jurisdiction.View,
      Info: state => state.jurisdiction.Info
    }),
    showArr() {
      let newArr = [];
      if (this.ind === 0) {
        newArr = this.UserList;
      }
      if (this.ind === 1) {
        newArr = this.Identity;
      }
      if (this.ind === 2) {
        newArr = this.Authority;
      }
      if (this.ind === 3) {
        newArr = this.Api;
      }
      if (this.ind === 4) {
        newArr = this.View;
      }
      if (this.ind === 5) {
        newArr = this.Info;
      }
      return newArr;
    },
    backobj() {
      let obj = {};
      if (this.ind === 0) {
        obj = {
          date: ["user_name", "用户"],
          name: ["user_pwd", "密码"],
          id: ["identity_text", "身份"]
        };
      }
      if (this.ind === 1) {
        obj = {
          date: ["identity_text", "身份名称"]
        };
      }
      if (this.ind === 2) {
        obj = {
          date: ["api_authority_text", "api权限名称"],
          name: ["api_authority_url", "api权限url"],
          id: ["api_authority_method", "api权限方法"]
        };
      }
      if (this.ind === 3) {
        obj = {
          date: ["identity_text", "身份名称"],
          name: ["api_authority_text", "api权限名称"],
          id: ["api_authority_url", "api权限url"],
          method: ["api_authority_method", "api权限方法"]
        };
      }
      if (this.ind === 4) {
        obj = {
          date: ["view_authority_text", "视图接口权限"],
          name: ["view_id", "身份和视图接口权限"]
        };
      }
      if (this.ind === 5) {
        obj = {
          date: ["identity_text", "身份"],
          name: ["view_authority_text", "视图名称"],
          id: ["view_id", "视图id"]
        };
      }
      return obj;
    }
  },
  methods: {
    ...mapActions({
      showUserList: "jurisdiction/showUserList",
      showIdentity: "jurisdiction/showIdentity",
      apiAuthority: "jurisdiction/apiAuthority",
      showApi: "jurisdiction/showApi",
      acquireView: "jurisdiction/acquireView",
      showInfo: "jurisdiction/showInfo"
    }),
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    }
  },
  async created() {
    this.showUserList();
    this.showIdentity();
    this.apiAuthority();
    this.showApi();
    this.acquireView();
    this.showInfo();
  },
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