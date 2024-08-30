<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { api, auth } from '@/assets/js';

// 再次輸入密碼
const repeatPwd = ref('123456');
const refRepeatPwd = ref(null);

// 註冊資料
const registerData = ref({
	email: 'aaa1@gmail.com',
	nickname: 'ababab',
	password: '123456',
});

// 檢核資料
function checkData(dataValue) {
	if (dataValue.password !== repeatPwd.value) {
		alert('密碼不一致，請重新輸入！');
		refRepeatPwd.value.focus();
		return false;
	}

	return true;
}

// 註冊
function register() {
	const { value: dataValue } = registerData;

	// 檢核資料，若有錯誤則停止執行
	if (!checkData(dataValue)) {
		return;
	}

	// 執行註冊
	api.postSignUp(dataValue)
		.then((res) => {
			alert('註冊成功，將自動為您轉換到待辦事項～');
			return api.postSignIn(dataValue); // 執行登入
		})
		.then((res) => {
			auth.login(res.data.token);
		})
		.catch((error) => {
			console.error(`[register] error ==>`, error);
			alert(api.parseError(error));
		})
		.finally(() => {});
}
</script>

<template>
	<form class="formControls" @submit.prevent="register">
		<h2 class="formControls_txt">註冊帳號</h2>
		<label class="formControls_label" for="email">Email</label>
		<input
			v-model="registerData.email"
			class="formControls_input"
			type="email"
			id="email"
			name="email"
			placeholder="請輸入 email"
			required
		/>
		<label class="formControls_label" for="name">您的暱稱</label>
		<input
			v-model="registerData.nickname"
			class="formControls_input"
			type="text"
			name="name"
			id="name"
			placeholder="請輸入您的暱稱"
			required
		/>
		<label class="formControls_label" for="pwd">密碼</label>
		<input
			v-model="registerData.password"
			class="formControls_input"
			type="password"
			name="pwd"
			id="pwd"
			placeholder="請輸入密碼"
			required
		/>
		<label class="formControls_label" for="repeatPwd">再次輸入密碼</label>
		<input
			v-model="repeatPwd"
			ref="refRepeatPwd"
			class="formControls_input"
			type="password"
			name="repeatPwd"
			id="repeatPwd"
			placeholder="請再次輸入密碼"
			required
		/>

		<button type="submit" class="formControls_btnSubmit">註冊帳號</button>
		<RouterLink :to="{ name: 'login' }" class="formControls_btnLink">登入</RouterLink>
	</form>
</template>
