<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>


<template>
    <Header title="Available Games"></Header>
    <br />
    <div class="components">
        <div class="left-components">
            <table>
                <tr>
                    <th>ID</th>
                    <th>N.Squares</th>
                    <th>HP</th>
                    <th>STATE</th>
                    <th>DATE</th>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>#Lorem</td>
                    <td>#dd/mm/yyyy</td>
                </tr>
            </table>
        </div>
        <div class="right-components">
            <br />
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/playGame"><button class="play-game">JOIN</button></router-link>
            </nav>
        </div>
    </div>
</template>

<style scoped>
    @media only screen and (min-width: 768px) {

        .Games {
            width: 99%;
        }
    .components {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .left-components {
    .Games {
        display: flex;
        justify-content: center;
        align-content: center;
        padding-right: 5%;
    }

    .right-components {
        padding-left: 5%;
        flex-direction: column;
    }

    table, th, td {
        font-family: Inter;
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

    .play-game {
        background-color: #4CAF50;
        color: white;
        font-family: Inter;
    }
        .play-game:hover {
            background-color: #45a049;
        }

        .play-game:active {
            background-color: #3e8e41;
        }
</style>