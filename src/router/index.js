import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import BookOnlinePage from '../pages/BookOnlinePage.vue'
import ShuttlePage from '../pages/ShuttlePage.vue'
import HandicapPage from '../pages/HandicapPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage, meta: { title: 'Home' } },
  { path: '/about-us', name: 'about', component: AboutPage, meta: { title: 'About Us' } },
  { path: '/book-online', name: 'book', component: BookOnlinePage, meta: { title: 'Book Online' } },
  { path: '/94-shuttle', name: 'shuttle', component: ShuttlePage, meta: { title: '94 Shuttle' } },
  { path: '/handicap-services', name: 'handicap', component: HandicapPage, meta: { title: 'Handicap Services' } },
  { path: '/services', name: 'services', component: ServicesPage, meta: { title: 'Services' } },
  { path: '/contact-us', name: 'contact', component: ContactPage, meta: { title: 'Contact Us' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | 94 Cabs Red Deer`
})

export default router
