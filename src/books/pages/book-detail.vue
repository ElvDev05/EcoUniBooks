<script>
import {Book} from "../../admin-books/model/book.entity.js";
import {BooksApiService} from "../../admin-books/services/books-api.service.js";

export default {
  name: "book-detail",
  data(){
    return {
      books:[],
      book:{},
      bookService:null
    }
  },
  created(){
    this.bookService = new BooksApiService();
    console.log(this.$route.params.bookId);
    this.bookService.getById(this.$router.params.bookId).then((response)=>{
      let book = response.data;
      this.book = book.map((book)=> Book.toDisplayableBook(book));
    })
  }
}
</script>

<template>
DETALLE DEL PRODUCTO
</template>

<style scoped>

</style>