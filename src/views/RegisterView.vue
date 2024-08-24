<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="bg-yellow h-100 d-flex">
		<div class="conatiner registerPage">
			<div class="side">
				<RouterLink to="/">
					<img
						class="logoImg"
						src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
						alt="Online todo list"
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
					<h2 class="formControls_txt">註冊帳號</h2>
					<label class="formControls_label" for="email">Email</label>
					<input
						class="formControls_input"
						type="text"
						id="email"
						name="email"
						placeholder="請輸入 email"
						required
					/>
					<label class="formControls_label" for="name">您的暱稱</label>
					<input
						class="formControls_input"
						type="text"
						name="name"
						id="name"
						placeholder="請輸入您的暱稱"
					/>
					<label class="formControls_label" for="pwd">密碼</label>
					<input
						class="formControls_input"
						type="password"
						name="pwd"
						id="pwd"
						placeholder="請輸入密碼"
						required
					/>
					<label class="formControls_label" for="repeatPwd">再次輸入密碼</label>
					<input
						class="formControls_input"
						type="password"
						name="repeatPwd"
						id="repeatPwd"
						placeholder="請再次輸入密碼"
						required
					/>
					<RouterLink to="/todo" class="formControls_btnSubmit">註冊帳號</RouterLink>
					<RouterLink to="/todo" class="formControls_btnLink">登入</RouterLink>
				</form>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.registerPage {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 800px;

	@media (max-width: 576px) {
		width: 100%;
		flex-direction: column;
		margin: 48px auto 0 auto;
		padding: 48px 31px;
	}
}
</style>
