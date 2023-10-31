import { createRouter, createWebHashHistory } from 'vue-router'
import FirstComponent from '../components/Notes/FirstComponent.vue' //  Cela importe le composant Component  depuis le fichier Component .vue. Ce composant sera utilisé dans le template. 
import EventButton from '../components/Notes/EventButton.vue'
import BindingForm from '../components/Notes/BindingsForm.vue'
import Vfor from '../components/Notes/Vfor.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
