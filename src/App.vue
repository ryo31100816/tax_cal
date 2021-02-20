<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <label for="birth">生年月日</label>
      <input type="date" id="birth" v-model="birth" />
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      birth: '',
    }
  },
  watch: {
    birth: function() {
      this.$store.dispatch('readBirth', this.birth);
      console.log(this.birth);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
