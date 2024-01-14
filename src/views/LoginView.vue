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
                //Guarda la información relevante en el localstorage para no tener que hacer inicios de sesión repetidamente.
                this.response = "Token: " + res.token;
                this.$root.player_ID = res.player_ID;
                localStorage.player_ID = res.player_ID;
                this.$root.img = res.img;
                localStorage.img = res.img;
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
  <header>
    <button @click="$router.back()" class="back-button">Back</button>
    <h2>Login</h2>
    <button class="invisible-button"></button>
  </header>

  <form>
    <label for="Name">Username</label>
    <input type="text" id="Name" name="Name" placeholder="Email" v-model="playerName">

    <label for="Password">Password</label>
    <input type="password" id="Password" name="Password" placeholder="Password" v-model="password">

    <input type="submit" v-on:click.prevent="login()" value="Login" class="submit">

    <p>{{ response }}</p>
  </form>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    form {
      max-width: 30%;
    }
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: black;
  }

  .back-button {
    width: 100px;
    height: 50px;
    margin-right: auto;
    color: black;
    background-color: white;
    border: 2px solid black;
    border-radius: 8px;
  }

  .invisible-button {
    pointer-events: none;
    visibility: hidden;
    margin-left: auto;
    width: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

  input {
    margin-bottom: 5px;
  }

  .submit {
    margin-top: 20px;
  }

</style>