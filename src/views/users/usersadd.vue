<template>
  <div class="usersadd">
    <h3>添加用户</h3>
    <div class="test">
      <div class="test_item" v-for="(item,index) in 6" :key="index">
        <div class="ti_title">
          <p>添加用户</p>
        </div>
        <div class="ti_form"></div>
        <div class="ti_button"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
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
    // flex-direction: column;
    // background: #fff;
    // border-radius: 10px;
    // padding: 1rem;
    // box-sizing: border-box;
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
          &:first-child {
            border: 1px solid#00f;
            color: #00f;
          }
        }
      }
    }
  }
}
</style>