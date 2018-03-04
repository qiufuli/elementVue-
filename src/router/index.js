import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
      	{
      		path:'',
      		component:DashBoard
      	},
      	{
      		path:'/DashBoard',
      		component:DashBoard
      	}
      ]
    }
  ]
})
