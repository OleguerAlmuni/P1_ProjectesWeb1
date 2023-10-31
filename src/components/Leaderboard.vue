<script setup>
    import { ref } from 'vue'
    const header = ["Rank", "Name", "Level", "XP"]
    const keys = ["rank", "name", "level", "xp"]

    const data = [{
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000',
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000',
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000',
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000'
    }, {
        rank: "#000",
        name: "#Lorem",
        level: "#Ipsum",
        xp: '#000,000',
    }]
</script>

<template>
    <div>
        <VueTable :headers="header" :data="data" :keys="keys" />
    </div>
</template>