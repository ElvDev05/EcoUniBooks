<script>
import {Book} from "../../admin-books/model/book.entity.js";
import {BooksApiService} from "../../admin-books/services/books-api.service.js";
import ListReviews from "../../reviews/components/list-reviews.component.vue";
import MakeReview from "../../reviews/components/make-review.component.vue";
import {OrdersApiService} from "../../admin-orders/services/orders-api.service.js";
import {Order} from "../../admin-orders/model/order.entity.js";

export default {
  name: "book-detail",
  components: { MakeReview, ListReviews},
  data(){
    return {
      books:[],
      book:{},
      bookService:null,
      order:null,
      orderService:null,
      qty:null,
      isVisible:false,
      reviewComponentKey: 0
    }
  },
  created(){
    this.bookService = new BooksApiService();
    this.orderService = new OrdersApiService();
    this.order = new Order();
    console.log(this.$route.params.bookId);
    this.bookService.getById(this.$route.params.bookId).then((response)=>{

      this.book = response.data;
    })
  },
  methods:{
    handleReviewCreated() {
      this.reviewComponentKey += 1;
    },
    createOrder(){
      this.order.cliente_id = '6678b385b20852f8b5e0b6c8';
      this.order.fecha_pedido = new Date();
      this.order.estado = 'En proceso';
      this.order.items = this.book.id;
      this.order.total = this.book.precio * this.qty;

      if(this.order.direccion_envio && this.qty){
        this.orderService.create(this.order);
      }
      this.isVisible=false;
    },
    generateOrder(){
      this.isVisible=true;
    }
  }

}
</script>

<template>
<div class="content-container">
  <div class="details-container">
    <section class="image-section">
      <div class="container-image">
        <img class="img-book" src="https://th.bing.com/th/id/OIP.NFU6Gp9gB-Tn1ONrEoIcpQHaJy?w=202&h=267&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
      </div>
      <pv-button class="btn-buy" label="Buy" @click="generateOrder"></pv-button>
    </section>


    <section class="details-section">
      <div style="display:flex; gap:5px">
        <p class="subtitle">Title:</p>
        <p>{{this.book.titulo}}</p>
      </div>

      <div style="display:flex; gap:5px">
        <p class="subtitle">Author:</p>
        <p>{{this.book.autor}}</p>
      </div>
      <div style="display:flex; gap:5px">
        <p class="subtitle">Price:</p>
        <p>{{this.book.precio}}</p>
      </div>
      <div style="display:flex; gap:5px">
        <p class="subtitle">Category:</p>
        <p>{{this.book.categoria}}</p>
      </div>
      <div style="display:flex; gap:5px">
        <p class="subtitle">Condition:</p>
        <p>{{this.book.condicion}}</p>
      </div>
      <div style="display:flex; gap:5px">
        <p class="subtitle">Type:</p>
        <p>{{this.book.formato}}</p>
      </div>
      <div>
        <p class="subtitle">Description:</p>
        <p>{{this.book.descripcion}}</p>
      </div>
    </section>
  </div>

  <div class="reviews-container">

    <section class="create-review">
      <make-review @reviewCreated="this.handleReviewCreated">
      </make-review>

    </section>
    <section class="list-reviews">
      <list-reviews :key="reviewComponentKey"></list-reviews>
    </section>

    <pv-dialog v-model:visible="isVisible" :style="{ width: '25rem' }">
      <div class="container-dialog">
        <div>
          <p>Quantity</p>
          <pv-input-number v-model="this.qty" showButtons :min="0" :max="100"></pv-input-number>
        </div>
        <div>
          <p>Direction</p>
          <pv-input-text v-model="this.order.direccion_envio"></pv-input-text>
        </div>
        <pv-button class="btn-dialog" label="Confirm" @click="createOrder"></pv-button>


      </div>

  </pv-dialog>

  </div>



</div>

</template>

<style scoped>
.container-dialog{
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  height:300px;
  gap:10px;
}
.btn-dialog{
  margin-top:10px;
}
.content-container{
  max-width:1500px;
  margin: 0 auto;
  display: flex;
  padding-top:30px;
  flex-direction: column;
}
.details-container{
  display:flex;
  gap:55px;
  align-items:center;
  justify-content:space-between;
}

.details-section{
  border:1px solid black;
  padding:15px;
  border-radius:15px;
  width:1000px;
}
.image-section{
  height: 500px;
  width:700px;
  display:flex;
  flex-direction:column;;
  gap:10px;
  padding:10px;
  justify-content:center;
  align-items:center;
}
.container-image{
  height:400px;
  width: 400px;
}
.img-book{
  height: 100%;
  width: 100%;
}
.btn-buy{
  height:50px;
  width: 400px;
}
.subtitle{
  font-weight:bold;
}
.reviews-container{
  width:100%;
  display:flex;
  margin-top: 20px;
  gap:55px;
  height:auto;
  justify-content:space-between;
}
.create-review{
  width:700px;

}
.list-reviews{
  width:1000px;
  height: auto;
}

</style>