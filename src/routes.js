import TasksDashboard from './components/tasks/TaskDashboard.vue'
import SingleTask from './components/tasks/SingleTask.vue'
import TaskDetail from './components/tasks/TaskDetail.vue'
import HomePage from './components/HomePage.vue'
import AddTask from './components/tasks/AddTask.vue'

export const routes = [
    {path: '/project', component: TasksDashboard, name: 'project'},
    {path: '/add-task', component: AddTask, name: 'add-task'},
    {path: '/home', component: HomePage},
    {path: '/task',component: TaskDetail, name: 'task-details'},
    {path: '*', redirect: '/home'}
]