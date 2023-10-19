<template>
    <div>
      <button @click="playGame">Play Game</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import VueCookies from 'vue-cookies';
  
  export default {
    methods: {
      async playGame() {
        try {
          const response = await axios.get('http://www.randomnumberapi.com/api/v1.0/randomnumber');
          const randomNumber = response.data.number;
          if (randomNumber >= 50) {
            this.$emit('win');
          } else {
            this.$emit('lose');
          }
  
          // Update points
          const currentPoints = VueCookies.get('points') || 100;
          if (randomNumber >= 50) {
            VueCookies.set('points', currentPoints + 10); // You can adjust the points logic
          } else {
            VueCookies.set('points', currentPoints - 10); // You can adjust the points logic
          }
        } catch (error) {
          console.error('Error playing the game: ', error);
        }
      }
    }
  }
  </script>
  