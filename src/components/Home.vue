<script setup>
    import { ref } from 'vue'
    import Leaderbord from '../components/Leaderboard.vue'
</script>

<template>
    <div class="home">
        <button type="button" class="playNowButton">PLAY NOW</button>
        <br><br>
        <h2 class="center_text">Ranking players:</h2>
        <ol>
            <li>Player 01</li>
            <li>Player 66</li>
            <li>Player 96</li>
        </ol>
        <nav>
            <router-link to="/leaderBoard">See more...</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>