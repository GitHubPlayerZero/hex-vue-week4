import { createRouter, createWebHashHistory } from 'vue-router';
import IndexView from '../views/IndexView.vue';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'index',
			component: IndexView,
			children: [
				{
					path: 'todo',
					name: 'todo',
					component: () => import('@/components/Todo.vue'),
				},
			],
		},
		{
			path: '/auth',
			name: 'auth',
			component: () => import('../views/AuthView.vue'),
			children: [
				{
					path: '',
					name: 'authdefault',
					component: () => import('../components/Login.vue'),
				},
				{
					path: 'login',
					name: 'login',
					component: () => import('../components/Login.vue'),
				},
				{
					path: 'register',
					name: 'register',
					component: () => import('../components/Register.vue'),
				},
			]
		},
	],
});

export default router;
