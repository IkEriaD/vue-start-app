import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import AddPage from './components/AddPage.vue';
import UpDate from './components/UpDate.vue';


const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/signup",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/login",
  },
  {
    name: "AddPage",
    component: AddPage,
    path: "/add",
  },
  {
    name: "UpDate",
    component: UpDate,
    path: "/update/:id",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;