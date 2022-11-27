import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home-view.vue';
import DashboardView from '@/views/dashboard-view.vue';
import WorkoutView from '@/views/workout/workout-view.vue';
import ExerciseList from '@/views/exercise/exercise-list.vue';
import ToDo from '@/views/to-do.vue';

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
            component: WorkoutView
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
