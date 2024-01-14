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
      <h2>Attack Info</h2>
      <label for="Attack"></label>
      <input type="text" id="Attack" name="Attack" placeholder="Attack" v-model="attack_ID">
      <label for="Image"></label>
      <input type="text" id="Image" name="Image" placeholder="Image" v-model="img">
      <input type="submit" v-on:click.prevent="createAttack()" value="Create Attack">
    </form>

    <section class="attack-positions">
      <h2>Attack Positions</h2>
      <section class="cross-form">
        <button class="btn" type="button"  @click="setPosition(1,0)">(0, 1)</button>

        <section class="middle">
          <button class="btn" type="button" @click ="setPosition(0,1)">(-1, 0)</button>
          <img :src="this.$root.img" alt="">
          <button class="btn" type="button" @click ="setPosition(0,-1)">(1, 0)</button>
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
    background-color: #99ccff;
    border: 5px solid black;
    border-radius: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 100%;
    border: none;
    background-color: #99ccff;
  }

  input {
    margin-top: 10px;
  }

  .attack-positions {
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

    .middle img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 2px solid black;
    }

    .cross-form button  {
      width: 100px;
      height: 100px;
      margin: 5px;
      border: 2px solid black;
      border-radius: unset;
      background-color: #77aaff;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

  input[type=submit] {
    margin-top: 10px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
    border-radius: 15px;
    cursor: pointer;
    padding: 16px 32px;
  }

  input[type=submit]:hover {background-color: #77aaff}

  input[type=submit]:active {
    background-color: #77aaff;
    box-shadow: 0 5px #808b96;
    transform: translateY(4px);
  }

</style>