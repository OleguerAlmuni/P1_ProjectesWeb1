<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header title="Create Account"></Header>
    <div class="createAccount">
        <h2 class="center_text">Create an account</h2>
        <label for="Name"></label>
        <input type="text" id="Name" name="Name" placeholder="Email">
        <br><br>
        <label for="Name"></label>
        <input type="text" id="Name" name="Name" placeholder="Password">
        <br><br>
            <router-link to="/home">
                <button type="button" class="my-button center_text">Create account</button>
            </router-link>
    </div>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>