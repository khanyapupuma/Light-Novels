<template>
  <div class="container">
    <h2 class="display-2">Featured Products</h2>
    <div class="row justify-content-center">
      <div v-if="currentProduct" class="col-md-4">
        <Card class="card">
          <template #cardHeader>
            <img
              :src="currentProduct.prodUrl"
              loading="lazy"
              class="img-fluid card-img"
              :alt="currentProduct.prodName"
            />
          </template>
          <template #cardBody>
            <h5 class="card-title fw-bold">{{ currentProduct.prodName }}</h5>
            <p class="lead">Category: {{ currentProduct.Category }}</p>
            <button>
              <router-link to="/products">Go to Store</router-link>
            </button>
          </template>
        </Card>
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
    <p>
      Our bookstore e-commerce platform specializes in offering a wide range of light novels,
      catering to fans of this popular genre.<br />Whether you're looking for the latest releases,
      classic titles, or rare finds, our curated selection provides something for every reader.<br> With
      user-friendly navigation, detailed product descriptions, and a seamless purchasing experience,
      our store is designed to bring the joy of light novels to your doorstep. <br> Dive into captivating
      stories and explore new worlds with our carefully chosen collection.
    </p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import Card from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";

const store = useStore();
const products = ref([]);
const currentIndex = ref(0);

// Fetch products when component is mounted
onMounted(() => {
  store.dispatch("fetchProducts").then(() => {
    products.value = store.state.products;
  });

  // Set up an interval to change the current product every 5 seconds
  const intervalId = setInterval(() => {
    if (products.value.length > 0) {
      currentIndex.value = (currentIndex.value + 1) % products.value.length;
    }
  }, 5000);

  // Clean up the interval on component unmount
  onUnmounted(() => {
    clearInterval(intervalId);
  });
});

// Computed property to get the current product based on the index
const currentProduct = computed(() => {
  return products.value[currentIndex.value];
});
</script>

<style scoped>
.container {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://i.pinimg.com/736x/ea/8a/7f/ea8a7f68cd81bd58cc9c42e0694db2ba.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
}
.card {
  background-color: transparent;
  color: white;
  border: solid purple 2px;
  height: 370px;
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
