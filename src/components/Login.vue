<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { api, auth, useMyLoading, useMySwal } from '@/assets/js';


// 準備 Loading 物件
const myLoading = useMyLoading();

// 準備訊息物件
const mySwal = useMySwal();

// 資料 - 登入
// const loginData = ref({
// 	email: 'aaa3@gmail.com',
// 	password: 'sdf4kslk3',
// });
const loginData = ref({
	email: '',
	password: '',
});


// 登入
function signin()
{
	const loader = myLoading.open();
	
	api.postSignIn(loginData.value)
		.then((res) => {
			auth.login(res.data.token);
		})
		.catch(async (error) => {
			console.error(`[login] error ==>`, error);
			await mySwal.alertError(api.parseError(error));
		})
		.finally(() => {
			loader.close();
		});
}

</script>


<template>
	<form class="formControls" @submit.prevent="signin">
		
		<h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
		
		<label class="formControls_label" for="email">Email</label>
		<input
			v-model="loginData.email"
			class="formControls_input"
			type="email" id="email" name="email"
			placeholder="請輸入 email"
			required
		/>
		<span>此欄位不可留空</span>
		
		<label class="formControls_label" for="pwd">密碼</label>
		<input
			v-model="loginData.password"
			class="formControls_input"
			type="password" name="pwd" id="pwd"
			placeholder="請輸入密碼"
			required
		/>

		<button type="submit" class="formControls_btnSubmit">登入</button>
		<RouterLink :to="{ name: 'register' }" class="formControls_btnLink">註冊帳號</RouterLink>
	</form>
</template>
