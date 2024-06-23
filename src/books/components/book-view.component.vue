<script>
import {Book} from "../../admin-books/model/book.entity.js";

export default {
  name: "book-view",
  props: {
    book: Book
  },
  created() {
    if(localStorage.getItem('isLoggedIn') === 'true'){
      localStorage.setItem('isLoggedIn', 'false');
      location.reload();
    }
  },
  methods:{
    viewMore(){
      this.$emit('viewMore', this.book);
    },
    formatDate(date) {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

}
</script>

<template>

  <pv-card class="custom-card">


    <template #title >
      <p class="card-title"> {{ book.titulo }}</p>
    </template>

    <template #content>
      <div class="card-content">
        <div>
          <img :src="book.imagen" alt="Book image">
        </div>

        <div>
          <p>Author</p>
          <p>{{ book.autor }}</p>
        </div>

        <div>
          <p>Condition</p>
          <p>{{ book.condicion }}</p>
        </div>


        <div>
          <p>{{ book.precio }}</p>
        </div>

        <div>
          <p>Format</p>
          <p>{{ book.formato }}</p>
        </div>

      </div>
    </template>
    <template #footer>
      <div class="card-footer">
        <pv-button label="View More" class="w-full" @click="viewMore" />
      </div>
    </template>
  </pv-card>



</template>

<style scoped>

</style>