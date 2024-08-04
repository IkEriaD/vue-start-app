<template>
    <div class="homepage">
    <HeaderNav />
    <h3>Hello User, Welcome to Update Resturant Page</h3>
    </div>

    <form class="AddPage">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <button type="button" @click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import axios from 'axios';
export default {
    name: "UpDate",
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
     async updateRestaurant()
     {
        console.log(this.restaurant);
        console.log(this.restaurant);
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if(result.status==200) 
            {
                this.$router.push({name: 'HomePage'});
            }
            // console.log("result", result);
     }   
    },

    // For redirecting to home page only
    async mounted()
    {
      let user = localStorage.getItem('user-info');
      if(!user)
      {
        this.$router.push({name: 'SignUp'})
      }
    //   For restaurant page 
      const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
    //   console.log(this.$route.params.id);
    console.log(result.data);
    this.restaurant = result.data
    }
};

</script>