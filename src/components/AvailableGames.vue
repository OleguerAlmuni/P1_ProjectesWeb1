<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header title="Available Games"></Header>

    <div class="AvailableGames">

        <div class="Games">
            <table>
                <tr>
                    <th>ID</th>
                    <th>N.Squares</th>
                    <th>HP</th>
                    <th>State</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="join">JOIN</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="join">JOIN</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="join">JOIN</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="join">JOIN</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="join">JOIN</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="join">JOIN</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="join">JOIN</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="join">JOIN</button></router-link>
                    </td>
                </tr>
            </table>
        </div>

    </div>
</template>

<style scoped>
    @media only screen and (min-width: 768px) {

        .Games {
            width: 99%;
        }
    }

    .Games {
        display: flex;
        justify-content: center;
    }

    table, th, td {
        font-family: Inter;
        border: 1px solid;
        border-collapse: collapse;
    }

    th, td {
        text-align: center;
        padding: 15px;
    }
    .join {
        font-family: Inter;
        background-color: #4CAF50;
        color: white;
    }
        .join:hover {
            background-color: #45a049;
        }

        .join:active {
            background-color: #3e8e41;
        }
</style>