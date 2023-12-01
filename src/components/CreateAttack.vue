<script>
    export default {
        data() {
            return {
                "attack_ID": "",
                "positions": "",
                "img": "",
            }
        },
        methods: {
            createAttack() {
                const attack = { attack_ID: this.attack_ID, positions: this.positions, img: this.img };
                fetch("http://balandrau.salle.url.edu/shop/attacks"), {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(attack)

                }).then((response) => response.json())
                    .then((res) => {
                        if (res.error == undefined) {
                            this.response = "Token: " + res.token;
                        } else {
                            this.response = res.error.message;
                        }

                    }).catch(error => {
                        this.response = "Lost API connection :(";
                    });
            },

        }
    }
</script>

<template>
    <Header title="CreateAttack"></Header>
    <br />
    <section class="container">
        <section class="left-container center">
            <h2>Create</h2>
            <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="fileToUpload" id="fileToUpload">
                <input type="submit" value="Subir imagen" name="submit">
            </form>
            <button type="button" class="click-button">Create for: 000,000</button>

            <p>{{ response }}</p>
        </section>
        <section class="right-container">
            <Table></Table>
        </section>
    </section>
</template>


<style scoped>

    .container {
        font-family: Inter;
        display: flex;
        justify-content: space-around;
    }

    .left-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .right-content {
        padding: 20px;
    }

    .spacing {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .center {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .circle {
        background: lightblue;
        border-radius: 50%;
        width: 70px;
        height: 70px;
    }

    .click-button {
        font-family: Inter;
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

    @media only screen and (min-width: 768px) {

        .container {
            width: 100%;
        }
    }
</style>