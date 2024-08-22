<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Product Details</h2>
      </div>
      <div class="row justify-content-center" v-if="product">
        <Card class="card">
          <template #cardHeader>
            <img :src="product.prodUrl" loading="lazy" class="img-fluid card-img" :alt="product.prodName">
          </template>
          <template #cardBody>
            <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
            <p class="lead">{{ product.prodDescription }}</p>
            <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
            <button>Add to Favourites</button>
          </template>
        </Card>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Card from '@/components/Card.vue';
  import Spinner from '@/components/Spinner.vue';
  
  // Access the store and the current route
  const store = useStore();
  const route = useRoute();
  
  // Get the product from the store based on the route parameter `id`
  const product = computed(() => store.getters.singleProduct);
  
  // Fetch the product when the component is mounted
  onMounted(() => {
    store.dispatch('fetchProduct', route.params.id);
  });
  </script>
  
  <style scoped>
  .card {
    background-color: transparent;
    color: white;
    border: solid purple 2px;
  }
  .card-img {
    border-radius: 6px;
    border: solid purple 4px;
  }
  h5 {
    color: purple;
  }
  button {
    width: fit-content;
    height: 30px;
    margin: 10px;
    border-radius: 6px;
    background-color: purple;
    color: rgb(0, 0, 0);
  }
  button:hover {
    background-color: blueviolet;
    color: black;
  }
  </style>
  