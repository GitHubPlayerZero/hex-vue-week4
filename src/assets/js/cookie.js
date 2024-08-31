/**
 * 設定 cookie。
 * @param {String} name - cookie 名稱。
 * @param {String} val - cookie 內容。
 * @param {Object} [options = {}] - cookie 的其它設定項目。
 * 		@param {Date} options.expires - cookie 的 expires。
 * 		@param {Number} options.maxAge - cookie 的 max-age。
 */
function setCookie (name, val = '', options = {})
{
	const { expires, maxAge } = options;
	let strCookie = `${name}=${val};`;

	if (maxAge !== undefined) {
		strCookie += ` max-age=${maxAge};`;
	}

	if (expires) {
		strCookie += ` expires=${expires};`;
	}

	document.cookie = strCookie;
}


/**
 * Cookie 的相關處理。  
 * 依據給入的 cookie 名稱，建立相對應的 cookie。
 * @param {String} name - cookie 名稱。
 * @returns 使用 cookie 的各種方法。
 */
export function useCookie (name)
{
	let settings = {
		value: '',
	};

	
	/**
	 * 設定 cookie 內容。
	 * @param {String} val - cookie 內容
	 */
	const setValue = (val) => {
		settings.value = val;
	}
	
	
	/**
	 * 設定 expires 日期時間。
	 * @param {Date} date - expires 日期時間。
	 */
	const setExpires = (date) => {
		settings.expires = date.toUTCString();
	}

	
	/**
	 * 設置 cookie。
	 * @param {Object} [customSetting = settings] - 自訂的設定。  
	 * 		若有給入，就使用此設置 cookie，否則就使用原本的設定。
	 */
	const setup = (customSetting = settings) => {
		setCookie(name, customSetting.value, customSetting);
	}
	
	
	/**
	 * 檢查此 cookie 是否存在。
	 * @returns {Boolean} cookie 存在則回傳 true；否則回傳 false。
	 */
	const isExist = () => {
		const reg = new RegExp(`(?:^|;\\s*)${name}\\s*\\=`);
		return reg.test(document.cookie);
	}

	
	/**
	 * 取得 cookie 內容。
	 * @returns {String} cookie 內容。
	 */
	const getValue = () => {
		const reg = new RegExp(`(?:(?:^|.*;)\\s*${name}\\s*\\=\\s*([^;]*).*$)|^.*$`);
		return document.cookie.replace(reg, '$1');
	};
	
	
	/**
	 * 刪除 cookie。
	 */
	const remove = () => {
		setup({ maxAge: 0 });
	}
	
	
	/**
	 * 清除所有設定。  
	 * 僅是清除變數內容，不會修改、刪除 cookie 本身。  
	 * 注意，若要再次使用 setup() 設置 cookie 時，請確認有重新給予需要的設定。
	 */
	const clearSettings = () => {
		settings = {
			value: '',
		};
	}

	
	/**
	 * 取得 settings 內容。
	 * @returns {String} 格式化為 JSON 字串的 settings 內容。
	 */
	const getSettingsContent = () => JSON.stringify(settings);


	return {
		setValue,
		setExpires,
		setup,
		isExist,
		getValue,
		remove,
		getSettingsContent,
		clearSettings,
	};
}
