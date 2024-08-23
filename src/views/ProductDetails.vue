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
            <h5 class="card-title fw-bold name">{{ product.prodName }}</h5>
            <p class="lead">{{ product.prodDescription }}</p>
            <p class="lead"> <bold class="genre"> Genre:</bold> {{ product.Category }}</p>
            <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
            <button>Add to Favourites</button>
          </template>
        </Card>
      </div>
      <div v-else>
        <spinner/>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Card from '@/components/Card.vue';
  import Spinner from '@/components/Spinner.vue';
  
  const store = useStore();
  const route = useRoute();
 
  const product = computed(() => store.getters.singleProduct);
  
  onMounted(() => {
    store.dispatch('fetchProduct', route.params.id);
  });
  </script>
  
  <style scoped>
  .card {
    margin: 40px;
    background-color: transparent;
    color: white;
    border: solid purple 2px;
    width: 500px;
  }
  .card-img {
    width: 300px;
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
  .genre{
    color: purple;
    font-size: larger;
    font-weight: bold;
  }

  </style>
  