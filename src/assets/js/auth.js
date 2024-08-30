import router from '@/router';
import { loginToken } from './loginToken';
import { api } from './api';

/**
 *  執行登入動作。
 * @param {String} token - 使用者登入的 token。
 */
function login (token) {
	loginToken.add(token);	// 加入 token
	router.push({ name: 'index' });	// 跳轉主頁面
}

// TODO
// async function check () {
// 	const token = loginToken.get();
// 	console.log(`[check] token ==>`, token);

// 	let result = false;

// 	if (token) {
// 		await api.getCheckout(token)
// 			.then((res) => {
// 				console.log(`[check] res ==>`, res);
// 				result = true;
// 			})
// 			.catch((error) => {
// 				console.error(`[check] error ==>`, error);
// 			})
// 			.finally(() => {
// 				console.log(`[check] finally...`);
// 			});
// 	}

// 	console.log(`[check] end. result ==>`, result);
// 	return result;
// }


export const auth = {
	login,
	// check,
};
