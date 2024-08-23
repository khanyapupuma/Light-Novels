<template>
    <div class="container">
      <h2 class="display-4">Users Management</h2>
      <button @click="addUserModal()">Register</button>
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
              <button @click.prevent="deleteUser(user.userID)" class="btn " id="btn1" :style="{backgroundColor:'#000000',color:'#ffffff'}">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Edit User Modal -->
      <div v-if="showModalEdit" class="modal fade show" style="display: block;" tabindex="-1" role="dialog">
        <div  class="modal-dialog" id="modal" role="document">
          <div class="modal-content" :style="{backgroundColor:'#ffffff',color:'#6226A'}">
            <div class="modal-header">
              <h5 class="modal-title">Edit User</h5>
              <button type="button" class="btn-close" @click="closeModalEdit"></button>
            </div>
            <div class="modal-body"  >
              <form @submit.prevent="updateUser">
                <div class="mb-3">
                  <label for="name" class="form-label">First Name</label>
                  <input type="text" v-model="currentUser.firstName" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Last Name</label>
                  <input type="text" v-model="currentUser.lastName" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Age</label>
                  <input type="number" v-model="currentUser.userAge" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Gender</label>
                  <input type="text" v-model="currentUser.Gender" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" v-model="currentUser.emailAdd" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">User Profile</label>
                  <input type="text" v-model="currentUser.userProfile" class="form-control" id="email" required placeholder="https://address">
                </div>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- addUser -->
      <div v-if="showModalAdd" class="modal fade show" style="display: block;" tabindex="-1" role="dialog">
        <div  class="modal-dialog" id="modal" role="document">
          <div class="modal-content" :style="{backgroundColor:'#ffffff',color:'#6226A'}">
            <div class="modal-header">
              <h5 class="modal-title">Add User</h5>
              <button type="button" class="btn-close" @click="closeModalAdd"></button>
            </div>
            <div class="modal-body"  >
              <form @submit.prevent="addUser">
                <div class="mb-3">
                  <label for="name" class="form-label">First Name</label>
                  <input type="text" v-model="currentUser.firstName" class="form-control" id="name" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Last Name</label>
                  <input type="text" v-model="currentUser.lastName" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Age</label>
                  <input type="number" v-model="currentUser.userAge" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Gender</label>
                  <input type="text" v-model="currentUser.Gender" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">User Role</label>
                  <input type="text" v-model="currentUser.userRole" class="form-control" id="email" required placeholder="user">
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" v-model="currentUser.emailAdd" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Create Password </label>
                  <input type="password" v-model="currentUser.userPass" class="form-control" id="email" required>
                </div><div class="mb-3">
                  <label for="email" class="form-label">User Profile</label>
                  <input type="text" v-model="currentUser.userProfile" class="form-control" id="email" required placeholder="https://address">
                </div>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- User Login -->
      <div v-if="showModalEdit" class="modal fade show" style="display: block;" tabindex="-1" role="dialog">
        <div  class="modal-dialog" id="modal" role="document">
          <div class="modal-content" :style="{backgroundColor:'#ffffff',color:'#6226A'}">
            <div class="modal-header">
              <h5 class="modal-title">User Login</h5>
              <button type="button" class="btn-close" @click="closeModalEdit"></button>
            </div>
            <div class="modal-body"  >
              <form @submit.prevent="updateUser">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" v-model="currentUser.emailAdd" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Enter Password</label>
                  <input type="text" v-model="currentUser.userPass" class="form-control" id="email" required placeholder="Password">
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
  const showModalEdit = ref(false);
  const showModalAdd = ref(false);
  const currentUser = ref({});
  
  // Fetch users
  onMounted(() => {
    store.dispatch('fetchUsers').then(() => {
      users.value = store.state.users;
    });
  });
  
  const editUser = (user) => {
    currentUser.value = { ...user };
    showModalEdit.value = true;
  };
  
  // Close the edit modal
  const closeModalEdit = () => {
    showModalEdit.value = false;
  };

  const addUserModal = (user) => {
    currentUser.value = { ...user };
    showModalAdd.value = true;
  };
  
  // Close the edit modal
  const closeModalAdd = () => {
    showModalAdd.value = false;
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
      store.dispatch('deleteUser', userID);
      store.dispatch('fetchUsers')
      users.value = store.state.users;
    }
  };
  const addUser= async () => {
     
      store.dispatch('addUser');
      store.dispatch('fetchUsers')
      users.value = store.state.users;
    
  };
  
  </script>
  
  <style scoped>
  .modal {
  background-color: #000000;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  margin: 40px auto;
}

.modal-header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.modal-body {
  padding: 20px;
  background-color: #333;

}

.modal-footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-top: 1px solid #ccc;
}
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
  