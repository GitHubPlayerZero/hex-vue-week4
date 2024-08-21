import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: () => import('../views/LoginView.vue'),
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('../views/RegisterView.vue'),
		},
		{
			path: '/todo',
			name: 'todo',
			component: () => import('../views/TodoView.vue'),
		},
	],
});

export default router;
