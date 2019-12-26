<template>
  <div class="usersadd">
    <h3>添加用户</h3>
    <div class="test">
      <div class="test_item" v-for="(item,index) in arr" :key="index">
        <div class="ti_title" v-if="index===0">
          <p :class="{active:i===ind}" v-for="(v,i) in item.title" :key="i" @click="ind=i">{{v}}</p>
        </div>
        <div class="ti_title" v-else>
          <p :class="{active:i===0}" v-for="(v,i) in item.title" :key="i">{{v}}</p>
        </div>
        <div class="ti_form">
          <p v-if="item.form.filter(a=>{return a.type==='input'}).length">
            <input
              type="text"
              v-for="(v,i) in item.form.filter(a=>{return a.type==='input'})"
              :key="i"
              :placeholder="v.text"
            />
          </p>
          <p v-if="item.form.filter(a=>{return a.type==='select'}).length">
            <select
              name
              id
              v-for="(v,i) in item.form.filter(a=>{return a.type==='select'})"
              :key="i"
            >
              <option :value="v.text">{{v.text}}</option>
            </select>
          </p>
        </div>
        <div class="ti_button">
          <button>确定</button>
          <button>重置</button>
        </div>
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
      ind: 0,
      arr: [
        {
          title: ["添加用户", "更新用户"],
          form: [
            {
              type: "input",
              text: "请输入用户名"
            },
            {
              type: "input",
              text: "请输入密码"
            },
            {
              type: "select",
              text: "请选择身份id"
            }
          ]
        },
        {
          title: ["添加身份"],
          form: [
            {
              type: "input",
              text: "请输入身份名称"
            }
          ]
        },
        {
          title: ["添加api接口权限"],
          form: [
            {
              type: "input",
              text: "请输入api接口权限名称"
            },
            {
              type: "input",
              text: "请输入api接口权限url"
            },
            {
              type: "input",
              text: "请输入api接口权限方法"
            }
          ]
        },
        {
          title: ["添加视图接口权限"],
          form: [
            {
              type: "select",
              text: "请选择已有视图"
            }
          ]
        },
        {
          title: ["给身份设置api接口权限"],
          form: [
            {
              type: "select",
              text: "请选择身份id"
            },
            {
              type: "select",
              text: "请选择api接口"
            }
          ]
        },
        {
          title: ["给身份设置视图权限"],
          form: [
            {
              type: "select",
              text: "请选择身份id"
            },
            {
              type: "select",
              text: "请选择视图权限"
            }
          ]
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
            width: calc(100% / 3);
            margin: 0.5rem 0;
            border: 1px solid #ccc;
            outline: none;
            padding: 0.15rem 0.5rem;
            box-sizing: border-box;
            font-size: 0.75rem;
            display: block;
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