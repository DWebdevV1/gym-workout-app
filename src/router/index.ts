import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home-view.vue';
import DashboardView from '@/views/dashboard/dashboard-view.vue';
import WorkoutList from '@/views/workout/workout-list.vue';
import ExerciseList from '@/views/exercise/exercise-list.vue';
import ToDo from '@/views/todo/to-do.vue';
import BlacklistView from '../views/blacklist/blacklist-view.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: '/workout',
            name: 'workout',
            component: WorkoutList
        },
        {
            path: '/exercise-list',
            name: 'exerciseList',
            component: ExerciseList
        },
        {
            path: '/to-do',
            name: 'todo',
            component: ToDo
        },
        {
            path: '/blacklist',
            name: 'blacklist',
            component: BlacklistView
        },
        /*    {
              path: '/about',
              name: 'about',
              // route level code-splitting
              // this generates a separate chunk (About.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import('../views/AboutView.vue')
            }*/
    ]
})

export default router