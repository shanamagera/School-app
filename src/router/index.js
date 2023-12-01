import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Courses from '../views/CoursesPage.vue'
import NewCourse from '../views/NewCourse.vue'
import UpdateCourse from '../views/UpdateCourse.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/courses',
      name: 'CoursesPage',
      component: Courses
    },
    {
      path:'/newCourse',
      name:'NewCourse',
      component: NewCourse
    },
    {
      path:'/updateCourse',
      name:'updateCourse',
      component: UpdateCourse
    },
    
  ]
})

export default router
