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
  <header>
    <button @click="$router.back()" class="back-button">Back</button>
    <h2>Register</h2>
    <button class="invisible-button"></button>
  </header>

  <form>
    <label for="Name"></label>
    <input type="text" id="Name" name="Name" placeholder="Name" v-model="playerName">

    <label for="Password"></label>
    <input type="password" id="Name" name="Name" placeholder="Password" v-model="password">

    <label for="Image"></label>
    <input type="text" id="Image" name="Image" placeholder="Image" v-model="img">

    <input type="submit" v-on:click.prevent="register()" value="Register" class="submit">

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