<script>
export default {

  data() {
    return {
      showLoginAndRegister:false,
      response: "",
    }
  },
  methods: {
    async ping() {

      try {
        await fetch("https://balandrau.salle.url.edu/i3/ping", {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }).then(res => {
          this.showLoginAndRegister = true;
        });
      } catch (error) {
        this.response = "No connection with API";
        this.showLoginAndRegister = false;
      }
    }
  },

}
</script>

<template>
  <div style="display: flex; flex-direction: column; " @keyup.enter="ping">
    <div v-if="showLoginAndRegister">
      <router-link :to="{ name: 'Log' }" >log</router-link>
    </div>
    <p v-else>{{ response }}</p>
  </div>

</template>

<style scoped>

</style>