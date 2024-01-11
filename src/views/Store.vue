<script>
  import Header from "../components/Header.vue";

  export default {
    components: {Header},
  }
</script>

<template>
    <Header></Header>

    <main>
        <router-link to="/store/createAttack">
            <button class="medium-button">Create</button>
        </router-link>

        <router-link to="/store/buyAttack">
            <button class="medium-button">Buy</button>
        </router-link>

        <router-link to="/store/sellAttack">
            <button class="medium-button">Sell</button>
        </router-link>
    </main>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {

  }

  .medium-button {
    width: 100%;
    height: 125px;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 10px;
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

</style> 