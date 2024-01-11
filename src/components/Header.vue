<script>

</script>

<template>
  <section class="header">

    <button @click="$router.back()">Back</button>

    <router-link to="/home">
      <button>Home</button>
    </router-link>

    <router-link to="/attacks" class="button-prueba">
      <button>Backpack</button>
    </router-link>

    <div></div>

    <router-link to="/profile">
      <img :src="this.$root.img" alt="">
    </router-link>

  </section>
</template>

<style scoped>

  .header {
    display: flex;
    align-items: center;
    background-color: white;
    color: black;
    border: 5px solid black;
    border-radius: 8px;
  }

  button {
    width: 100px;
    height: 50px;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
    color: black;
    background-color: white;
    border: 2px solid black;
    border-radius: 8px;
  }

  .button-prueba {
    margin-right: auto;
  }

  img {
    justify-self: flex-end;
    margin-top: 4px;
    margin-right: 5px;
    border: 2px solid black;
    border-radius: 50%;
    max-height: 90px;
    max-width: 90px;
  }

</style>