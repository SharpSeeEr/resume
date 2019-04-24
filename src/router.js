import Vue from 'vue'
import VueRouter from 'vue-router'
import ResumeBody from './components/ResumeBody'

Vue.use(VueRouter)

const routes = [
  { path: '/:company', component: ResumeBody },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
