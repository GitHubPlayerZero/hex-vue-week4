import { useCookie } from "./cookie";

const name = 'todos_login';
const tokenCookie = useCookie(name);

/**
 * 將 token 加入 cookie。
 * @param {String} token - 使用者登入時產生的 token。
 */
const add = (token) => {
	// 時效設定為第二天的凌晨 1 點
	const expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + 1);
	expirationDate.setHours(1);
	expirationDate.setMinutes(0);
	expirationDate.setSeconds(0);

	tokenCookie.setValue(token);
	tokenCookie.setExpires(expirationDate);
	tokenCookie.setup();
};

/**
 * 取得 token。
 * @returns {String} token
 */
const get = () => tokenCookie.getValue();

/**
 * 檢查 token 是否存在。
 * @returns {Boolean} token 存在就回傳 true；否則回傳 false。
 */
const isExist = () => {
	const token = get();
	if (token) {
		return true;
	}
	return false;
}

/**
 * 刪除 token。
 */
const remove = () => {
	tokenCookie.remove();
};

export const loginToken = {
	add,
	get,
	isExist,
	remove,
};
