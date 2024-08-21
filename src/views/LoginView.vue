<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<div id="loginPage" class="bg-yellow">
		<div class="conatiner loginPage vhContainer">
			<div class="side">
				<RouterLink to="/">
					<img
						class="logoImg"
						src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
						alt=""
					/>
				</RouterLink>
				<img
					class="d-m-n"
					src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
					alt="workImg"
				/>
			</div>
			<div>
				<form class="formControls" action="index.html">
					<h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
					<label class="formControls_label" for="email">Email</label>
					<input
						class="formControls_input"
						type="text"
						id="email"
						name="email"
						placeholder="請輸入 email"
						required
					/>
					<span>此欄位不可留空</span>
					<label class="formControls_label" for="pwd">密碼</label>
					<input
						class="formControls_input"
						type="password"
						name="pwd"
						id="pwd"
						placeholder="請輸入密碼"
						required
					/>
					<RouterLink to="/todo" class="formControls_btnSubmit" type="button"
						>登入</RouterLink
					>
					<RouterLink to="/register" class="formControls_btnLink">註冊帳號</RouterLink>
				</form>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.loginPage {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 800px;

	@media (max-width: 576px) {
		width: 100%;
		flex-direction: column;
		margin: 0 auto;
		padding: 48px 31px;
		justify-content: start;
	}
}
</style>
