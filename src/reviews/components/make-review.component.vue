<script>
import {Review} from "../model/review.entity.js";
import {ReviewsApiService} from "../services/reviews-api.service.js";

export default {
  name: "make-review",
  data(){
    return{
      review:null,
      reviewService:null,
      send:false
    }
  },
  created() {
    this.review = {};
    this.reviewService = new ReviewsApiService();
  },
  methods:{
    createReview() {
     this.review.libro_id = this.$route.params.bookId;
     this.review.usuario_id ='6678b38eb20852f8b5e0b6ca';
     this.review.fecha = new Date();
     if(this.review.opinion && this.review.calificacion){
       console.log("Review creada:", this.review);
       this.reviewService.create(this.review).then(() => {
         this.$emit('reviewCreated');
         this.resetComponent();
       });
     }


    },
    setRating(calificacion) {
      this.review.calificacion = calificacion;
    },
    getStarClass(star, rating) {
      return star <= rating ? 'pi pi-star-fill' : 'pi pi-star';
    },
    resetComponent(){
      this.review.calificacion = null;
      this.review.opinion=null;
    }
  }
}
</script>

<template>
  <section class="container-make-review">
    <pv-textarea class="text-area-review" v-model="review.opinion" autoResize rows="5" cols="30" placeholder="Escribe tu opinión aquí..." />

    <div class="rating-stars" style="display: flex;gap:1px">
      <i v-for="star in 5" :key="star" @click="setRating(star)" :class="getStarClass(star, review.calificacion)" class="pi pi-star-fill"></i>
    </div>

    <button @click="createReview" class="btn-make-review">Review</button>
  </section>
</template>

<style scoped>
.container-make-review {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 700px;
}

.rating-stars {
  display: flex;
  margin: 15px 0;
}

.rating-stars .pi {
  font-size: 24px;
  cursor: pointer;
  color: #ffd700;
}
.text-area-review{
  width:100%;

}
.rating-stars .pi.pi-star-o {
  color: #ccc;
}

.btn-make-review {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-make-review:hover {
  background-color: #0056b3;
}
</style>