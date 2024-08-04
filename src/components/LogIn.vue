<template>
     <div class="box">
        <img src="../assets/logo.png" alt="" class="logo"> 
        <h3>Login</h3>
        <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click="login">Login</button>

        <p>
            <router-link to="/signup">Sign Up</router-link>
        </p>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LogIn",
    data() 
    {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login()
        {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&${this.password}`
            )

            // status is from the consol running api status 
            if(result.status==200 && result.data.length>0)
            {
                // alert("You have signed up now");
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name: 'HomePage'})
            }

            console.log(result);
        },
        
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