<script setup>
    import { ref } from 'vue'
</script>

<template>
    <div class="components">
        <div class="left-components">
            <div class="profile">
                <nav>
                    <router-link to="/profile"><button class="circle">Profile</button></router-link>
                </nav>
            </div>
             <br />
            <div class="personalInfo">
                <p>Rank: #000</p>
                <p>Name: Lorem Ipsum</p>
                <p>Level: #00</p>
                <p>XP: #000</p>
            </div>
            <br />
            <div class="statistics">
                <p>Total Played: #000</p>
                <p>Total Wins: #000</p>
             <p>Wins%: 000%</p>
             </div>
        </div>
        <div class="right-components">
            <div class="resultTable">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>VS</th>
                        <th>Result</th>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
</template>

<style scoped>
    table, th, td {
        border: 1px solid;
        border-collapse: collapse;
    }

    th, td {
        text-align: center;
        padding: 15px;
    }

    .resultTable {
        display: flex;
        justify-content: center;
    }

    .components {
        display: flex;
        justify-content: center;
    }

    .left-components {
        padding-right: 30%;
    }

    .circle {
        display: block;
        background: lightblue;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
</style>