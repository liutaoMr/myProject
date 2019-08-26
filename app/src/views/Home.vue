<template>
  <Layout class="home">
    <head-nav></head-nav>
    <router-view />
  </Layout>
</template>
<script>
  import headNav from './nav/headNav'
  export default {
    mounted(){

    },
    data () {
      return {

      }
    },
    components: {
      headNav,
    },

  }
</script>
<style scoped>

</style>
