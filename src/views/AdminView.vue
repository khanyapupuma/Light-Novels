<template>
  <div>
    <h1>Admin Profiles</h1>
    <div class="profiles">
      <div class="profile">
        <h2>User Admin</h2>
        <img src="https://khanyapupuma.github.io/all-images/all-images/Images/users.png" alt="">
        <br>
        <button @click="$router.push({ name: 'UserAdmin' })">Go to User Admin</button>
      </div>
      <div class="profile">
        <h2>Products Admin</h2>
        <img src="https://khanyapupuma.github.io/all-images/all-images/Images/books.png" alt="" >
        <br>
        <button @click="$router.push({ name: 'ProductsAdmin' })">Go to Products Admin</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminProfiles'
}
</script>

<style scoped>
.profiles {
  display: flex;
  justify-content: space-around;
  text-shadow: 2px 2px 4px white;
  margin-top: 20px;
}

.profile {
  border: 2px solid #a8005c;
  padding: 20px;
  width: 40%;
  text-align: center;
  margin-top: 20px;
}
.profile:hover{
  background-color: #dd0f80;
}
img{
  border: solid 8px purple;
  border-radius: 150px;
  margin-top: 20px;
}
img:hover{
  transform: scale(1.2);
  border-color: rgb(255, 12, 255);
}
button {
  margin-top: 40px;
  height: 40px;
  width: 200px;
  padding: 10x 20px;
  background-color: purple;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(100, 1, 100);
  color: #e3dddd;
}
h1{
  margin-top: 40px;
}
</style>