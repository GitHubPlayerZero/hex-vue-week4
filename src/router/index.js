import { createRouter, createWebHashHistory } from 'vue-router';
// import AuthView from '@/views/AuthView.vue';
import TodoView from '../views/TodoView.vue';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'index',
			component: TodoView,
			children: [
				{
					path: '',
					name: 'tododefault',
					// component: () => import('@/components/Todo.vue'),
					component: () => import('@/components/LoadingPage.vue'),
				},
				{
					path: 'todo',
					name: 'todo',
					component: () => import('@/components/Todo.vue'),
				},
			],
		},
		// TODO TEST
		{
			path: '/todobak',
			component: () => import('@/views/TodoViewBak.vue'),
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
		{
			path: '/test',
			component: () => import('@/views/Test.vue'),
		},
	],
});

export default router;
