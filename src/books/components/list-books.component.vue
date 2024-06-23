<script>
import {BooksApiService} from "../../admin-books/services/books-api.service.js";
import {Book} from "../../admin-books/model/book.entity.js";
import BookView from "./book-view.component.vue";

export default {
  name: "list-books",
  components: {BookView},
  data(){
    return{
      books:[],
      bookService:null
    }
  },
  created() {
    this.bookService = new BooksApiService();
    this.bookService.getAll().then((response)=>{
      let books = response.data;
      this.books = books.map((book)=>Book.toDisplayableBook(book));
      console.log(this.books);
    })
  },
  methods: {
    handleViewMore(book){
      this.$router.push({name:'bookDetail',params: {bookId: book._id}});
    }
  }
}
</script>

<template>
<div class="container-cards">
  <div v-for="book in books" :key="book._id">
    <book-view :book="book" @viewMore="handleViewMore" />
  </div>
</div>
</template>

<style scoped>

</style>