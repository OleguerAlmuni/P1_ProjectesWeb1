<script>

</script>

<template>
  <section class="content">

    <h1>BATTLE ARENA</h1>

    <section class="start">
      <router-link to="/login">
        <button>LOG IN</button>
      </router-link>
      <router-link to="/register">
        <button>REGISTER</button>
      </router-link>
    </section>

  </section>

</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    .start {
      max-width: 30%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: "PKMN-Pinball";
    font-size: x-large;
    padding: 20px;
    background-color: white;
    border: 10px solid black;
    border-radius: 8px;
    margin-bottom: 50px;
    color: black;
  }

  .start {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
    background-color: #99ccff;
    border: 10px solid black;
    border-radius: 8px;
  }

  .start button {
    font-family: "PKMN-Pinball";
    width: 175px;
    padding: 10px;
    margin-bottom: 7.5px;
    margin-top: 7.5px;
    color: black;
    background-color: white;
    border: 2px solid black;
    border-radius: 8px;
  }

</style>