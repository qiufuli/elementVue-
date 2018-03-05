import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import EditorPage from '@/components/page/EditorPage';
import MarkdownPage from '@/components/page/MarkdownPage';
import TodoList from '@/components/page/TodoListPage';
import BasicCharts from '@/components/page/BasicCharts';
import FormInput from '@/components/page/FormInput';
import FormLayouts from '@/components/page/FormLayouts';
import BasicTables from '@/components/page/BasicTables';
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
      	},
      	{
      		path:'/EditorPage',
      		component:EditorPage
      	},
      	{
      		path:'/MarkdownPage',
      		component:MarkdownPage
      	},
      	{
          path:'/TodoList',
          component:TodoList
       },
       {
       	path:'/BasicCharts',
       	component:BasicCharts
       },
       {
       	path:'/FormInput',
       	component:FormInput
       },
      	{
      		path:'/FormLayouts',
      		component:FormLayouts
      	},
      	{
      		path:'/BasicTables',
      		component:BasicTables
      	}
      ]
    }
  ]
})
