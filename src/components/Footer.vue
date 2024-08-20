<template>
  <footer class="container-fluid">
    <div class="row">
        <p class="lead">Light Novels &copy;
          <span> {{cYear}}</span>
        </p>
   </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
data(){
return{
    cYear: new Date().getUTCFullYear()

}
}

}
</script>

<style scoped>
footer{
  color: #CBBDBD ;
  background-color: #480842;
  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: 700;
  font-style: italic;
  text-shadow:  2px 2px 4px white;
}
</style>