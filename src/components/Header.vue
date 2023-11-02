<script>
    export default {
        props: {
            title: String,
        }
    }
</script>

<template>
    <div class="head">
        <div class="start">
            <button @click="$router.back()" class="click-button">Back</button>
            <h2>{{title}}</h2>
        </div>
        <div class="end">
            <div class="space-between">
                <div class="click-button">CoinIcon</div>
            </div>
            <div class="space-between">
                <h2>000,000</h2>
            </div>
            <div class="space-between">
                <div class="click-button">BackpackIcon</div>
            </div>
            <router-link to="/">
                <button class="click-button">Home</button>
            </router-link>
        </div>
    </div>
    <br />
</template>

<style scoped>


    .head {
        display: flex;
        justify-content: space-between;
    }

    .space-between {
        display:flex;
        padding-right: 20px;
        padding-left: 20px;
    }

    .start {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding-left: 30px;
    }

        .start h2 {
            padding-left: 50px;
        }

    .end {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 30px;

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

</style> 