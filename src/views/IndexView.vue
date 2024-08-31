<script setup>

import { ref } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { api, loginToken } from '@/assets/js';

const router = useRouter();

const token = loginToken.get();

// 資料 - 權限
const authData = ref({
	status: false,
	nickname: '',
});


// 檢核權限
async function checkAuth ()
{
	if (token) {
		try {
			const res = await api.getCheckout(token);
			authData.value = { ...res.data };
		}
		catch (error) {
			console.error(`[checkAuth] error ==>`, error);
		}
	}

	if (authData.value.status) {
		router.push({ name: 'todo' });
	}
	else {
		router.push({ name: 'login' });
	}
}
checkAuth();


// 登出
function logout ()
{
	authData.value.status = false;
	
	api.postSignOut(token)
		.then ((res) => {
			loginToken.remove();
			router.push({ name: 'login' });
		})
		.catch ((error) => {
			console.error(`[logout] error ==>`, error);
			alert(api.parseError(error));
		})
}


// 重新載入
function reload () {
	authData.value.status = false;
	checkAuth();
}

</script>


<template>
	<div class="bg-half h-100">
		
		<!-- 主要畫面 -->
		<template v-if="authData.status">
			<nav>
				<h1>
					<a href="#" @click.prevent="reload">
						<img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png" alt="Online todo list" />
					</a>
				</h1>

				<ul v-if="authData.status">
					<li class="todo_sm text-bold">{{ authData.nickname }} 的待辦</li>
					<li><a href="#" @click.prevent="logout">登出</a></li>
				</ul>
			</nav>

			<RouterView />
		</template>

		<!-- waiting 訊息 -->
		<div class="container waiting" v-else>
			<p>身份驗證中，請稍候...</p>
		</div>
		
	</div>
</template>


<style lang="scss" scoped>
.waiting {
	font-size: 24px;
	text-align: center;
	padding-top: 50px;
}

nav {
	display: flex;
	justify-content: space-between;
	padding: 24px 32px 0 32px;
	margin-bottom: 24px;

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
