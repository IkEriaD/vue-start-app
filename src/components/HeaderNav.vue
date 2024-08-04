<template>
    <div class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/add">Add Restaurant</router-link>
            <!-- <router-link to="/update">Update Restaurant</router-link> -->
            <a @click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name: "HeaderNav",
    methods: {
        logout()
        {
            localStorage.clear();
            this.$router.push({name: 'LogIn'})
        }
    }
}
</script>

<style>
.nav { 
    background-color: #333;
    overflow: hidden;
}

.nav a {
    padding: 10px;
   margin-left: 30px; 
   font-size: 20px;
   text-decoration: none;
   color: #ffffff;
}

.nav a:hover {
    background: #ddd;
    color: #333;
}

</style>