<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<script>

    export default {
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
                fetch("http://balandrau.salle.url.edu/i3/shop/attacks", {
                    method: 'POST',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(attack)

                }).then((response) => {
                    if (response.ok) {
                        this.response = "Attack created!";
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

            onFileChange(event) {
                const file = event.target.files[0];
                this.previewImage(file);
            },
            previewImage(file) {
                if (!file || !file.type.match('image.*')) {
                    return;
                }
                const reader = new FileReader();

                reader.onload = (e) => {
                    this.img = e.target.result;
                };

                reader.readAsDataURL(file);
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
            <input type="file" id="fileInput">
            <section v-if="img">
                <img :src="img" alt="Uploaded Image">
            </section>
            <button type="button" v-on:click.prevent="createAttack()" class="click-button">Create for: 000,000</button>
            <p>{{ response }}</p>
        </form>
        <form class="col-6 col-s-12">
            <section class="cross-form">
                <button class="btn" type="button"  @click="setPosition(0,1)"></button>
                <section class="middle">
                    <button class="btn" type="button" @click ="setPosition(-1,0)"></button>
                    <button class="btn" type="button" @click ="setPosition(1,0)"></button>
                </section>
                <button class="btn" type="button" @click ="setPosition(0,-1)"></button>
            </section>
            <p> {{ positions }} </p>
        </form>
    </div>
</template>


<style scoped>


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


    .container {
        font-family: Inter;
        display: flex;
        justify-content: space-around;
    }

    .left-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .right-content {
        padding: 20px;
    }

    .spacing {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .center {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .circle {
        background: lightblue;
        border-radius: 50%;
        width: 70px;
        height: 70px;
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

    @media only screen and (min-width: 768px) {

        .container {
            width: 100%;
        }
    }
</style>