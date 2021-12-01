import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router';


const routes = [
  {
    path: '/',
    name: "Home",
    component: () => import('/src/pages/Home.vue'),
  },
  {
    path: '/users',
    name: "Users",
    component: () => import('/src/pages/UserList.vue'),
  },
  {
    path: '/users/:name',
    name: "User",
    component: () => import('/src/pages/User.vue'),
  }
]

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  });
};