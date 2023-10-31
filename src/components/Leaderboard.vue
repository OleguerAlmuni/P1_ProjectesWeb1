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

<script>
    export default {
        mounted() {
            const tableExists = document.querySelector('#table-container table.custom-table');
            if (!tableExists) {
                this.createTable(14, 4); // Call createTable method with desired parameters only if the table is not created
            }

        },
        methods: {
            createTable(n, m) {
                const tableContainer = document.getElementById('table-container');
                const table = document.createElement('table');
                table.classList.add('custom-table');
                

                for (let i = 0; i < n; i++) {
                    const row = document.createElement('tr');

                    for (let j = 0; j < m; j++) {
                        const cell = document.createElement('td');
                        cell.textContent = `LoremIpsum`;
                        cell.style.border = '1px solid black'; // Border for each cell
                        cell.width = '40px'; /* Set a fixed width for the cells */
                        cell.height = '40px'; /* Set a fixed height for the cells */
                        row.appendChild(cell);
                    }

                    table.appendChild(row);
                }

                tableContainer.appendChild(table);
            }
        }
    };
</script>