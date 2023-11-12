<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header title="Sell Attack"></Header>
    <div class="container">
        <div class="left-container center">
            <h2>Sell</h2>
            <Backpack></Backpack>
            <button type="button" class="click-button">Sell for: 000,000</button>
        </div>
        <div class="right-container">
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
    </div>
</template>


<style scoped>

    .container {
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