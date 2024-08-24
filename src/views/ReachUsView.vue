<template>
  <div class="body">
  <h1>Welcome to Our: Contact Page</h1>
  <div class="avatars">
    <h2>Khanya</h2>
  <div class="avatar"><img src="https://khanyapupuma.github.io/all-images/all-images/Images/khanya.jpg" alt=""></div>
  <br>
<h3>Front-End</h3>
<p>
  Call: 073 792 6856
  <br>
  Email: khanyapupuma@gmail.com
  <br>
  <a href="https://www.linkedin.com/in/khanya-pupuma-41a171324/">My LinkedIn</a>
</p>
</div>
  <div class="avatars">
    <h2>Siphokuhle</h2>
  <div class="avatar"><img src="https://khanyapupuma.github.io/all-images/all-images/Images/sipho.jpg" alt=""></div>
  <br>
  <h3>Back-End</h3>
  <p>
    Call: 083 243 2798
    <br>
    Email: siphokuhlenyana@gmail.com
    <br>
  <a href="https://www.linkedin.com/in/siphokuhle-nyana-6a917016a/">My LinkedIn</a>
  </p>
</div>
    <div class="container">
      <h2>Contact Us:</h2>
      <form @submit.prevent="sendEmail">
        <div>
          <input type="text" id="name" v-model="form.name" placeholder="Name:"/>
        </div>
        <div>
          <input type="text" id="surname" v-model="form.surname" placeholder="Surname:"/>
        </div>
        <div>
          <input type="email" id="email" v-model="form.email" placeholder="Email Address:"/>
        </div>
        <div>
          <textarea id="message" v-model="form.message" placeholder="Write to us:" ></textarea>
        </div>
        <div>
          <button type="submit">Send</button>
          <button type="button" @click="clearForm">Clear</button>
        </div>
      </form>
      
    </div>
    </div>
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  
  export default {
    data() {
      return {
        form: {
          name: '',
          surname: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      sendEmail() {
        emailjs.send('service_ajp7c9c', 'template_ezevsqn', this.form, 'nr84-uEp_HOD_rvlC')
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
            console.log('FAILED...', err);
          });
      },
      clearForm() {
        this.form.name = '';
        this.form.surname = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  }
  </script>
  
  <style scoped>

  .container{
    width: 700px;
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: rgba(164, 27, 110, 0.542);
    text-shadow: 2px 2px 4px white;
    padding: 20px;
  }
input{
  height: 40px;
  width: 70%;
  margin-bottom: 10px;
  border-radius: 4px;
}
.avatar {
  display: flex;
  justify-content: space-around;
  text-shadow: 2px 2px 4px white;
  margin-top: 20px;
}
.avatars:hover{
  background-color: #6a073d;
}
.avatars {
  text-shadow: 2px 2px 4px white;
  margin-left: 460px;
  border: 2px solid #a8005c;
  padding: 20px;
  width: 40%;
  text-align: center;
  margin-top: 20px;
}
textarea{
  height: 150px;
  width: 70%;
  border-radius: 4px;
}
button{
  width: 90px;
  height: 30px;
  margin: 10px;
  border-radius: 6px;
  background-color: black;
  color: blueviolet;
}
button:hover{
  background-color: blueviolet;
  color: black;
}
img{
  border: solid 8px purple;
  border-radius: 150px;
  margin-top: 20px;
  width: 150px;
}
img:hover{
  transform: scale(1.2);
  border-color: rgb(255, 12, 255);
}
  </style>