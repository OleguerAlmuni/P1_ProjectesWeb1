<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
    import Attack from '../components/Attack.vue'
</script>


<script>

    export default {
        data() {
            return {
                "equipedAttacks": [],
                "attacks": [],
            }
        },

        mounted() {
            this.showAttacks();
        },
        methods: {

            goToAttack(attack_ID, equiped) {
                console.log("SI");
                this.$router.push({
                    path: "attacks/attack",
                    query: {
                        attack: attack_ID,
                        itsEquiped: equiped,
                        equipedAttacks: JSON.stringify(this.equipedAttacks),
                    }
                })
            },

            showAttacks() {
                fetch('https://balandrau.salle.url.edu/i3/players/attacks', {
                    method: 'GET',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    }
                }).then(response => response.json())
                    .then(data => {
                        data.forEach(attack => {
                            if (attack.equipped) {
                                this.equipedAttacks.push(attack);
                            } else {
                                this.attacks.push(attack)
                            }
                        });
                    })
                    .catch(error => {
                        console.log("2");
                    });
            },
        }
    }
</script>


<template>
    <Header title="Attacks"></Header>
    <section class="row">
        <header>
            <h1>Attacks</h1>
        </header>
        <p>{{equipedAttacks}}</p>
        <p>{{attacks}}</p>
        <section class="equipped-attacks">
            <h2>Equipped Attacks</h2>
            <section v-for="attack in equipedAttacks" :key="attack.attack_ID">
                <button v-if="!attack.on_sale" class="click-small-button" v-on:click.prevent="goToAttack(attack.attack_ID, true)"><h1>{{attack.attack_ID}}</h1></button>
            </section>
        </section>

        <section class="backpack">
            <h2>Backpack</h2>
            <section v-for="attack in attacks" :key="attack.attack_ID">
                <button v-if="!attack.on_sale" class="click-small-button" v-on:click.prevent="goToAttack(attack.attack_ID, false)"><h1>{{attack.attack_ID}}</h1></button>
            </section>
        </section>
    </section>

</template>

<style scoped>

    @media only screen and (min-width: 768px) {
    }

    .element-to-move-front {
        z-index: 1; /* set higher z-index value */
        position: relative; /* position must be set for z-index to work */
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