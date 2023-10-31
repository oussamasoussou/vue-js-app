import { createRouter,  createWebHistory } from 'vue-router';
import FirstComponent from '../components/Notes/FirstComponent.vue';
import EventButton from '../components/Notes/EventButton.vue';
import BindingForm from '../components/Notes/BindingsForm.vue';
import Vfor from '../components/Notes/Vfor.vue';
import UserList from '../views/users.vue'; 



const routes = [
  {
    path: '/first-component',
    name: 'firstComponent',
    component: FirstComponent
  },
  {
    path: '/event-button',
    name: 'eventButton',
    component: EventButton
  },
  {
    path: '/binding-form',
    name: 'bindding-form',
    component: BindingForm
  },
  {
    path: '/v-for',
    name: 'v-for',
    component: Vfor
  },
  {
    path: '/users',
    name: 'user',
    component: UserList 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
