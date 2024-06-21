<script>
import BooksManagement from "../../admin-books/pages/books-management.component.vue";

export default {
  name: "sellers-page",
  components: {BooksManagement},
  methods: {
    navigateTo(route) {
      this.$router.push({ path: `/sellers/${route}` });
    }
  }
}
</script>

<template>
  <div class="w-full principal-container">
    <section class="links-section">
      <pv-button class="btn-link" link @click="navigateTo('books-management')" >Books </pv-button>
      <pv-button class="btn-link" link @click="navigateTo('orders-management')" >Orders </pv-button>
    </section>


    <!-- This will render the child components -->
    <router-view></router-view>
  </div>

</template>

<style scoped>
.links-section{
  max-width:1400px;
  margin: 0 auto;
  margin-top:15px;
  display:flex;
  gap:15px;
}

.btn-link {
  padding-left: 0;
  padding-right: 0;
  font-size: 20px;
  height:40px;
  background: none;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  transition: color 0.3s, border-color 0.3s;
}

.btn-link::after {
  content: "";
  position: absolute;
  bottom: -3px; /* Adjust as needed */
  left: 0;
  right: 0;
  height: 2px;
  background-color: #007bff;
  transition: transform 0.3s;
  transform: scaleX(0);
  transform-origin: bottom right;
}

.btn-link:hover::after,
.btn-link:focus::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.btn-link:hover,
.btn-link:focus {
  color: #0056b3;
  outline: none;
}
</style>