<script setup>

import { nextTick, ref, watch } from 'vue';
import { api, loginToken, useMyLoading, useMySwal } from '@/assets/js';


const token = loginToken.get();

// 準備 Loading 物件
const myLoading = useMyLoading();

// 準備訊息物件
const mySwal = useMySwal();

// 資料 - 新增待辦事項
const newTodo = ref('');
const refNewTodo = ref(null);

// 資料 - 待辦事項清單
const todoList = ref([]);

watch(
	todoList, 
	() => {
		completeNum.value = 0;
		uncompletedNum.value = 0;
		
		todoList.value.forEach((elem) => {
			if (elem.status) {
				completeNum.value ++;
			} else {
				uncompletedNum.value ++;
			}
		});
		
		// 渲染完成才對 DOM 元操作
		nextTick(() => {
			elemTabs = document.querySelectorAll(".tab-link");
		});
	}
);


// 資料是否已準備好?
// 用來控制畫面的穩定呈現，避免畫面在有無資料之間閃爍
const isReady = ref(false);

watch(
	isReady, 
	() => {
		// 渲染完成才對 DOM 元操作
		nextTick(() => {
			refNewTodo.value.focus();
		});
	},
	{ once: true }
);


// 取得待辦事項
async function getTodoList()
{
	const loader = myLoading.open();
	
	try {
		const res = await api.getTodos(token);
		todoList.value = res.data.data;
		isReady.value = true;
	}
	catch (error) {
		console.error('[getTodoList] error ==>', error);
		await mySwal.alertError(api.parseError(error));
	}
	
	loader.close();
}


// 新增待辦事項
async function addTodo()
{
	const loader = myLoading.open();
	const content = newTodo.value;
	
	// 檢核
	if (!content) {
		await mySwal.alertError("請先輸入待辦事項！");
		refNewTodo.value.focus();
		loader.close();
		return;
	}
	
	const data = {
		content
	};
	
	// 新增
	try {
		await api.postTodos(token, data);
		newTodo.value = '';
		
		// 重整資料
		await getTodoList();
	}
	catch (error) {
		console.error(`[addTodo] error ==>`, error);
		await mySwal.alertError(api.parseError(error));
	}
	
	refNewTodo.value.focus();
	loader.close();
}


// 刪除待辦事項
async function deleteTodo(id)
{
	const loader = myLoading.open();
	
	try {
		await api.deleteTodos(token, id);
		
		// 重整資料
		await getTodoList();
	}
	catch (error) {
		console.error('[deleteTodo] error ==>', error);
		await mySwal.alertError(api.parseError(error));
	}
	
	if (todoList.value.length <= 0) {
		refNewTodo.value.focus();
	}
	
	loader.close();
}


// 更新待辦事項狀態
async function changeTodoStatus(id)
{
	const loader = myLoading.open();
	
	try {
		await api.patchTodosToggle(token, id);
		
		// 重整資料
		await getTodoList();
	}
	catch (error) {
		console.error('[changeTodoStatus] error ==>', error);
		await mySwal.alertError(api.parseError(error));
	}
	
	loader.close();
}


// 完成 / 未完成 數量
const completeNum = ref(0);
const uncompletedNum = ref(0);

/**
 * 頁籤狀態
 * 全部 - undefined
 * 待完成 - false
 * 已完成 - true
 */
let tabStatus = ref(undefined);

// 元素 - 頁籤們
let elemTabs = [];

// 切換頁籤
function switchTab(event, status)
{
	tabStatus.value = status;
	
	// set active style
	elemTabs.forEach(elem => {
		elem.classList.remove("active");
	});
	event.target.classList.add("active");
}


// initial
getTodoList();

</script>


<template>
	<div class="container todoListPage">
		
		<div class="todoList_Content" v-show="isReady">
			
			<!-- 新增待辦事項 -->
			<form class="inputBox" @submit.prevent="addTodo">
				<input 
					v-model.trim="newTodo" ref="refNewTodo"
					type="text" placeholder="請輸入待辦事項"
				/>
				<a href="#" class="inputBoxAdd" @click.prevent="addTodo">
					<i class="fa-solid fa-plus"></i>
				</a>
			</form>
			
			
			<!-- 待辦事項列表 -->
			<div class="todoList_list" v-if="todoList.length > 0">
				
				<!-- 頁籤 -->
				<ul class="todoList_tab">
					<li><a href="#" class="tab-link active" @click.prevent="switchTab($event)">全部</a></li>
					<li><a href="#" class="tab-link" @click.prevent="switchTab($event, false)">待完成</a></li>
					<li><a href="#" class="tab-link" @click.prevent="switchTab($event, true)">已完成</a></li>
				</ul>
				
				<!-- 列表 -->
				<div class="todoList_items">
					<ul class="todoList_item">
						
						<template v-for="todo in todoList" :key="todo.id">
							<li v-if="tabStatus === undefined || tabStatus === todo.status">
								<label class="todoList_label">
									<input 
										v-model="todo.status"
										@click="changeTodoStatus(todo.id)"
										class="todoList_input"
										type="checkbox" value="true"
									/>
									<span>{{ todo.content }}</span>
								</label>
								
								<!-- 刪除 -->
								<a href="#" @click.prevent="deleteTodo(todo.id)">
									<i class="fa-solid fa-times"></i>
								</a>
							</li>
						</template>
						
					</ul>
					
					<div class="todoList_statistics">
						<p class="text-bold">{{ uncompletedNum }} 個待完成項目</p>
						<p>{{ completeNum }} 個已完成項目</p>
					</div>
				</div>
			</div>
			
			
			<!-- 無待辦事項畫面 -->
			<div class="empty" v-else>
				<p class="empty-desc">目前尚無待辦事項</p>
				<img src="../assets/images/empty.png" alt="無待辦事項" class="empty-img">
			</div>
			
		</div>
	</div>
</template>


<style lang="scss" scoped>
.empty {
	margin-top: 60px;
	text-align: center;
	
	&-desc {
		color: #333333;
		text-align: center;
		margin-bottom: 16px;
	}
	
	&-img {
		width: 350px;
	}
}

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

		.tab-link {
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
