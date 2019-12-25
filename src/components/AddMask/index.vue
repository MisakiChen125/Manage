<template>
  <div :class="{addMask:true, active:isMask}" @click="btn"></div>
</template>
<script>
export default {
  props: {
    isMask: {
      type: Boolean
    },
    editMask: {
      type: Function
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    btn() {
      this.editMask(false);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.addMask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1002;
  transition: all .5s ease;
  transform: scale(0, 0);
  &.active {
    transition: all 2s ease;
    transform: scale(100, 100);
  }
}
</style>