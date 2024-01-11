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
    <Header title="CreateAttack"></Header>
    <div class="row">
        <form class="column col-6 col-s-12">
            <h2>Create</h2>
            <label for="Attack"></label>
            <input type="text" id="Attack" name="Attack" placeholder="Attack" v-model="attack_ID">
            <label for="Image"></label>
            <input type="text" id="Image" name="Image" placeholder="Image" v-model="img">
            <button type="button" v-on:click.prevent="createAttack()" class="click-button">Create for: 000,000</button>
            <p>{{ response }}</p>
        </form>
        <form class="col-6 col-s-12">
            <section class="cross-form">
                <button class="btn" type="button"  @click="setPosition(1,0)"></button>
                <section class="middle">
                    <button class="btn" type="button" @click ="setPosition(0,-1)"></button>
                    <button class="btn" type="button" @click ="setPosition(0,1)"></button>
                </section>
                
            </section>
        </form>
    </div>
</template>


<style scoped>

  @media only screen and (min-width: 768px) {

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

    .click-button {
        font-family: Inter;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

        .click-button:hover {
            background-color: #45a049;
        }

        .click-button:active {
            background-color: #3e8e41;
        }
</style>