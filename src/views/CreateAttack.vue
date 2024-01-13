<script>
  import Header from "../components/Header.vue";
    export default {
      components: {Header},
        data() {
            return {
                "attack_ID": "",
                "positions": "",
                "img": "",
                "preview": null,
            }
        },
        methods: {
            createAttack() {
                const attack = { attack_ID: this.attack_ID, positions: this.positions, img: this.img };
                fetch("https://balandrau.salle.url.edu/i3/shop/attacks", {
                    method: 'POST',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(attack)

                }).then((response) => {
                    if (response.ok) {
                        this.response = "Attack created!";
                        this.$router.push('/store');
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
            setPosition(x, y) {
                this.positions = "(" + x + "," + y + ")";
            }
        }
    }
</script>

<template>
  <Header></Header>

  <main>
    <form>
      <label for="Attack"></label>
      <input type="text" id="Attack" name="Attack" placeholder="Attack" v-model="attack_ID">
      <label for="Image"></label>
      <input type="text" id="Image" name="Image" placeholder="Image" v-model="img">
      <input type="submit" v-on:click.prevent="createAttack()" value="Create Attack">
    </form>

    <section class="attack-positions">
      <section class="cross-form">
        <button class="btn" type="button"  @click="setPosition(1,0)"></button>

        <section class="middle">
          <button class="btn" type="button" @click ="setPosition(0,-1)"></button>
          <div class="btn"></div>
          <button class="btn" type="button" @click ="setPosition(0,1)"></button>
        </section>
      </section>
    </section>
  </main>
</template>


<style scoped>

  @media only screen and (min-width: 768px) {
    form {
      flex: 2;
      max-width: 40%;
    }

    .attack-positions {
      flex: 3;
      max-width: 60%;
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 15px;
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 100%;
  }

  input {
    margin-top: 10px;
  }

  .attack-positions {
    flex: 100%;
  }


    .cross-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 300px;
    }

    .middle {
        display: flex;
        justify-content: space-evenly;
    }

    .btn {
        width: 100px; /* Adjust the width as needed */
        height: 100px; /* Set the height to match the width for square buttons */
        margin: 5px;
        border: none;
        background-color: #3498db;
        color: white;
        font-size: 16px;
        cursor: pointer;
    }

</style>