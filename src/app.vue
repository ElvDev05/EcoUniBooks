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
      <router-link to="/users">
        <pv-button label="Users" ></pv-button>
      </router-link>
      <router-link to="/sellers">
        <pv-button label="Sellers" ></pv-button>
      </router-link>

    </template>
  </pv-toolbar>

  <router-view/>


</template>
<style scoped>
</style>