<script>
  import Header from '../components/Header.vue'
  export default {
    components: {Header},
    data() {
      return {
        attack_ID: this.$route.query.attack,
        response: "",
        price: 0,
        showPanel: false,
        attack_SW: "",
      }
    },

    mounted() {
      if (this.equipedAttacks.length == 3) {
        this.showPanel = true;
      }
      else {
        this.showPanel = false;
      }
    },

    methods: {
      goBack() {
        this.$router.push("/attacks")
      },

      switchWith(attack) {
        this.attack_SW = attack;
      },

      equipItem() {
        fetch("https://balandrau.salle.url.edu/i3/players/attacks/"+ this.attack_ID, {
          method: 'POST',
          headers: {
            'Bearer': this.$root.token,
            'Content-Type': 'application/json'
          },
        }).then((response) => {
          if (response.ok) {
            this.goBack();
          }
          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
          alert("You have 3 attacks already equiped");
        }).catch((error) => {
          this.response = "No connection with API";
        });
      },
      disequipItem() {
        fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + this.attack_ID, {
          method: 'DELETE',
          headers: {
            'Bearer': this.$root.token,
            'Content-Type': 'application/json'
          },
        }).then((response) => {
          if (response.ok) {
            this.goBack();
          }

          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
        }).catch((error) => {
          this.response = "No connection with API";
        });
      },

      sellItem() {
        const sell = { price: this.price};
        fetch("https://balandrau.salle.url.edu/i3/shop/attacks/" + this.attack_ID + "/sell", {
          method: 'POST',
          headers: {
            'Bearer': this.$root.token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sell)
        }).then((response) => {
          if (response.ok) {
            this.goBack();
          }

          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
        }).catch((error) => {
          this.response = "No connection with API";
        });
      },

      switchAttack() {
        fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + this.attack_ID + "/" + this.attack_SW, {
          method: 'PATCH',
          headers: {
            'Bearer': this.$root.token,
            'Content-Type': 'application/json'
          },
        }).then((response) => {
          if (response.ok) {
            this.goBack();
          }
          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
          switchAttacks();
        }).catch((error) => {
          this.response = "No connection with API";
        });
      }
    }
  }
</script>

<template>
  <Header></Header>

    <main>
      <button @click="equipItem">Equip</button>
      <button @click="disequipItem">Unequip</button>
      <label for="price">Enter a number between 0 and 10000</label>
      <input type="number" id="price" name="price" min="0" max="10000" v-model="price">
      <input type="submit" v-on:click.prevent="sellItem()" value="Sell">
    </main>
</template>

<style>

</style>