import TasksDashboard from './components/tasks/TaskDashboard.vue'
import SingleTask from './components/tasks/SingleTask.vue'
import TaskDetails from './components/tasks/TaskDetails.vue'
import Form from './components/tasks/Form.vue'


export const routes = [
    {path: '/tasks-dashboard', component: TasksDashboard, children: [
        {path: '/task',component: TaskDetails},
        {path:'/form', component: Form,},
    ]},
    {path:'/form', component: Form,},
    {path: '*', redirect: '/tasks-dashboard'}
]