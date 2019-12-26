<template>
  <div class="usersadd">
    <h3>添加用户</h3>
    <div class="test">
      <div class="test_item">
        <div class="ti_title">
          <p :class="{active:ind===0}" @click="ind=0">添加用户</p>
          <p :class="{active:ind===1}" @click="ind=1">更新用户</p>
        </div>
        <div class="ti_form">
          <p v-if="ind===1">
            <select>
              <option v-show="!UserList.length">请选择身份id</option>
              <option v-for="(item,index) in UserList" :key="index">{{item.user_name}}</option>
            </select>
          </p>
          <p>
            <input type="text" placeholder="请输入用户" />
          </p>
          <p>
            <input type="text" placeholder="请输入密码" />
          </p>
          <p>
            <select>
              <option v-show="!Identity.length">请选择身份id</option>
              <option v-for="(item,index) in Identity" :key="index">{{item.identity_text}}</option>
            </select>
          </p>
        </div>
        <div class="ti_button">
          <button>确定</button>
          <button >重置</button>
        </div>
      </div>
      <div class="test_item">
        <div class="ti_title">
          <p class="active">添加身份</p>
        </div>
        <div class="ti_form">
          <p>
            <input type="text" placeholder="请输入身份名称" />
          </p>
        </div>
        <div class="ti_button">
          <button>确定</button>
          <button >重置</button>
        </div>
      </div>
      <div class="test_item">
        <div class="ti_title">
          <p class="active">添加api接口权限</p>
        </div>
        <div class="ti_form">
          <p>
            <input type="text" placeholder="请输入api接口权限名称" />
          </p>
          <p>
            <input type="text" placeholder="请输入api接口权限url" />
          </p>
          <p>
            <input type="text" placeholder="请输入api接口权限方法" />
          </p>
        </div>
        <div class="ti_button">
          <button>确定</button>
          <button >重置</button>
        </div>
      </div>
      <div class="test_item">
        <div class="ti_title">
          <p class="active">添加视图接口权限</p>
        </div>
        <div class="ti_form">
          <p>
            <select>
              <option v-show="!View.length">请选择已有视图</option>
              <option v-for="(item,index) in View" :key="index">{{item.view_authority_text}}</option>
            </select>
          </p>
        </div>
        <div class="ti_button">
          <button>确定</button>
          <button >重置</button>
        </div>
      </div>
      <div class="test_item">
        <div class="ti_title">
          <p class="active">给身份设置api接口权限</p>
        </div>
        <div class="ti_form">
          <p>
            <select>
              <option v-show="!Identity.length">请选择身份id</option>
              <option v-for="(item,index) in Identity" :key="index">{{item.identity_text}}</option>
            </select>
          </p>
          <p>
            <select>
              <option v-show="!Authority.length">请选择api接口权限id</option>
              <option v-for="(item,index) in Authority" :key="index">{{item.api_authority_text}}</option>
            </select>
          </p>
        </div>
        <div class="ti_button">
          <button>确定</button>
          <button >重置</button>
        </div>
      </div>
      <div class="test_item">
        <div class="ti_title">
          <p class="active">给身份设置视图权限</p>
        </div>
        <div class="ti_form">
          <p>
            <select>
              <option v-show="!Identity.length">请选择身份id</option>
              <option v-for="(item,index) in Identity" :key="index">{{item.identity_text}}</option>
            </select>
          </p>
          <p>
            <select>
              <option v-show="!Info.length">请选择视图接口权限id</option>
              <option v-for="(item,index) in Info" :key="index">{{item.view_authority_text}}</option>
            </select>
          </p>
        </div>
        <div class="ti_button">
          <button>确定</button>
          <button >重置</button>
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
      ind: 0
    };
  },
  computed: {
    ...mapState({
      UserList: state => state.jurisdiction.UserList,
      Identity: state => state.jurisdiction.Identity,
      Authority: state => state.jurisdiction.Authority,
      View: state => state.jurisdiction.View,
      Info: state => state.jurisdiction.Info
    })
  },
  methods: {
    ...mapActions({
      showIdentity: "jurisdiction/showIdentity",
      showUserList: "jurisdiction/showUserList",
      apiAuthority: "jurisdiction/apiAuthority",
      acquireView: "jurisdiction/acquireView",
      showInfo: "jurisdiction/showInfo"
    })
  },
  async created() {
    this.showIdentity();
    this.showUserList();
    this.acquireView();
    this.apiAuthority();
    this.showInfo();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.usersadd {
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
    border: 1px solid #ccc;
    flex-wrap: wrap;
    .test_item {
      width: calc(100% / 3);
      flex-shrink: 0;
      border-right: 1px solid #ccc;
      border-top: 1px solid #ccc;
      padding: 0.5rem;
      box-sizing: border-box;
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        border-top: 0;
      }
      &:nth-child(3),
      &:nth-child(6) {
        border-right: 0;
      }
      .ti_title {
        width: 100%;
        display: flex;
        p {
          border: 1px solid#ccc;
          font-size: 1rem;
          padding: 0.2rem 0.5rem;
          box-sizing: border-box;
          background: #fff;
          &.active {
            border: 1px solid#00f;
            color: #00f;
          }
        }
      }
      .ti_form {
        width: 100%;
        padding: 0.5rem 0;
        box-sizing: border-box;
        p {
          width: 100%;
          select {
            width: calc(100% / 2);
            margin: 0.5rem 0;
            border: 1px solid #ccc;
            outline: none;
            padding: 0.15rem 0.5rem;
            box-sizing: border-box;
            font-size: 0.75rem;
            display: block;
            option {
              width: 100%;
              overflow: hidden;
            }
          }
          input {
            width: 100%;
            margin: 0.5rem 0;
            border: 1px solid #ccc;
            outline: none;
            padding: 0.3rem 0.5rem;
            box-sizing: border-box;
            font-size: 0.75rem;
          }
        }
      }

      .ti_button {
        width: 100%;
        display: flex;
        button {
          padding: 0.3rem 0;
          box-sizing: border-box;
          width: calc(100% / 5);
          border: 0;
          background: #fff;
          font-size: 0.85rem;
          outline: none;
          &:first-child {
            width: calc(100% / 3.5);
            background-color: #4e75ff;
            border-color: #4e75ff;
            box-sizing: border-box;
            border: 0;
            border-radius: 2px;
            color: #fff;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>