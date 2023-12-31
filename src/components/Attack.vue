<script>
    export default {

        data() {
            return {
                attack_ID: this.$route.query.attack,
                equipedAttacks: JSON.parse(this.$route.query.equipedAttacks),
                response: "",
                price: 0,
                showPanel: false,
                itsEquiped: this.$route.query.itsEquiped === 'true',
                attack_SW: "",
            }
        },

        mounted() {
            if (this.equipedAttacks.length == 3) {
                this.showPanel = true;
            }
            else {
                this.showPanel = false;
            }
        },

        methods: {

            goBack() {
                this.$router.push("/attacks")
            },

            switchWith(attack) {
                this.attack_SW = attack;
            },

            equipItem() {
                fetch("https://balandrau.salle.url.edu/i3/players/attacks/"+ this.attack_ID, {
                    method: 'POST',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                    if (response.ok) {
                        this.goBack();
                    }
                    return response.json();
                }).then((res) => {
                    if (res.ok == undefined) {
                        this.response = res.error.message;
                    }
                    alert("You have 3 attacks already equiped");
                }).catch((error) => {
                    this.response = "No connection with API";
                });
            },
            disequipItem() {
                fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + this.attack_ID, {
                    method: 'DELETE',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                    if (response.ok) {
                        this.goBack();
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
            sellItem() {
                const sell = { price: this.price};
                fetch("https://balandrau.salle.url.edu/i3/shop/attacks/" + this.attack_ID + "/sell", {
                    method: 'POST',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(sell)
                }).then((response) => {
                    if (response.ok) {
                        this.goBack();
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

            switchAttack() {
                fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + this.attack_ID + "/" + this.attack_SW, {
                    method: 'PATCH',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                    if (response.ok) {
                        this.goBack();
                    }
                    return response.json();
                }).then((res) => {
                    if (res.ok == undefined) {
                        this.response = res.error.message;
                    }
                    switchAttacks();
                }).catch((error) => {
                    this.response = "No connection with API";
                });
            }
        }

    }</script>

<template>
    <div class="action-window">
        <p>{{attack_ID}}</p>
        <p>{{equipedAttacks}}</p>
        <p>{{itsEquiped}}</p>
        <p>{{showPanel}}</p>
        <section v-if="showPanel && !itsEquiped">
            <h1>Select 1 to switch the attack with it</h1>
            <section v-for="attack in equipedAttacks">
                <button v-on:click="switchWith(attack.attack_ID)"><h1>{{attack.attack_ID}}</h1></button>
            </section>
        </section>
        <button v-if="showPanel && !itsEquiped" @click="switchAttack">Equip and Desequip {{attack_SW}}</button>
        <button v-if="!showPanel && !itsEquiped" @click="equipItem">Equip</button>
        <button v-if="itsEquiped" @click="disequipItem">Disequip</button>
        <label for="price">Enter a number between 0 and 10000</label>
        <input type="number" id="price" name="price" min="0" max="10000" v-model="price">
        <input type="submit" v-on:click.prevent="sellItem()" value="Sell">
    </div>
</template>
<style>
    .action-window {
      display: flex;
      flex-direction: column;
    }
</style>