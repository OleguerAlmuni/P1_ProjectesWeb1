<script>

</script>

<template>
  <section class="header">

    <button @click="$router.back()">Back</button>

    <button @click="$router.push('/home')">Home</button>

    <button @click="$router.push('/attacks')" class="backpack-button">Backpack</button>

    <router-link to="/profile">
      <img :src="this.$root.img" alt="">
    </router-link>

  </section>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {

  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    background-color: #ebdeb6;
    border: 5px solid #dec986;
    border-radius: 8px;
  }

  button {
    width: 15%;
    height: 50px;
    margin-left: 5px;
    margin-bottom: 5px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
  }

  .backpack-button {
    margin-right: auto;
  }

  img {
    margin-top: 4px;
    margin-right: 5px;
    border: 2px solid black;
    border-radius: 50%;
    max-height: 90px;
    max-width: 90px;
  }

  button:hover {background-color: #77aaff}

  button:active {
    background-color: #77aaff;
    box-shadow: 0 5px #808b96;
    transform: translateY(4px);
  }

</style>