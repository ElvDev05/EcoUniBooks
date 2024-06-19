<script>
import {BooksApiService} from "../services/books-api.service.js";
import {Book} from "../model/book.entity.js";
import DataManager from "../../shared/components/data-manager.component.vue";
import BooksCreateAndEdit from "../components/books-create-and-edit.component.vue";

export default {
  name: "books-management",
  components: {BooksCreateAndEdit, DataManager},
  data(){
    return{
      title:{singular:'Book', plural: 'Books'},
      books:[],
      book:{},
      selectedBooks:[],
      statuses: [{label: 'Published', value: 'published'}, {label: 'Unpublished', value: 'unpublished'}],
      bookService:null,
      isEdit: false,
      isVisible:false,
      submitted:false
    }
  },
  methods:{
    findIndexById(id) {
      return this.books.findIndex((book) => book.id === id);
    },

    notifySuccessfulAction(message) {
      this.$toast.add({severity: "success", summary: "Success", detail: message, life: 3000,});
    },
    getSeverity(status) {
      switch (status) {
        case 'Published': return 'success';
        case 'Unpublished': return 'info';
        default:  return null;
      }
    },
    onNewItemEventHandler() {
      this.book = {};
      this.submitted = false;
      this.isEdit = false;
      this.isVisible = true;
    },

    onEditItemEventHandler(item) {
      this.book = item;
      this.submitted = false;
      this.isEdit = true;
      this.isVisible = true;
    },

    onDeleteItemEventHandler(item) {
      this.book = item;
      this.deleteBook();
    },

    onDeleteSelectedItemsEventHandler(selectedItems) {
      this.selectedBooks = selectedItems;
      this.deleteSelectedBooks();
    },


    onCanceledEventHandler(){
      this.isVisible=false;
      this.submitted=false;
      this.isEdit=false;
    },
    onSavedEventHandler(item){
      this.submitted=true;
      if(this.book.titulo.trim()){
        if(item.id){
          this.updateBook();
        }else{
          this.createBook();
        }
      }
      this.isVisible=false;
      this.isEdit=false;
    },

    createBook(){
      this.book._id=0;
      this.book=Book.fromDisplayableBook(this.book);
      this.bookService.create(this.book)
          .then((response) =>{
            this.book = Book.toDisplayableBook(response.data);
            this.books.push(this.book);
            this.notifySuccessfulAction("Book Created");
          })
    },

    updateBook(){
      this.book = Book.fromDisplayableBook(this.book);
      this.bookService.update(this.book._id,this.book)
          .then((response)=>{
            this.books[this.findIndexById(response.data.id)]= Book.toDisplayableBook(response.data);
            this.notifySuccessfulAction("Book Updated");
          });
    },
    deleteBook(){
      this.bookService.delete(this.book._id)
          .then(()=>{
            this.books = this.books.filter((b)=>b._id !== this.book._id);
            this.book={};
            this.notifySuccessfulAction("Book Deleted");
          })
    },
    deleteSelectedBooks() {
      this.selectedBooks.forEach((book) => {
        this.bookService.delete(book._id).then(() => {
          this.books = this.books.filter((t) => t._id !== this.book._id);
        });
      });
      this.notifySuccessfulAction("Books Deleted");
    }
  }
  ,
  created(){
    this.bookService = new BooksApiService();
    this.bookService.getAll().then((response)=>{
      let books = response.data;
      this.books = books.map((book)=>Book.toDisplayableBook(book));
    })
  }
}
</script>

<template>
<div class="w-full principal-container">
  <section class="table-section">
    <data-manager :title="title" v-bind:items="books"
    v-on:new-item="onNewItemEventHandler"
    v-on:edit-item="onEditItemEventHandler"
    v-on:delete-item="onDeleteItemEventHandler"
    v-on:delete-selected-items="onDeleteSelectedItemsEventHandler">

      <template #custom-columns>
<!--        <pv-column :sortable="true" field="_id"          header="Id"           style="min-width: 12rem"/>-->
        <pv-column :sortable="true" field="titulo"       header="Title"        />
        <pv-column :sortable="true" field="precio"       header="Price"  />
        <pv-column :sortable="true" field="categoria"    header="Category"  />
        <pv-column :sortable="true" field="fecha_publicacion"        header="Date"  />

        <!--      <pv-column :sortable="true" field="status"      header="Status"       style="min-width: 16rem">-->
        <!--        <template #body="slotProps">-->
        <!--          <pv-tag :severity="getSeverity(slotProps.data.status)" :value="slotProps.data.status"/>-->
        <!--        </template>-->
        <!--      </pv-column>-->
      </template>

    </data-manager>
  </section>

<books-create-and-edit   :statuses="statuses" :item="book" :edit="isEdit" :visible="isVisible"
                       v-on:canceled="onCanceledEventHandler"
                       v-on:saved="onSavedEventHandler($event)"
/>
</div>
</template>

<style scoped>
.table-section{
  max-width:1400px;
  margin: 0 auto;
}
</style>