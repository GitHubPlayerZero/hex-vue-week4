<script setup>
import { computed, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const nickname = ref('王小明');
const hasAuth = ref(false);

</script>

<template>
	<div class="bg-half h-100">
		<nav>
			<h1>
				<RouterLink :to="{ name: 'index' }">
					<img
						src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
						alt="Online todo list"
					/>
				</RouterLink>
			</h1>
			<ul v-if="hasAuth">
				<li class="todo_sm text-bold">{{ nickname }} 的代辦</li>
				<li>
					<RouterLink :to="{ name: 'login' }">登出</RouterLink>
				</li>
				<!-- <li><a href="#" @click.prevent>登出</a></li> -->
			</ul>
		</nav>

		<RouterView />
		
	</div>
</template>

<style lang="scss" scoped>
nav {
	display: flex;
	justify-content: space-between;
	padding: 24px 32px 0 32px;

	@media (max-width: 576px) {
		margin-bottom: 16px;
	}

	h1 {
		height: 39px;
		width: 243px;
	}

	ul {
		display: flex;
		font-size: 1rem;

		@media (max-width: 576px) {
			li {
				margin-top: 11px;
			}
		}

		a {
			text-decoration: none;
			color: #333333;
			margin-left: 24px;

			@media (max-width: 576px) {
				margin-left: 0;
			}

			&:hover {
				color: #d87355;
			}
		}

		@media (max-width: 576px) {
			.todo_sm {
				display: none;
			}
		}
	}
}
</style>
