<script>
import CreateAndEditComponent from "../../shared/components/create-and-edit.component.vue";
import CreateAndEdit from "../../shared/components/create-and-edit.component.vue";
export default {
  name: "books-create-and-edit",
  components:{CreateAndEdit, CreateAndEditComponent},
  props:{
    item:null,
    visible:Boolean,
    statuses:Array
  },
  data(){
    return{
      submitted:false
    }
  },
  methods:{
    getSeverity(status) {
      switch (status) {
        case 'Published':
          return 'success';
        case 'Unpublished':
          return 'info';
        default:
          return null;
      }
    },
    canceledEventHandler() {
      this.$emit('canceled');
    },
    savedEventHandler() {
      console.log(this.item);
      this.submitted = true;
      if (this.item.titulo) {
        this.$emit('saved', this.item);
      }
    }
  }
}
</script>

<template>
  <create-and-edit :entity="item" :visible="visible" entityName="Book"
                   @canceled="canceledEventHandler" @saved="savedEventHandler">
    <template #content>
      <div class="p-fluid">

        <pv-float-label>
          <label for="title">Title</label>
          <pv-input-text id="title" v-model="item.titulo" :class="{'p-invalid': submitted && !item.title}"/>
          <small v-if="submitted && !item.title" class="p-invalid">Title is required.</small>
        </pv-float-label>

        <pv-float-label>
          <label for="author">Author</label>
          <pv-input-text id="author" v-model="item.autor" />
        </pv-float-label>

        <pv-float-label>
          <label for="author">Category</label>
          <pv-input-text id="author" v-model="item.categoria" />
        </pv-float-label>

        <pv-float-label>
          <label for="price">Price</label>
          <pv-input-number id="price" v-model="item.precio" showButtons :min="0" >
          </pv-input-number>
        </pv-float-label>
        <pv-input-number v-model="item.stock" showButtons :min="0"></pv-input-number>








      </div>




    </template>





  </create-and-edit>

</template>

<style scoped>

</style>