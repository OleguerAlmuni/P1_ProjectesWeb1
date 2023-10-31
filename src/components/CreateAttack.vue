<script setup>
    import { ref } from 'vue'
</script>

<template>
    <div class="container">
        <div class="left-container">
            <h2>Create</h2>
            <div class="backpack">
                <div class="spacing">
                    <button type="button" class="circle">1</button>
                    <h2>My attacks</h2>
                    <button type="button" class="circle">1</button>
                </div>
                <div class="spacing">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <br />
                <div class="spacing">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <br />
                <div class="spacing">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div>
            <h2>Create for: </h2>
        </div>
        <div class="right-container">
            <label for="Name"></label>
            <input type="text" id="Name" name="Name" placeholder="Attack Name">
            <h2>Num Cells Affected: </h2>
            <h2>Power expected: </h2>
            <div id="table-container"></div>

            <button type="button" class="click-button">Move Player</button>
            <button type="button" class="click-button">Change Direction</button>
            <button type="button" class="click-button">Select Cells</button>

        </div>
    </div>
</template>



<script>
    export default {
        mounted() {
            const tableExists = document.querySelector('#table-container table.custom-table');
            if (!tableExists) {
                this.createTable(10, 10); // Call createTable method with desired parameters only if the table is not created
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
                        cell.textContent = `X`;
                        cell.style.border = '1px solid black'; // Border for each cell
                        cell.width = '40px'; /* Set a fixed width for the cells */
                        cell.height =  '40px'; /* Set a fixed height for the cells */
                        row.appendChild(cell);
                    }

                    table.appendChild(row);
                }

                tableContainer.appendChild(table);
            }
        }
    };
</script>


<style scoped>

    .container {
        display: flex;
        justify-content:space-around;
    }

    .left-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
    }

    .right-content {
        padding: 20px;
    }

    .spacing {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }


    .circle {
        background: lightblue;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    .backpack {
        width: 382px;
        overflow: hidden;
        margin: 20 0 0 450px;
        padding: 80px;
        background: #23463f;
        border-radius: 15px;
    }


    .backpack h2 {
        display: flex;
        justify-content: center;
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