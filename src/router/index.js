import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: () => import('../views/LoginView.vue'),
			// component: LoginView,
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
