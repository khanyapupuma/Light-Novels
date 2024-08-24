<template>
    <div class="container">
      <h2 class="display-4">Products Management</h2>
      <button>Add Products</button>
      <table class="table-primary table-bordered" id="table" :style="{backgroundColor:'#86226A',width:'1200px',borderColor:'#000000',borderWidth:'40px',borderStyle:'solid'}">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td><img :src="product.prodUrl" alt="" width="80px"></td>
            <td>{{ product.prodName }}</td>
            <td>R{{ product.amount }}</td>
            <td>
              <button @click="editProduct(product)" class="btn " :style="{backgroundColor:'#000000',color:'#ffffff'}">Edit</button>
              <button @click="deleteProduct(product.prodID)" class="btn " :style="{backgroundColor:'#000000',color:'#ffffff'}">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Edit Product Modal -->
      <div v-if="showModal" class="modal fade show" style="display: block;" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Product</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateProduct">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" v-model="currentProduct.name" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="price" class="form-label">Price</label>
                  <input type="number" v-model="currentProduct.price" class="form-control" id="price" required>
                </div>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const products = ref([]);
  const showModal = ref(false);
  const currentProduct = ref({});
  
  // Fetch products from the API
  onMounted(() => {
    store.dispatch('fetchProducts').then(() => {
      products.value = store.state.products;
    });
  });
  
  // Open the edit modal and populate the form with the selected product's data
  const editProduct = (product) => {
    currentProduct.value = { ...product };
    showModal.value = true;
  };
  
  // Close the edit modal
  const closeModal = () => {
    showModal.value = false;
  };
  
  // Update the product via API call
  const updateProduct = () => {
    store.dispatch('updateProduct', currentProduct.value).then(() => {
      closeModal();
      store.dispatch('fetchProducts').then(() => {
        products.value = store.state.products;
      });
    });
  };
  
  // Delete a product via API call
  const deleteProduct = (prodID) => {
    if (confirm("Are you sure you want to delete this product?")) {
      store.dispatch('deleteProduct', prodID)
        store.dispatch('fetchProducts')
          products.value = store.state.products;
       
    }
  };
   
  </script>
  
  <style scoped>
 tbody{
    background-color: purple;
    color: white;
    
  }
  #btn1{
  padding-left: 20px;
  margin-right: 5px;
  }
  </style>
  