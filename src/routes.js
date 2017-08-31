import TasksDashboard from './components/tasks/TaskDashboard.vue'
import SingleTask from './components/tasks/SingleTask.vue'
import TaskDetail from './components/tasks/TaskDetail.vue'

export const routes = [
    {path: '/tasks-dashboard', component: TasksDashboard},
    {path: '/task/:id',component: TaskDetail, name: 'task-details'},
    {path: '*', redirect: '/tasks-dashboard'}
]