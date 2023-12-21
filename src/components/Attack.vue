<script>
    export default {

        /*props: {
            attack_ID: String,
        },*/
        data() {
            return {
                attack_ID: "",
                response: "",
                price: 1000,
            }
        },
        methods: {
            equipItem() {
                fetch("https://balandrau.salle.url.edu/i3/players/attacks/"+ this.attack_ID, {
                    method: 'POST',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                    if (response.ok) {
                        this.response = "Attack equipped!";
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
            disequipItem() {
                fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + this.attack_ID, {
                    method: 'DELETE',
                    headers: {
                        'Bearer': this.$root.token,
                        'Content-Type': 'application/json'
                    },
                }).then((response) => {
                    if (response.ok) {
                        this.response = "Attack disequiped!";
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
                        this.response = "Attack sold!";
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
            }
        }

    }</script>

<template>
    <div class="action-window">
        <p>{{attack_ID}}</p>
        <p>{{ata}}</p>
        <button @click="equipItem">Equip</button>
        <button @click="disequipItem">Disequip</button>
        <button @click="sellItem">Sell</button>
    </div>
</template>
<style>
    .action-window {
      display: flex;
      flex-direction: column;
    }
</style>