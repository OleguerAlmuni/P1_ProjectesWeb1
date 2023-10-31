<script setup>
    import { ref } from 'vue'
</script>

<template>
    <div>
        <table>
            <tr>
                <th>ID</th>
                <th>N.Squares</th>
                <th>HP</th>
                <th>State</th>
                <th>Date</th>
            </tr>
            <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Lorem</td>
                <td>Ipsum</td>
                <td>Lorem</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    table, th, td {
        border: 1px solid;
        border-collapse: collapse;
    }

    th, td {
        text-align: center;
        padding: 15px;

    }

    div {
        display: flex;
        justify-content: center;
    }
</style>