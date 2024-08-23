<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Product Details</h2>
    </div>

    <div class="row mb-3">
      <div class="col-md-4">
        <input 
          type="text" 
          v-model="searchQuery" 
          class="form-control"
          placeholder="Search"
        />
      </div>

      <div class="col-md-2">
        <button class="btn btn-primary" @click="sortByName">Sort by Name</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-primary" @click="sortByPrice">Sort by Price</button>
      </div>
    </div>

    <div class="row">
      <div v-if="filteredProducts.length" class="row">
        <div class="col-md-4" v-for="product in filteredProducts" :key="product.prodID">
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
              <button class="card-btn">
                <router-link :to="{ name: 'ProductDetails', params: { id: product.prodID } }">
                  View more...
                </router-link>
              </button>
            </template>
          </Card>
        </div>
      </div>

      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Card from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";

const store = useStore();

const searchQuery = ref("");
const sortBy = ref(null);

const products = computed(() => store.state.products);

const filteredProducts = computed(() => {
  let filtered = products.value.filter((product) => {
    const name = product.prodName ? product.prodName.toLowerCase() : "";
    const category = product.category ? product.category.toLowerCase() : "";
    const query = searchQuery.value.toLowerCase();

    return name.includes(query) || category.includes(query);
  });

  if (sortBy.value === "name") {
    filtered.sort((a, b) => a.prodName.localeCompare(b.prodName));
  } else if (sortBy.value === "price") {
    filtered.sort((a, b) => a.amount - b.amount);
  }

  return filtered;
});

const sortByName = () => {
  sortBy.value = "name";
};

const sortByPrice = () => {
  sortBy.value = "price";
};

onMounted(() => {
  store.dispatch("fetchProducts");
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
.card-btn 
h5 {
  color: purple;
}
button {
  width: fit-content;
  height: 30px;
  margin: 10px;
  border-radius: 6px;
  background-color: purple;
  color: rgb(255, 255, 255);
}
button:hover {
  background-color: blueviolet;
  color: black;
}
</style>
