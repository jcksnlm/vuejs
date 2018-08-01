import Vue from 'vue'
// import App from './App.vue'
import Home from './pages/home.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

const Contact = {template: '<p>página contato</p>'}
const NotFound = {template: '<p>Página não encontrada</p>'}

//sem vue-router
// const routes = {
//     '/': Home,
//     '/contato': Contact,
// }
// new Vue({
//     el: '#app',
//     data: {
//         currRoute: window.location.pathname
//     },
//     computed: {
//         showComponent() {
//             return routes[this.currRoute] || NotFound
//         }
//     },
//     render (h) { return h(this.showComponent) }
// })

const routes = [
    {path:'/' , component: Home},
    {path:'/contato', component: Contact},
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')
