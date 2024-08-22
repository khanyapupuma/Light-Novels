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
    user: null,
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
  },
  actions: {
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
    // Modules if any
  }
})
