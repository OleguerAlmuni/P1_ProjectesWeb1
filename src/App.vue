<script>
    export default {
      data() {
        return {
          player_ID: "",
          token: ""
        }
      },
      mounted() {
        if (localStorage.getItem('player_ID') != null && localStorage.getItem('token') != null) {
          this.player_ID = localStorage.getItem('player_ID');
          this.token = localStorage.getItem('token');
          this.$router.push('/home');
        }
      }
    }
</script>

<template>
    
    <router-view></router-view>

</template>


