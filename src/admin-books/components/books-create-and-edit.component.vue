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
      submitted:false,
      dialogSize:'extra-large',
      formatos: ['Digital', 'Physical'],
      condiciones:['New','Used'],
      categories: ['Action','Horror','Mystery','Fantasy','Romance','Sci-Fi']
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
        this.$emit('saved2', this.item);
      }
    }
  }
}
</script>

<template>
  <create-and-edit :entity="item" :visible="visible" entityName="Book"
                   @canceled="canceledEventHandler" @saved="savedEventHandler"
                   :size="this.dialogSize">
    <template #content>
      <div class="container-form">
        <section class="p-fluid section-form">

          <div class="field mt-5 container-field">
            <label for="title">Title</label>
            <pv-float-label>
              <pv-input-text id="title" v-model="item.titulo" :class="{'p-invalid': submitted && !item.title}"/>
              <small v-if="submitted && !item.title" class="p-invalid">Title is required.</small>
            </pv-float-label>
          </div>

          <div class="field mt-5 container-field">
            <label for="author">Author</label>
            <pv-float-label>
              <pv-input-text id="author" v-model="item.autor" />
            </pv-float-label>
          </div>

          <div class="field mt-5 container-field">
            <label for="price">Price</label>
            <pv-float-label>
              <pv-input-number id="price" v-model="item.precio" showButtons :min="0" />
            </pv-float-label>
          </div>

          <div class="field mt-5 container-field">
            <label for="stock">Stock</label>
            <pv-float-label>
              <pv-input-number id="stock" v-model="item.stock" showButtons :min="0" />
            </pv-float-label>
          </div>
          <div class=" field mt-5 container-field  flex justify-center gap-4">
            <pv-select-button v-model="item.formato" :options="formatos" aria-labelledby="basic" />
            <pv-select-button v-model="item.condicion" :options="condiciones" aria-labelledby="basic" />
          </div>

        </section>

        <section class="section-form">
          <div class="field mt-5 container-field">
            <label for="category">Category</label>
            <pv-float-label>
              <pv-dropdown v-model="item.categoria" :options="categories" placeholder="Select Category" class="w-full md:w-56" />

              <!--              <pv-input-text id="category" v-model="item.categoria" />-->
            </pv-float-label>
          </div>
          <div class="field mt-5 container-field">
            <label for="description">Description</label>
            <pv-float-label>
              <pv-textarea v-model="this.item.descripcion" autoResize rows="13" cols="30" />
            </pv-float-label>
          </div>
        </section>
      </div>

    </template>





  </create-and-edit>

</template>

<style scoped>
.container-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem; /* Espacio entre columnas */
  width: 100%;
}

.left-section {
  grid-column: 1;
}

.right-section {
  grid-column: 2;
}

.container-field {
  margin-bottom: 1.5rem;
}
</style>