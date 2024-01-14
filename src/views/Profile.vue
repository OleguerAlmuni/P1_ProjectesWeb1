<script>
  import Header from '../components/Header.vue'
  export default {
    components: {Header},
    data() {
      return {
        playerName: "",
        image: "",
        xp: 0,
        level: 0,
        coins: 0,
        response: "",
      }
    },
    beforeMount() {
      this.playerName = this.$root.player_ID;
    },
    mounted() {
      fetch("https://balandrau.salle.url.edu/i3/players/" + this.playerName, {
        method: 'GET',
        headers: {
          'Bearer': this.$root.token,
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.ok) {
          this.response = "Your profile looks great!";
        }
        return response.json();
      }).then((res) => {
        this.image = res.img;
        this.xp = res.xp;
        this.level = res.level;
        this.coins = res.coins;
      }).catch((error) => {
        this.response = "No connection with API";
      });
    },
    methods: {
      deleteProfile() {
        fetch("https://balandrau.salle.url.edu/i3/players", {
          method: 'DELETE',
          headers: {
            'Bearer' : this.$root.token,
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          if (response.ok) {
            localStorage.removeItem('player_ID');
            localStorage.removeItem('img');
            localStorage.removeItem('token');
            this.$router.push('/');
            return response;
          }

          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
        }).catch((error) => {
          this.response = "No conection with API";
        });
      }
    }
  }
</script>

<template>
  <Header></Header>

  <main>
    <section class="name-img">
      <img :src="image" alt="Profile_Image">

      <h1>{{ playerName }}</h1>
    </section>

    <section class="info-links">
      <div class="info">
        <p>Level: {{ level }}</p>
        <p>XP: {{ xp }}</p>
        <p>Coins: {{coins}}</p>
      </div>

      <div class="links">
        <router-link to="/gameHistory">
          <button class="game-history">Game History</button>
        </router-link>

        <button v-on:click.prevent="deleteProfile()">Delete Profile</button>
      </div>
    </section>
  </main>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    main {
      max-width: 40%;
      margin-right: auto;
      margin-left: auto;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    padding: 15px;
    color: black;
    background-color: #99ccff;
    border: 5px solid black;
    border-radius: 8px;
  }

  .name-img {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    border-radius: 50%;
    max-height: 150px;
    max-width: 150px;
    border: 2px solid black;
  }

  .info-links {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .info, .links {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

  .links {
    justify-content: space-evenly;
  }

  .links button {
    height: 50px;
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