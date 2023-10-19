<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // In a real application, you should perform authentication with a backend server
        // This is a simplified example for demonstration purposes
        if (this.username === 'example' && this.password === 'password') {
          // Simulate a successful login (replace with your actual logic)
          // Redirect to the game page upon successful login
          this.$router.push({ name: 'game' });
        } else {
          // Handle login error, e.g., show an error message
          alert('Invalid credentials. Please try again.');
        }
      },
    },
  };
  </script>
  