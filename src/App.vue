<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import VueCookies from 'vue-cookies';

export default {
  name: 'App',
  data() {
    return {
      isAuthenticated: false,
    };
  },
  created() {
    // Check if a login token is present in cookies or another authentication method
    const authToken = VueCookies.get('authToken'); // Change 'authToken' to the actual cookie name
    if (authToken) {
      this.isAuthenticated = true;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
