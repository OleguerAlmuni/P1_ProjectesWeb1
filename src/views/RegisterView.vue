<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<script>
export default {
  data() {
    return {
      playerName: "",
      password: "",
      img: "",
      response: "",
    }
  },
  methods: {
    register() {
      const createUserRequest = { player_ID: this.playerName, password: this.password, img: this.img };
      fetch("https://balandrau.salle.url.edu/i3/players", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createUserRequest)
      }).then((response) => {
        if (response.ok) {
          this.response = "Player created!";
          return response;
        }

        return response.json();
      }).then((res) => {
        if (res.ok == undefined) {
          this.response = res.error.message;
        }
      }).catch((error) => {
        this.response = "No connection with API";
      });
    },
  }
}
</script>

<template>
    <Header></Header>
    <h1>Game Title</h1>
    <div class="createAccount">
        <h2>Create Account</h2>
        <label for="Name"></label>
        <input type="text" id="Name" name="Name" placeholder="Name" v-model="playerName">
        <label for="Password"></label>
        <input type="password" id="Name" name="Name" placeholder="Password" v-model="password">
        <label for="Image"></label>
        <input type="text" id="Image" name="Image" placeholder="Image" v-model="img">

      <input type="submit" v-on:click.prevent="register()" value="CreateAccount">
      <p>{{ response }}</p>
    </div>
</template>

<style scoped>

    h1 {
        font-family: Inter;
        display: flex;
        justify-content: center;
    }

    .createAccount {
        font-family: Inter;
        width: 382px;
        overflow: hidden;
        margin: auto;
        margin: 20 0 0 450px;
        padding: 80px;
        background: #23463f;
        border-radius: 15px;
    }

        .login h2 {
            text-align: center;
        }

        .login button {
            justify-content: center;
        }
</style>