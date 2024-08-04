<template>
    <div class="homepage">
    <HeaderNav />
    <h3>Hello {{name }}, Welcome to homepage</h3>
    <table border="2">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="/update/+item.id">Update</router-link>
                <button @click="deleteRestaurant(item.id)">Delete</button>
            </td>
            
        </tr>
    </table>
    </div>
</template>

<script>
import HeaderNav from './HeaderNav.vue'
import axios from 'axios';   
export default {
    name: "HomePage",
    data() {
        return {
            name: '',
            restaurant: [],
        }
    },
    components: {
        HeaderNav
    },
    methods: {
     async deleteRestaurant(id)
     {
        let result = await axios.delete("http://localhost:3000/restaurant/"+id);
        console.log(result);
        if (result.status==200)
        {
            this.loadData() 
        }
     },
     async loadData() 
     {
        let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name;
      if(!user)
      {
        this.$router.push({name: 'SignUp'})
      }
      let result =await axios.get("http://localhost:3000/restaurant");
      console.log(result);
      this.restaurant = result.data; 
     }  
    },

    async mounted() 
    {
        this.loadData();
    }

    // For redirecting to home page only [it was there before moved to loadData for deleting]
    // async mounted()
    // {
    //   let user = localStorage.getItem('user-info');
    //   this.name = JSON.parse(user).name;
    //   if(!user)
    //   {
    //     this.$router.push({name: 'SignUp'})
    //   }
    //   let result =await axios.get("http://localhost:3000/restaurant");
    //   console.log(result);
    //   this.restaurant = result.data;
    // }
};

</script>

<style>
td {
    border: 1px solid black;
    width: 10rem;
    height: 2.5rem;
}

</style>