<template>
    <div>
      <h1>Game Page</h1>
      <score-board :wins="wins" :losses="losses" :points="points" />
      <game-button @win="handleWin" @lose="handleLoss" />
      <div>
        <h2>Guess the Number:</h2>
        <input type="number" v-model="userGuess" />
        <button @click="checkGuess">Check Guess</button>
        <p v-if="resultMessage">{{ resultMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import ScoreBoard from '../components/ScoreBoard.vue';
  import GameButton from '../components/GameButton.vue';
  import VueCookies from 'vue-cookies';
  
  export default {
    components: {
      ScoreBoard,
      GameButton,
    },
    data() {
      return {
        wins: 0,
        losses: 0,
        points: 100,
        randomNumber: null,
        userGuess: null,
        resultMessage: '',
      };
    },
    methods: {
      handleWin() {
        this.wins++;
      },
      handleLoss() {
        this.losses++;
      },
      checkGuess() {
        if (this.userGuess === null || this.userGuess === '') {
          this.resultMessage = 'Please enter a number.';
          return;
        }
  
        // Generate a random number between 1 and 100 for demonstration
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
  
        if (parseInt(this.userGuess) === this.randomNumber) {
          this.resultMessage = 'Congratulations! You guessed the correct number.';
          this.handleWin(); // Increment wins
        } else if (parseInt(this.userGuess) > this.randomNumber) {
          this.resultMessage = 'Try a lower number.';
        } else {
          this.resultMessage = 'Try a higher number.';
        }
  
        if (this.resultMessage !== 'Congratulations! You guessed the correct number.') {
          this.handleLoss(); // Increment losses
        }
  
        // Update points and store them in cookies
        const currentPoints = VueCookies.get('points') || 100;
        VueCookies.set('points', currentPoints); // Adjust points as needed
      },
    },
    mounted() {
      // Load points from cookies
      const savedPoints = VueCookies.get('points');
      if (savedPoints !== null) {
        this.points = savedPoints;
      }
    },
  };
  </script>
  