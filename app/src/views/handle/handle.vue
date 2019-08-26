<template>
  <div class="handleBox">
    <person-type-nav></person-type-nav>
    <router-link to="/home/handle/heightWeight">身高体重</router-link>
    <router-link to="/home/handle/bloodPressure">血压</router-link>
    <router-link to="/home/handle/bSuper">B超</router-link>
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
