import router from '@/router';
import { loginToken } from './loginToken';

/**
 * 執行登入動作。
 * @param {String} token - 使用者登入的 token。
 */
function login (token) {
	loginToken.add(token);	// 加入 token
	router.push({ name: 'index' });	// 跳轉主頁面
}

export const auth = {
	login,
};
