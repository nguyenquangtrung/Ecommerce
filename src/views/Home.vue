<template>
  <div class="hello">
        <NavBar></NavBar>
        <hero />
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
    Hero
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
