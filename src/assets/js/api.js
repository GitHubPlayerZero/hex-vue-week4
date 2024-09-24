import axios from 'axios';

const apiBase = 'https://todolist-api.hexschool.io';
const apiUsers = `${apiBase}/users`;
const apiTodos = `${apiBase}/todos`;


const getAuthHeader = (token) => {
	return {
		headers: {
			authorization: token,
		},
	};
};


/**
 * 註冊。
 * @param {Object} data
 * 		@param {String} data.email
 * 		@param {String} data.password
 * 		@param {String} data.nickname
 * @returns {Promise}
 */
const postSignUp = (data) => axios.post(`${apiUsers}/sign_up`, data);


/**
 * 登入。
 * @param {Object} data
 * 		@param {String} data.email
 * 		@param {String} data.password
 * @returns {Promise}
 */
const postSignIn = (data) => axios.post(`${apiUsers}/sign_in`, data);


/**
 * 登出。
 * @param {String} token
 * @returns {Promise}
 */
const postSignOut = (token) =>
	axios({
		method: 'post',
		url: `${apiUsers}/sign_out`,
		...getAuthHeader(token),
	});

	
/**
 * 驗證。
 * @param {String} token
 * @returns {Promise}
 */
const getCheckout = (token) => axios.get(`${apiUsers}/checkout`, getAuthHeader(token));


/**
 * 取得所有代辦事項。
 * @param {String} token
 * @returns {Promise}
 */
const getTodos = (token) => axios.get(`${apiTodos}/`, getAuthHeader(token));


/**
 * 新增代辦事項。
 * @param {String} token
 * @param {Object} data
 * 		@param {String} data.content
 * @returns {Promise}
 */
const postTodos = (token, data) => axios.post(`${apiTodos}/`, data, getAuthHeader(token));


/**
 * 更新代辦事項。
 * @param {String} token
 * @param {String} id - 代辦事項 id
 * @param {Object} data
 * 		@param {String} data.content
 * @returns {Promise}
 */
const putTodos = (token, id, data) =>
	axios.put(`${apiTodos}/${id}`, data, getAuthHeader(token));


/**
 * 刪除代辦事項。
 * @param {String} token
 * @param {String} id - 代辦事項 id
 * @returns {Promise}
 */
const deleteTodos = (token, id) => axios.delete(`${apiTodos}/${id}`, getAuthHeader(token));


/**
 * 切換代辦事項狀態。
 * @param {String} token
 * @param {String} id - 代辦事項 id
 * @returns {Promise}
 */
const patchTodosToggle = (token, id) =>
	axios({
		method: 'patch',
		url: `${apiTodos}/${id}/toggle`,
		...getAuthHeader(token),
	});

	
/**
 * 解析 API 傳回的 error。
 * @param {Object} errorModel
 * 		@param {Object} [errorModel.response] - error.response.data.message
 * 		@param {String} errorModel.message
 * @returns {(Array|String)} - 若 error.response.data.message 存在，會回傳此，有可能為訊息陣列。  
 * 								否則回傳 error.message，此為字串。
 */
const parseError = (error) => error.response?.data?.message ?? error.message;


export const api = {
	postSignUp,
	postSignIn,
	postSignOut,
	getCheckout,
	getTodos,
	postTodos,
	putTodos,
	deleteTodos,
	patchTodosToggle,
	parseError,
};
