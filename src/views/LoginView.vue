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
      response: "",
    }
  },
  methods: {
    login() {
      const user = { player_ID: this.playerName, password: this.password };
      fetch("https://balandrau.salle.url.edu/i3/players/join", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)

      }).then((response) => response.json())
          .then((res) => {
            if (res.error == undefined) {
              this.response = "Token: " + res.token;
              this.$root.player_ID = res.player_ID;
              localStorage.player_ID = res.player_ID;
              this.$root.token = res.token;
              localStorage.token = res.token;
              this.$router.push("/home");
            } else {
              this.response = res.error.message;
            }

          }).catch(error => {
            this.response = "Lost API connection :(";
          });
    },
  }

}
</script>

<template>
  <Header></Header>
  <h1>Game Title</h1>
  <main class="login">
    <h2>Login</h2>
    <form class="components">
      <label for="Name"></label>
      <input type="text" id="Name" name="Name" placeholder="Email" v-model="playerName">
      <label for="Name"></label>
      <input type="password" id="Password" name="Password" placeholder="Password" v-model="password">
      <input type="submit" v-on:click.prevent="login()" value="Login">
      <p>{{ response }}</p>
    </form>
  </main>
  <br>
</template>

<style scoped>

    h1 {
        font-family: Inter;
        display: flex;
        justify-content: center;
    }

    .components{
      display: flex;
      flex-direction: column;
      align-content: center;
      width: 200px;
    }
    .components text{
      width: 200px;
    }

    .components password {
      width: 200px;
    }

    .read-the-docs {
        color: #888;
    }

    .login {
      display: flex;
      flex-direction: column;
      align-items: center;
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