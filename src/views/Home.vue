<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <syotoku/>
  </div>
</template>

<script>
// @ is an alias to /src
import syotoku from '@/components/syotoku.vue'

export default {
  name: 'Home',
  components: {
    syotoku
  }
}
</script>
