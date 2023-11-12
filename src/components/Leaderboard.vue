<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>


<template>
    <Header title="Leaderboard"></Header>
    <br />
    <input type="Search" id="Search" name="Search" value="Search">
    <div>
        <table>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Level</th>
                <th>XP</th>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
            <tr>
                <td>#000</td>
                <td>#LoremIpsum</td>
                <td>#00</td>
                <td>#000</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    table, th, td {
        font-family: Inter;
        border: 1px solid;
        border-collapse: collapse;
    }

    th, td {
        text-align: center;
        padding: 15px;
    }

    div {
        display: flex;
        justify-content: center;
    }

    .Search {
        display: flex;
        justify-content: center;
    }
</style>