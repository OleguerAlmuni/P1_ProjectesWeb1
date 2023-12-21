<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
    import Attack from '../components/Attack.vue'
</script>


<script>

    export default {
        data() {
            return {
                "attack_ID": "",
                "positions": "",
                "img": null,
                "ppower": 0,
                "equipped": false,
                "on_sale": false,

                displayActionWindow: false,
            }
        },

        mounted() {
            this.showAttacks();
        },
        methods: {
            showActionWindow() {
                console.log("SI");
                this.displayActionWindow = true;
            },

            showAttacks() {
                fetch('https://balandrau.salle.url.edu/i3/players/attacks', {
                    method: 'GET',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        const equippedAttacksContainer = document.querySelector('.equipped-attacks');
                        const backpackContainer = document.querySelector('.backpack');

                        data.forEach(attack => {
                            const button = document.createElement('button');
                            button.classList.add('click-small-button');
                            button.textContent = `Attack ${attack.attack_ID}`;
                            button.click = 
                            // Add event listeners or any other functionality to the buttons if needed
                            button.addEventListener('click', () => {
                                //this.$emit('show-action-window');
                                this.$router.push({
                                    name: 'attack',
                                    params: { attack_ID: attack.attack_ID } // Replace with your desired parameters
                                });
                                console.log("HIHIHI");
                            });

                            if (attack.equipped) {
                                equippedAttacksContainer.appendChild(button); // If attack is equipped, append to equipped section
                            } else {
                                backpackContainer.appendChild(button); // If not equipped, append to backpack section
                            }
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });
            },
        }
    }
</script>


<template>
    <Header title="Attacks"></Header>
    <div class="row">
        <p>{{displayActionWindow}}</p>
        <Attack v-if="displayActionWindow" @show-action-window="showActionWindow"></Attack>
        <header>
            <h1>Attacks</h1>
        </header>

        <section class="equipped-attacks">
            <h2>Equipped Attacks</h2>
        </section>

        <section class="backpack">
            <h2>Backpack</h2>
        </section>
    </div>

</template>

<style scoped>

    @media only screen and (min-width: 768px) {
    }

    .column {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .center {
        display: flex;
        justify-content: center;
    }

    .container {
        font-family: Inter,serif;
        padding: 30px;
    }

    .circle {
        background: lightblue;
        border-radius: 50%;
        width: 70px;
        height: 70px;
    }

    .backpack {
        width: 900px;
        height: 400px;
        overflow: hidden;
      margin-top: 20px;
      margin-right: 20px;
      margin-left: 450px;
      margin-bottom: 20px;
      padding: 80px;
        background: #23463f;
        border-radius: 15px;
    }

        .backpack h2 {
            display: flex;
            justify-content: center;
        }


    .click-button {
        font-family: Inter;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        width: 150px;
        height: 150px;
    }

        .click-button:hover {
            background-color: #45a049;
        }

        .click-button:active {
            background-color: #3e8e41;
        }

    .click-small-button {
        font-family: Inter;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        width: 90px;
        height: 90px;
    }

        .click-small-button:hover {
            background-color: #45a049;
        }

        .click-small-button:active {
            background-color: #3e8e41;
        }

    .horizontal-scroll {
        width: 100%; /* Ancho del contenedor */
        display: flex;
        flex-wrap: wrap;
        overflow-x: auto; /* Permite el scroll horizontal cuando el contenido es más ancho que el contenedor */
    }

    @media only screen and (min-width: 768px) {

        .column {
            width: 100%;
        }

        .center {
            width: 100%;
        }
    }
</style>