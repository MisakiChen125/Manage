<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  user-select: none;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  .itemadd,
  .classify,
  .itemlook,
  .usersadd,
  .usershow {
    overflow-y: auto;
  }
}
.hasTagsView .app-main {
  display: flex;
  flex-direction: column;
}
</style>
