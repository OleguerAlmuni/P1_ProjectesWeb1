<script setup>
    import { ref } from 'vue'
</script>

<template>
        <div class="createAccount">
            <h2 class="center_text">Create an account</h2>
            <label for="Name"></label>
            <input type="text" id="Name" name="Name" placeholder="Email">
            <br><br>
            <label for="Name"></label>
            <input type="text" id="Name" name="Name" placeholder="Password">
            <br><br>
            <button type="button" class="my-button center_text">Create account</button>
        </div>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>