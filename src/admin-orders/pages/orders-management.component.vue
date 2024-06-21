<script>
import {Order} from "../model/order.entity.js";
import {OrdersApiService} from "../services/orders-api.service.js";
import DataManager from "../../shared/components/data-manager.component.vue";

export default {
  name: "orders-management.component",
  components: {DataManager},
  data(){
    return{
      title:{singular:'Order', plural: 'Orders'},
      orders:[],
      order:{},
      orderService:null
    }
  },
  methods:{
    findIndexById(id) {
      return this.orders.findIndex((order) => order._id === id);
    },

    notifySuccessfulAction(message) {
      this.$toast.add({severity: "success", summary: "Success", detail: message, life: 3000,});
    },

    onDeleteItemEventHandler(item){
      this.order=item;
      this.deleteOrder();
    },
    deleteOrder(){
      this.orderService.delete(this.order._id)
          .then(()=>{
            this.orders=this.orders.filter((o)=>o._id !==this.order._id);
            this.order={};
            this.notifySuccessfulAction("Order Deleted");
          })
    }
  },
  created(){
    this.orderService=new OrdersApiService();
    this.orderService.getAll().then((response)=>{
      let orders = response.data;
      this.orders = orders.map((order)=>Order.toDisplayableOrder(order));
    })
  }
}
</script>

<template>
<div class="w-full principal-container">

<!--  <section class="table-section">-->
<!--    <data-manager title="title" v-bind:items="orders" v-on:delete-item="onDeleteItemEventHandler">-->

<!--      <template #custom-columns>-->
<!--        <pv-column :sortable="true" field="_id" header="Id" />-->
<!--        <pv-column :sortable="true" field="fecha_pedido" header="Date" />-->

<!--      </template>-->





<!--    </data-manager>-->


<!--  </section>-->


</div>
</template>

<style scoped>

</style>