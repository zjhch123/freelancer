import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'
import Edit from './views/Edit.vue'
import Message from './views/Message.vue'
import User from './views/User.vue'
import User_Index from './views/User/Index.vue'
import Me from './views/Me.vue'
import Me_Index from './views/Me/Index.vue'
import Me_Profile from './views/Me/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      children: [
        {
          path: '',
          name: 'user_index',
          component: User_Index
        }
      ]
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
      children: [
        {
          path: '',
          name: 'me_index',
          component: Me_Index
        },
        {
          path: 'profile',
          name: 'me_profile',
          component: Me_Profile
        }
      ]
    }
  ]
})
