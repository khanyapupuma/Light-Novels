<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Product Details</h2>
    </div>
    <div class="row">
      <!-- Check if products are loaded -->
      <div v-if="products && products.length" class="row">
        <div class="col-md-4" v-for="product in products" :key="product.prodID">
          <Card class="card">
            <template #cardHeader>
              <img
                :src="product.prodUrl"
                loading="lazy"
                class="img-fluid card-img"
                :alt="product.prodName"
              />
            </template>
            <template #cardBody>
              <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
              <p class="lead">
                <span class="text-success fw-bold">Amount</span>: R{{ product.amount }}
              </p>
              <button>
               <router-link :to="{ name: 'ProductDetails', params: { id: product.prodID } }">
                View more...
               </router-link>
              </button>
            </template>
          </Card>
        </div>
      </div>
      <!-- Loading spinner if products are not loaded yet -->
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Card from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";
// import ProductDetails from './ProductDetails.vue'

const store = useStore();

// Use a computed property to access products from the Vuex store
const products = computed(() => store.state.products);

// Dispatch the action to fetch products when the component is mounted
onMounted(() => {
  store.dispatch("fetchProducts"), store.dispatch("fetchProduct");
});
</script>

<style scoped>
.card {
  background-color: transparent;
  color: White;
  border: solid purple 2px;
  height: 325px;
  margin: 20px;
}
.card-img {
  width: 200px;
  height: 150px;
  object-fit: cover;
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
