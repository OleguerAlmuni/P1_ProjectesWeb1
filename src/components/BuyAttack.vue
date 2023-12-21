<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<script>
    export default {
        data() {
            return {
                attackData: [],
                response: ""
            };
        },
        mounted() {
            fetch("https://balandrau.salle.url.edu/i3/shop/attacks", {
                method: 'GET',
                headers: {
                    'Bearer': this.$root.token,
                    'Content-Type': 'application/json'
                },
                
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return response;
            }).then((res) => {
                if (res.ok == undefined) {
                    this.response = res.error.message;
                }
                this.attackData = res;
            }).catch((error) => {
                this.response = "No conection with API";
            });
        },
        methods: {
            
        }
        
    }
</script>


<template>
    <Header title="Buy Attack"></Header>
    <div class="row">
        <div  class="col-4 col-s-12">
            <form style="display: flex; flex-direction: column">
                <h2>Buy</h2>
                <p>{{attackData}}</p>
                <p>{{response}}</p>
                <button type="button" v-on:click.prevent="buyAttack()" class="click-button">Buy for: 000,000</button>
            </form>
        </div>
        <div class="col-8 col-s-12">
            <table>
               <thead>
                   <tr>
                       <th>Attack ID</th>
                       <th>Positions</th>
                       <th>Power</th>
                       <th>Price</th>
                       <th>Level Needed</th>
                   </tr>
               </thead>
               <tbody>
                   <tr v-for="item in attackData" :key="item.attack_ID">
                       <td>{{ item.attack_ID }}</td>
                       <td>{{ item.positions }}</td>
                       <td>{{ item.power }}</td>
                       <td>{{ item.price }}</td>
                       <td>{{ item.level_needed }}</td>
                   </tr>
               </tbody>
            </table>
        </div>
    </div>
</template>


<style scoped>

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