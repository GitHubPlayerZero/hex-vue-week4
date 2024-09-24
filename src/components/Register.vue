<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { api, auth, useMyLoading, useMySwal } from '@/assets/js';
import Swal from 'sweetalert2';


// 準備 Loading 物件
const myLoading = useMyLoading();

// 準備訊息物件
const mySwal = useMySwal();

// 資料 - 再次輸入密碼
// const repeatPwd = ref('sdf4kslk3');
const repeatPwd = ref('');
const refRepeatPwd = ref(null);

// 資料 - 註冊
// const registerData = ref({
// 	email: 'aaa3@gmail.com',
// 	nickname: 'ababab',
// 	password: 'sdf4kslk3',
// });
const registerData = ref({
	email: '',
	nickname: '',
	password: '',
});


// 檢核資料
async function checkData (dataValue)
{
	// 密碼不一致
	if (dataValue.password !== repeatPwd.value) {
		await mySwal.alertError('密碼不一致，請重新輸入！', {
			didDestroy: () => {
				refRepeatPwd.value.focus();
			}
		});
		return false;
	}

	return true;
}


// 註冊
async function register ()
{
	const loader = myLoading.open();
	
	const { value: dataValue } = registerData;

	// 檢核資料，若有錯誤則停止執行
	if (! await checkData(dataValue)) {
		loader.close();
		return;
	}
	
	
	// 執行註冊
	try {
		await api.postSignUp(dataValue);
	}
	catch (error) {
		console.error(`[register] error ==>`, error);
		await mySwal.alertError(api.parseError(error));
		loader.close();
		return;
	}
	
	
	/* 自動登入 */
	let timerInterval;
	
	Swal.fire({
		allowEscapeKey: false,
		allowOutsideClick: false,
		confirmButtonText: '立即登入',
		showDenyButton: true,
		denyButtonText: "離開",
		position: 'top',
		icon: 'success',
		title: '註冊成功！',
		html: '<span id="countdown">10</span> 秒後將為您自動登入，若不想登入請點擊「離開」。',
		timer: 10000,
		timerProgressBar:true,
		
		didOpen (popup) {
			// 倒數計時
			const elemCountdown = popup.querySelector("#countdown");
			timerInterval = setInterval(() => {
				elemCountdown.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}`;
			}, 1000);
		},
		
		willClose (popup) {
			clearInterval(timerInterval);
		},
	})
		.then(async (result) => {
			
			if (!result.isDenied) {
				// 執行登入
				try {
					const res = await api.postSignIn(dataValue);
					auth.login(res.data.token);
				}
				catch (error) {
					console.error(`[login] error ==>`, error);
					await mySwal.alertError(api.parseError(error));
				}
			}
			
			loader.close();
		});
}

</script>


<template>
	
	<form class="formControls" @submit.prevent="register">
		<h2 class="formControls_txt">註冊帳號</h2>

		<label class="formControls_label" for="email">Email</label>
		<input 
			v-model="registerData.email" 
			class="formControls_input" 
			type="email" id="email" name="email"
			placeholder="請輸入 email" required />

		<label class="formControls_label" for="name">您的暱稱</label>
		<input 
			v-model="registerData.nickname" 
			class="formControls_input" 
			type="text" name="name" id="name"
			placeholder="請輸入您的暱稱" required />

		<label class="formControls_label" for="pwd">密碼</label>
		<input 
			v-model="registerData.password" 
			class="formControls_input" 
			type="password" name="pwd" id="pwd"
			placeholder="請輸入密碼" required />

		<label class="formControls_label" for="repeatPwd">再次輸入密碼</label>
		<input 
			v-model="repeatPwd" ref="refRepeatPwd" 
			class="formControls_input" type="password" 
			name="repeatPwd" id="repeatPwd" 
			placeholder="請再次輸入密碼" required />

		<button type="submit" class="formControls_btnSubmit">註冊帳號</button>
		<RouterLink :to="{ name: 'login' }" class="formControls_btnLink">登入</RouterLink>
	</form>
	
</template>
