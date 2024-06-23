<script >
export default {
  name: 'app',
  data() {
    return {
      drawer: false,
      items: [
        { label: 'Home', to: '/home'},
        { label: 'Tutorials', to: '/tutorials' },
        { label: 'About', to: '/about'}
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    }
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
        <router-link to="/login">
          <pv-button label="Sign in" ></pv-button>
        </router-link>
        <router-link to="/register">
          <pv-button label="Sign up" ></pv-button>
        </router-link>
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