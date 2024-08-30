<script setup>
import { computed, ref } from 'vue';

// TODO TEST
const todoList = ref([
	{
		id: 1,
		task: '把冰箱發霉的檸檬拿去丟',
		status: true,
	},
	{
		id: 2,
		task: '打電話叫媽媽匯款給我',
		status: false,
	},
	{
		id: 3,
		task: '整理電腦資料夾',
		status: false,
	},
	{
		id: 4,
		task: '繳電費水費瓦斯費',
		status: true,
	},
	{
		id: 5,
		task: '約 vicky 禮拜三泡溫泉',
		status: false,
	},
	{
		id: 6,
		task: '約 ada 禮拜四吃晚餐',
		status: false,
	},
]);

// TODO 改成 watch
// 完成項目
const completeTask = computed(() => {
	return todoList.value.filter((elem) => elem.status);
});
// 未完成項目
const uncompletedTask = computed(() => {
	return todoList.value.filter((elem) => !elem.status);
});
</script>

<template>
	<div class="container todoListPage">
		<div class="todoList_Content">
			<div class="inputBox">
				<input type="text" placeholder="請輸入待辦事項" />
				<a href="javascript:void(0)" class="inputBoxAdd">
					<i class="fa-solid fa-plus"></i>
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
						<li v-for="todo in todoList" :key="todo.id">
							<label class="todoList_label">
								<input
									class="todoList_input"
									type="checkbox"
									value="true"
									v-model="todo.status"
								/>
								<span>{{ todo.task }}</span>
							</label>
							<a href="#">
								<i class="fa-solid fa-times"></i>
							</a>
						</li>
					</ul>
					<div class="todoList_statistics">
						<p>{{ completeTask.length }} 個已完成項目</p>
						<p>{{ uncompletedTask.length }} 個未完成項目</p>
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

	.inputBoxAdd {
		display: flex;
		justify-content: center;
		align-items: center;
	}

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
