<script >
export default {
  name: 'app',
  data() {
    return {
      drawer: false,
      isLoggedIn: false,
      items: [
        { label: 'Home', to: '/home'},
        { label: 'Tutorials', to: '/tutorials' },
        { label: 'About', to: '/about'}
      ]
    }
  },
  created() {
    this.isLoggedIn = !!localStorage.getItem('userId');
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    logout() {
      localStorage.removeItem('userId');
      localStorage.removeItem('userRole');
      this.isLoggedIn = false;
      this.userRole = null;
      this.$router.push("/login");
    },
  }
}
</script>

<template>
  <pv-toolbar>


    <template #end>
      <div class="container-btn">
        <router-link to="/users">
          <pv-button label="Users" ></pv-button>
        </router-link>
        <router-link to="/sellers/books-management">
          <pv-button label="Sellers" ></pv-button>
        </router-link>

        <router-link to="/login" v-if="!isLoggedIn">
          <pv-button label="Sign in"></pv-button>
        </router-link>
        <router-link to="/register" v-if="!isLoggedIn">
          <pv-button label="Sign up"></pv-button>
        </router-link>
        <pv-button @click="logout" v-if="isLoggedIn">
          Logout
        </pv-button>
      </div>


    </template>
  </pv-toolbar>

  <router-view/>


</template>
<style scoped>
.container-btn{
  display:flex;
  gap:10px;
}
</style>