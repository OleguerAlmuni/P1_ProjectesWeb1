<script>
  import Header from "../components/Header.vue";

  export default {
    components: {Header},
  }
</script>

<template>
    <Header></Header>

    <main>
      <button class="medium-button" @click="this.$router.push('/store/createAttack')">Create</button>

      <button class="medium-button" @click="this.$router.push('/store/buyAttack')">Buy</button>
    </main>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {

  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .medium-button {
    width: 100%;
    height: 125px;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 20px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
  }

  button:hover {background-color: #77aaff}

  button:active {
    background-color: #77aaff;
    box-shadow: 0 5px #808b96;
    transform: translateY(4px);
  }

</style> 