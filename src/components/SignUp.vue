<template>
    <div class="box">
        <img src="../assets/logo.png" alt="" class="logo"> 
        <h3>Sign Up</h3>
        <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click="signUp">Sign Up</button>

        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async signUp() 
        {
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });

            console.log(result);
            if(result.status==201)
            {
                // alert("You have signed up now");
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name: 'HomePage'})
            }
        }
    },
    // For redirecting to home page only
    mounted()
    {
      let user = localStorage.getItem('user-info');
      if(user)
      {
        this.$router.push({name: 'HomePage'})
      }  
    }
};
</script>


