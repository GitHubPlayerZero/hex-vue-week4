<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

import { api, useCookie } from '@/assets/js';
const testCookie = useCookie('cookie_test');
const testCookie2 = useCookie('cookie_test2');

function addEmptyCookie() {
	testCookie.setup();
}

function modifyValue() {
	testCookie.setValue('abcdefg');
	testCookie.setup();
}

function modifyDate() {
	const expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + 1);
	expirationDate.setHours(1);
	expirationDate.setMinutes(0);
	expirationDate.setSeconds(0);

	testCookie.setExpires(expirationDate);
	testCookie.setup();
}

function isExist() {
	console.log(testCookie.isExist());
}

function getValue() {
	const value = testCookie.getValue();
	console.log(`cookie value ==>`, value, `, typeof ==>`, typeof value);
	console.log(`value === undefined? `, value === undefined);
	console.log(`value.length ==>`, value.length);
}

function remove() {
	testCookie.remove();
}

function showSettingsContent() {
	console.log(testCookie.getSettingsContent());
}

function clearSettings() {
	testCookie.clearSettings();
}

function addCookie2() {
	testCookie2.setValue('12345');
	testCookie2.setup();
}
function isExist2() {
	console.log(testCookie2.isExist());
}
function getValue2() {
	console.log(`testCookie2 value ==>`, testCookie2.getValue());
}

function testReg() {
	const name = 'cookie_test2';
	const reg4Search = new RegExp(`(?:^|;\\s*)${name}\\s*\\=`);
	const reg4Value = new RegExp(`(?:(?:^|.*;)\\s*${name}\\s*\\=\\s*([^;]*).*$)|^.*$`);
	console.log(`reg4Search ==>`, reg4Search);
	console.log(`reg4Value ==>`, reg4Value);

	const str = document.cookie;
	console.log(`document.cookie ==>`, str);

	// const pattern = /cookie_test/;
	// const reg = new RegExp("cookie_test2");
	// console.log(reg);

	// console.log(`is exist? `, pattern.test(str));
	// console.log(`is exist2? `, reg.test(str));
	console.log(`is exist3 (reg4Search)? `, reg4Search.test(str));
	console.log(`is exist3 (reg4Value)? `, reg4Value.test(str));

	// console.log(`get value1 ==>`, str.replace(pattern, '$1'));
	// console.log(`get value2 ==>`, str.replace(reg, '$1'));
	console.log(`get value3 (reg4Search) ==>`, str.replace(reg4Search, '$1'));
	console.log(`get value3 (reg4Value) ==>`, str.replace(reg4Value, '$1'));
}

function showRouteRouter() {
	console.log('route ==>', route);
	console.log(``);
	console.log('router ==>', router);
	console.log(``);

	console.log(`router.getRoutes() ==>`, router.getRoutes());
}

import { auth } from '@/assets/js';
import { loginToken } from '@/assets/js';
function testLogin() {
	// const token = 'abcdefg';
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiItTzVHYkZhWVZtWDdONzlhUWNMSyIsIm5pY2tuYW1lIjoiZXhhbXBsZSIsImlhdCI6MTcyNDcyNDg3NSwiZXhwIjoxNzI0OTg0MDc1fQ.7RHGAFgpfsfmWdAMtrh_O8CEasYmGEsAPNLOuJIHz';
	auth.login(token);
}
function showToken() {
	const token = loginToken.get();
	console.log('token ==>', token);
	console.log(`typeof token ==>`, typeof token, `, token.length ==>`, token.length);
	console.log(`token === undefined? `, token === undefined);
	console.log(`token === null? `, token === null);
}
function hasToken() {
	console.log('has token ?', loginToken.isExist());
}
function removeToken() {
	loginToken.remove();
}

function checkAuth() {
	console.log(`1111111111111`);
	(async function () {
		const token = loginToken.get();
		console.log(`[check] token ==>`, token);

		let result = {
			status: false,
		};

		if (token) {
			// await api.getCheckout(token)
			// 	.then((res) => {
			// 		console.log(`[check] res ==>`, res);
			// 		result = true;
			// 	})
			// 	.catch((error) => {
			// 		console.error(`[check] error ==>`, error);
			// 	})
			// 	.finally(() => {
			// 		console.log(`[check] finally...`);
			// 	});

			try {
				const res = await api.getCheckout(token);
				console.log(`[check] res ==>`, res);
				result = { ...res.data };
			} catch (error) {
				console.error(`[check] error ==>`, error);
			}
		}

		console.log(`[check] end. result ==>`, result);
		if (!result.status) {
			console.log(`登出導頁！`);
		}
	})();
	console.log(`222222222`);
}
</script>

<template>
	<div class="container">
		<h1>測試</h1>

		<h2>Cookie</h2>
		<div class="box">
			<button type="button" @click="addEmptyCookie">新增空的 cookie</button>&nbsp;&nbsp;
			<button type="button" @click="modifyValue">modifyValue</button>&nbsp;&nbsp;
			<button type="button" @click="modifyDate">modifyDate</button>&nbsp;&nbsp;
			<button type="button" @click="isExist">isExist</button>&nbsp;&nbsp;
			<button type="button" @click="getValue">getValue</button>&nbsp;&nbsp;
			<button type="button" @click="remove">remove</button>&nbsp;&nbsp;
			<button type="button" @click="showSettingsContent">顯示 setting 內容</button
			>&nbsp;&nbsp;
			<button type="button" @click="clearSettings">clearSettings</button>&nbsp;&nbsp;

			<br /><br />

			<button type="button" @click="addCookie2">新增 cookie2</button>&nbsp;&nbsp;
			<button type="button" @click="isExist2">isExist2</button>&nbsp;&nbsp;
			<button type="button" @click="getValue2">getValue2</button>&nbsp;&nbsp;

			<br /><br />
			<button type="button" @click="testReg">testReg</button>&nbsp;&nbsp;
		</div>

		<hr />

		<h2>rout、router</h2>
		<div class="box">
			<button type="button" @click="showRouteRouter">顯示 route、router 資訊</button
			>&nbsp;&nbsp;
		</div>

		<hr />

		<h2>auth</h2>
		<div class="box">
			<button type="button" @click="testReg">testReg</button>&nbsp;&nbsp;
			<button type="button" @click="testLogin">test login</button>&nbsp;&nbsp;
			<button type="button" @click="showToken">show Token</button>&nbsp;&nbsp;
			<button type="button" @click="hasToken">has Token ?</button>&nbsp;&nbsp;
			<button type="button" @click="removeToken">remove Token</button>&nbsp;&nbsp;
			<button type="button" @click="checkAuth">check auth</button>&nbsp;&nbsp;
		</div>
	</div>
</template>

<style lang="scss" scoped>
h1 {
	font-size: 40px;
	margin-bottom: 24px;
}

h2 {
	font-size: 32px;
	margin-bottom: 20px;
}

hr {
	margin: 36px 0;
	border: 1px dashed green;
}

button {
	font-size: 20px;
}

.container {
	padding: 20px;
}

.box {
	border: 1px dashed orange;
	padding: 15px;
}
</style>
