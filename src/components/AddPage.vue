<template>
    <div class="homepage">
    <HeaderNav />
    <h3>Hello User, Welcome to Add Resturant Page</h3>
    </div>
    <form class="AddPage">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <button type="button" @click="addRestaurant">Add new Restaurant</button>
    </form>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import axios from 'axios';
export default {
    name: "AddPage",
    components: {
        HeaderNav
    },
    data() {
        return {
           restaurant: {
            name: '',
            address: '',
            contact: ''
           }
        }
    },
    methods: {
        async addRestaurant()
        {
            console.log(this.restaurant);
            const result = axios.post("http://localhost:3000/restaurant",{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if(result.status==201) {
                this.$router.push({name: 'HomePage'});
            }
            console.log("result", result);
        }
    },

    // For redirecting to home page only
    mounted()
    {
      let user = localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({name: 'SignUp'})
      }  
    }
};

</script>


<style>

.AddPage {
    margin-left: 30rem;
}

.AddPage input {
    display: block;
    margin-bottom: 1rem;
    padding: 6px;
    width: 20rem;
    border-radius: 5px;
    border: 1px solid lightblue;
    /* margin-left: 30rem; */
}

</style>