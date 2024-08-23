<template>
    <div class="container">
      <h2 class="display-4">Users Management</h2>
      <button >Register</button>
      <button >Log In</button>
      <table class="table-primary table-bordered" id="table" :style="{backgroundColor:'#86226A',width:'1200px',borderColor:'#000000',borderWidth:'40px',borderStyle:'solid'}">
        <thead class="thead-lg">
          <tr>
            <!-- <th>ID</th> -->
            <th>Profile</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
             <th>Age</th> 
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <!-- <td>{{ user.userID }}</td> -->
            <td><img :src="user.userProfile" alt="" width="80px"></td>
            <td>{{ user.firstName }} {{ user.lastName }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.userAge }}</td>
            <td>
              <button @click="editUser(user.userID)" class="btn " :style="{backgroundColor:'#000000',color:'#ffffff'}">Edit</button>
              <button @click="deleteUser(user.userID)" class="btn " id="btn1" :style="{backgroundColor:'#000000',color:'#ffffff'}">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Edit User Modal -->
      <div v-if="showModal" class="modal fade show" style="display: block;" tabindex="-1" role="dialog">
        <div  class="modal-dialog" id="modal" role="document">
          <div class="modal-content" :style="{backgroundColor:'#ffffff',color:'#6226A'}">
            <div class="modal-header">
              <h5 class="modal-title">Edit User</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body"  >
              <form @submit.prevent="updateUser">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" v-model="currentUser.name" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" v-model="currentUser.email" class="form-control" id="email" required>
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
//   export  default {
//     data() {
//         return {
//             userID:""
//   }
// },
// methods:{
//     deleteUser(){
//         this.$store.dispatch('deleteUser',this.userID)
//     }
// }
  
 
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const users = ref([]);
  const showModal = ref(false);
  const currentUser = ref({});
  
  // Fetch users
  onMounted(() => {
    store.dispatch('fetchUsers').then(() => {
      users.value = store.state.users;
    });
  });
  
  const editUser = (user) => {
    currentUser.value = { ...user };
    showModal.value = true;
  };
  
  // Close the edit modal
  const closeModal = () => {
    showModal.value = false;
  };
  
  // Update the user
  const updateUser = () => {
    store.dispatch('updateUser', currentUser.value).then(() => {
      closeModal();
      store.dispatch('fetchUsers').then(() => {
        users.value = store.state.users;
      });
    });
  };
  
  const deleteUser = async (userID) => {
    if (confirm("Are you sure you want to delete this user?")) {
      await store.dispatch('deleteUser', userID);
      await store.dispatch('fetchUsers');
      users.value = store.state.users;
    }
  };
  </script>
  
  <style scoped>
  tbody{
    background-color: purple;
    color: white;
    
  }
button{
    border-radius: 10px;
    width: 120px;
  color: rgb(255, 255, 255);
  background-color: purple;
  margin-right: 5px;
  }
  /* #modal{
    border: 10px;
    border-style: dashed;
    border-color:black ;
  } */
  </style>
  