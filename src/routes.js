import TasksDashboard from './components/tasks/TaskDashboard.vue'
import SingleTask from './components/tasks/SingleTask.vue'
import TaskDetail from './components/tasks/TaskDetail.vue'
import HomePage from './components/HomePage.vue'

export const routes = [
    {path: '/project', component: TasksDashboard, name: 'project'},
    {path: '/', component: HomePage},
    {path: '/task/:id',component: TaskDetail, name: 'task-details'},
    {path: '*', redirect: '/tasks-dashboard'}
]