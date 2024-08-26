import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '@/views/TaskList.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue'; 
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'TaskList',
    component: TaskList,
    meta: { requiresAuth: true } // Protegge la rotta TaskList
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage 
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Protezione delle rotte
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = store.getters['auth/isAuthenticated'];

  if (requiresAuth && !isAuthenticated) {
    // Se la rotta richiede autenticazione e l'utente non è autenticato, reindirizza a /login
    next('/login');
  } else {
    // Altrimenti, continua
    next();
  }
});

export default router;