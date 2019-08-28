<template>
  <div class="handleBox">
    <person-type-nav></person-type-nav>
    <router-view></router-view>
  </div>
</template>

<script>
    import HeadNav from "../nav/headNav";
    import PersonTypeNav from "./personTypeNav/personTypeNav";
    import heightWeight from "./heightWeight/heightWeight"
    export default {
        name: "handle",
      components: {PersonTypeNav, HeadNav,heightWeight}
    }
</script>

<style scoped>
</style>
