<script setup>
    import { ref } from 'vue'
</script>

<template>
    <body>
        <div class="login">

            <h2>Login in account</h2>
            <label for="Name"></label>
            <input type="text" id="Name" name="Name" placeholder="Email">
            <br><br>
            <label for="Name"></label>
            <input type="text" id="Name" name="Name" placeholder="Password">
            <br><br>
            <div class="flex-component">
                <button onclick="goToMain()" type="button" class="click-button">Login</button>
            </div>
        </div>
        <br>
        <button type="button" class="click-button ">Create account</button>
    </body>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>