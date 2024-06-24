<script>
import {ReviewsApiService} from "../services/reviews-api.service.js";
import {UserApiService} from "../../users/services/user.api.service.js";

export default {
  name: "list-reviews",
  props:{
    item:null
  },
  data(){
    return{
      reviews:null,
      trueReviews:null,
      review:null,
      product:null,
      reviewService:null,
      userService:null

    }
  },
  created() {
    this.productId = this.$route.params.bookId;
    this.reviewService = new ReviewsApiService();
    this.userService = new UserApiService();
    this.fetchReviews();
  },
  watch: {
    '$route.params.bookId': 'fetchReviews', // Re-fetch reviews when the route changes
    key: 'fetchReviews' // Re-fetch reviews when the key changes
  },
  methods:{
    fetchReviews(){

      this.reviewService.getAll().then(response => {
        this.userService.getAll().then(userResponse=>{
          console.log(this.productId);
          this.reviews = response.data.filter(review => review.libro_id === this.productId);
          console.log("las reviews",this.reviews);
          this.trueReviews = this.reviews.map(review=>{
            console.log(userResponse);
            const user = userResponse.data.find((user)=> user._id === review.usuario_id);
            return {
              _id: review._id,
              userName: user ? user.nombre : 'Unknown User',
              calificacion: review.calificacion,
              opinion: review.opinion,
              fecha:review.fecha
            }

          });
          console.log(this.trueReviews);
        });


      }).catch(error => {
        console.error('Error fetching reviews:', error);
      });
    }
  }
}
</script>

<template>
  <section class="reviews">
    <div v-if="trueReviews">
      <div v-for="review in trueReviews" :key="review._id" class="review-container">
        <div style="display:flex;justify-content:space-between">
          <strong>{{ review.userName }}</strong>
          <div class="rating-stars">
            <template v-for="star in parseInt(review.calificacion)">
              <i class="pi pi-star-fill"></i>
            </template>
            <template v-for="star in 5 - parseInt(review.calificacion)">
              <i class="pi pi-star"></i>
            </template>
          </div>
        </div>
        <div class="review-content">
          {{ review.opinion }}
        </div>
      </div>
    </div>
    <div v-if="!trueReviews" class="nothing-container">
    <p style="font-weight:bold;font-size:20px">Este libro aún no tiene reseñas</p>
    </div>
  </section>
</template>

<style scoped>
.reviews {
  width:100%;
}

.review-container {
  border: 1px solid #ccc;
  margin-bottom: 15px;
  padding: 15px;
}

.rating-stars {
  color: #ffd700; /* Color dorado para las estrellas */
}

.review-content {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
}

.nothing-container{
  display: flex;
  justify-content: center;
}
</style>