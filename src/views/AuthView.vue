<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="bg-yellow h-100 d-flex">
		<div class="container authPage">
			<div class="side">
				<RouterLink :to="{ name: 'index' }">
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
				<RouterView />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.authPage {
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 800px;

	@media (max-width: 576px) {
		width: 100%;
		flex-direction: column;
		margin: 0 auto;
		padding: 48px 31px;
		justify-content: start;
	}
}
</style>
