<template>
     <router-view />
</template>

<script>
export default {

    name: 'App',

 data() {
               return{
                   activePage: 0,
                   useDarkNavbar: false,
                   pages: [
                       {
                           link: {text: 'Home', url: 'index.html'},
                           pageTitle: 'Home page',
                           content: 'This is the home content'
                       },
                       {
                           link:  {text: 'About', url: 'about.html'},
                           pageTitle: 'About page',
                           content: 'This is the about content'
                       },
                       {
                           link: {text: 'Contact', url: 'contact.html'},
                           pageTitle: 'Contact page',
                           content: 'This is the contact content'
                       }
                       
                      
                       
                   ],
                   
                   
               };
           },

}
</script>



<style>

body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.homepage {
    text-align: center;
}

.box {
    margin-left: 30rem;
    padding-top: 5rem;
}
.logo {
    width: 3rem;
    margin-left: 8rem;
}

.box h3 {
    margin-left: 7rem; 
}

.register input, .login input {
    display: block;
    margin-bottom: 1rem;
    padding: 6px;
    width: 20rem;
    border-radius: 5px;
    border: 1px solid lightblue;
}

button {
    width: 20rem;
    padding: 5px;
    border: 1px solid lightblue;
    /* color: #ffffff; */
    background: lightblue;
    border-radius: 20px;
    cursor: pointer;
}

p {
    margin-left: 15rem;
    margin-top: 1rem;
}



</style>

