<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
	<div id="todoListPage" class="bg-half">
		<nav>
			<h1><a href="#">ONLINE TODO LIST</a></h1>
			<ul>
				<li class="todo_sm">王小明的代辦</li>
				<li>
					<RouterLink to="/">登出</RouterLink>
				</li>
			</ul>
		</nav>
		<div class="conatiner todoListPage vhContainer">
			<div class="todoList_Content">
				<div class="inputBox">
					<input type="text" placeholder="請輸入待辦事項" />
					<a href="#">
						<!-- TODO https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css -->
						<i class="fa fa-plus"></i>
					</a>
				</div>
				<div class="todoList_list">
					<ul class="todoList_tab">
						<li><a href="#" class="active">全部</a></li>
						<li><a href="#">待完成</a></li>
						<li><a href="#">已完成</a></li>
					</ul>
					<div class="todoList_items">
						<ul class="todoList_item">
							<li>
								<label class="todoList_label">
									<input class="todoList_input" type="checkbox" value="true" />
									<span>把冰箱發霉的檸檬拿去丟</span>
								</label>
								<a href="#">
									<i class="fa fa-times"></i>
								</a>
							</li>
							<li>
								<label class="todoList_label">
									<input class="todoList_input" type="checkbox" value="true" />
									<span>打電話叫媽媽匯款給我</span>
								</label>
								<a href="#">
									<i class="fa fa-times"></i>
								</a>
							</li>
							<li>
								<label class="todoList_label">
									<input class="todoList_input" type="checkbox" value="true" />
									<span>整理電腦資料夾</span>
								</label>
								<a href="#">
									<i class="fa fa-times"></i>
								</a>
							</li>
							<li>
								<label class="todoList_label">
									<input class="todoList_input" type="checkbox" value="true" />
									<span>繳電費水費瓦斯費</span>
								</label>
								<a href="#">
									<i class="fa fa-times"></i>
								</a>
							</li>
							<li>
								<label class="todoList_label">
									<input class="todoList_input" type="checkbox" value="true" />
									<span>約vicky禮拜三泡溫泉</span>
								</label>
								<a href="#">
									<i class="fa fa-times"></i>
								</a>
							</li>
							<li>
								<label class="todoList_label">
									<input class="todoList_input" type="checkbox" value="true" />
									<span>約ada禮拜四吃晚餐</span>
								</label>
								<a href="#">
									<i class="fa fa-times"></i>
								</a>
							</li>
						</ul>
						<div class="todoList_statistics">
							<p>5 個已完成項目</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.todoListPage {
	padding: 16px 32px;

	@media (max-width: 576px) {
		background-image: linear-gradient(175deg, #ffd370 100%, #fff 0%);
	}
}

.todoList_Content {
	width: 500px;
	margin: 0 auto;

	@media (max-width: 576px) {
		width: 100%;
	}
}

.inputBox {
	width: 100%;
	display: flex;
	position: relative;
	margin-bottom: 16px;
	box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);

	input {
		background: #fff;
		border: none;
		border-radius: 10px;
		position: relative;
		width: 100%;
		height: 47px;
		font-size: 1rem;
		padding-left: 16px;
	}

	a {
		display: block;
		width: 40px;
		height: 39px;
		position: absolute;
		background: #333333;
		color: white;
		font-size: 20px;
		text-decoration: none;
		text-align: center;
		border-radius: 10px;
		top: 4px;
		right: 4px;
		padding: 10px;
	}
}

.todoList_list {
	background: #fff;
	border-radius: 10px;
	box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);

	.todoList_tab {
		display: flex;
		justify-content: space-evenly;

		li {
			width: 100%;
		}

		a {
			display: block;
			color: #9f9a91;
			text-decoration: none;
			line-height: 20px;
			font-weight: bold;
			text-align: center;
			padding: 16px;
			border-bottom: 2px solid #efefef;
		}

		.active {
			color: #333333;
			border-bottom: 2px solid #333333;
		}
	}

	.todoList_items {
		padding-top: 23px;
		padding-left: 24px;
		padding-right: 17px;
		padding-bottom: 32px;

		.todoList_item {
			margin-bottom: 8px;
		}

		.todoList_label {
			width: 100%;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #e5e5e5;
			padding-bottom: 15px;
			color: #333333;
			line-height: 20.27px;
		}

		.todoList_input {
			width: 20px;
			height: 20px;
			border: 1px solid #9f9a91;
			border-radius: 5px;
			margin-right: 16px;

			&:checked ~ span {
				color: #9f9a91;
				text-decoration: line-through;
				transition: all 0.4s ease-in-out;
			}
		}

		li {
			display: flex;
			align-items: center;
			margin-bottom: 17px;

			a {
				margin-left: 17px;
				display: block;
				font-size: 14px;
				color: #333333;
				opacity: 0;
			}

			&:hover a {
				opacity: 1;
			}
		}
	}

	.todoList_statistics {
		display: flex;
		justify-content: space-between;

		p {
			color: #333333;
			font-size: 0.875rem;
		}

		a {
			color: #9f9a91;
			font-size: 0.875rem;
			text-decoration: none;
		}
	}
}
</style>
