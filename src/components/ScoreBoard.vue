<template>
    <div>
      <h2>Scoreboard</h2>
      <p>Wins: {{ wins }}</p>
      <p>Losses: {{ losses }}</p>
      <p>Points: {{ points }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['wins', 'losses', 'points']
  }
  </script>
<template>
  <div>
    <h2>Scoreboard</h2>
    <p>Wins: {{ wins }}</p>
    <p>Losses: {{ losses }}</p>
    <p>Points: {{ points }}</p>
  </div>
</template>

<script>
export default {
  props: ['wins', 'losses', 'points']
}
</script>
  