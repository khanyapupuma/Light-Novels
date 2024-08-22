<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <Footer />
</template>
<script>
import NavBar from "./components/NavBar.vue";
import  Footer from  "./components/Footer.vue";
import ReachUsView from "./views/ReachUsView.vue";
import ProductsView from "./views/ProductsView.vue";
import AdminView from "./views/AdminView.vue";

export default {
  components: {
    NavBar,
    Footer,
    ReachUsView,
    ProductsView,
    AdminView
  },
};
</script>
<style src="@/assets/css/style.css"></style>
