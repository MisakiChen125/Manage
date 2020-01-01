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
      <div class="table">
        <!-- 分页列表 -->
        <el-table
          :data="showArr.length>pagesize?showArr.slice((currentPage-1)*pagesize,currentPage*pagesize):showArr"
          style="width: 100%"
        >
          <el-table-column :prop="backobj.date[0]" :label="backobj.date[1]" v-if="backobj.date"></el-table-column>
          <el-table-column
            :prop="backobj.name[0]"
            :label="backobj.name[1]"
            width="500"
            v-if="backobj.name"
          ></el-table-column>
          <el-table-column
            :prop="backobj.id[0]"
            :label="backobj.id[1]"
            width="180"
            v-if="backobj.id"
          ></el-table-column>
          <el-table-column
            :prop="backobj.method[0]"
            :label="backobj.method[1]"
            width="180"
            v-if="backobj.method"
          ></el-table-column>
        </el-table>
        <!-- 分页器 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="showArr.length"
        ></el-pagination>
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
      currentPage: 1, //初始页
      pagesize: 10, //    每页的数据
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
    handleSizeChange: function(size) {
      this.pagesize = size;
      // console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      // console.log(this.currentPage); //点击第几页
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