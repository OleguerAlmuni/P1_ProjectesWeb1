<script setup>
    import { ref } from 'vue'
</script>

<template>
    <body>
        <div class="login">
            <button type="button" class="my-button left_text">BackButton</button>
            <h2 class="center_text">Login in account</h2>
            <label for="Name"></label>
            <input type="text" id="Name" name="Name" placeholder="Email">
            <br><br>
            <label for="Name"></label>
            <input type="text" id="Name" name="Name" placeholder="Password">
            <br><br>
            <button type="button" class="my-button center_text">Login</button>
        </div>
        <button type="button" class="my-button center_text">Create account</button>
    </body>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>