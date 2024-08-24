import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
import { applyToken } from '@/service/AuthenticatedUser.js'
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()
const apiURL = 'https://light-novels.onrender.com/'


applyToken(cookies.get('LegitUser')?.token)

export default createStore({
  state: {
    users: [],
    products: [],
    user: [],
    product: null,
    error: null,
    isLoading: false 
  },
  getters: {
    allProducts: (state) => state.products,
    allUsers: (state) =>  state.users,
    singleProduct: (state) =>  state.product,  


  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, product) {
      state.product = product
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
  async deleteUser(context, id) {
      try {
      const {data}  =  await axios.delete(`${apiURL}users/delete/${id}`);
      toast.success('User deleted successfully');
      console.log(data);
      
        
        // dispatch('fetchUsers');
      } catch (error) {
        toast.error(`Failed to delete user: ${error.message}`);
      }
      location.reload;
    },
    async  deleteProduct(context, id) {
      try{
      const {data} = await  axios.delete(`${apiURL}/products/delete/${id}`)
      toast.success('Product deleted successfully');
      console.log(data);
      } catch (error) {
        toast.error(`Failed to delete product: ${error.message}`);
      }
      location.reload;
     
    
       
    },
  
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(`${apiURL}products`);
        commit('setProducts', response.data);
      } catch (error) {
        toast.error(`Failed to fetch products: ${error.message}`);
      }
    },
    async updateProduct({ dispatch }, product) {
      try {
        await axios.put(`${apiURL}products/${product.id}`, product);
        toast.success('Product updated successfully');
        dispatch('fetchProducts');
      } catch (error) {
        toast.error(`Failed to update product: ${error.message}`);
      }
    },
    async deleteProduct({ dispatch }, id) {
      try {
        await axios.delete(`${apiURL}products/delete/${id}`);
        toast.success('Product deleted successfully');
        dispatch('fetchProducts');
      } catch (error) {
        toast.error(`Failed to delete product: ${error.message}`);
      }
    },
  
    // Update User
    async updateUser({ dispatch }, user) {
      try {
     const {data} =   await axios.put(`${apiURL}users/${user.id}`, user); 
    //  console.log(data);
        toast.success('User updated successfully');
        dispatch('fetchUsers');
      } catch (error) {
        toast.error(`Failed to update user: ${error.message}`);
      }
      location.reload;
    },
    // Add User
    async addUser(context, userData) {
      try {
        const { data } = await axios.post(`${apiURL}users/register`, userData);
        toast.success('User registered successfully');
        console.log(data);
      } catch (error) {
        if (error.response) {
          toast.error(`Failed to add user: ${error.response.data.message}`);
        } else {
          toast.error(`Failed to add user: ${error.message}`);
        }
      } finally {
        location.reload();
      }
    },
    
    async fetchProduct({ commit }, id) {
      try {
        const { data } = await axios.get(`${apiURL}products/${id}`);
        commit('setProduct', data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    ,
    // Fetch Users from the database
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${apiURL}users`)
        if (data) {
          context.commit('setUsers', data)
        } else {
          router.push({ name: 'login' })
        }
        console.log(data);
        
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    // Fetch Products from the database
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${apiURL}products`)
        if (data) {
          context.commit('setProducts', data)
        } else {
          router.push({ name: 'login' })
        }
        console.log(data);
        
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },

    // Fetch a single product by ID
    async fetchProduct(context, id) {
      try {
        const  data  = await axios.get(`${apiURL}products/${id}`)
        console.log(data)
        if (data) {
          context.commit('setProduct', data.data)
        } else {
          toast.error(`Product not found`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    }
  },
  modules: {
    
  }
})
