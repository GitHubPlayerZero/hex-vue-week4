import Swal from "sweetalert2";

// 格式設定 - 基本
const baseSettings = {
	customClass: {
		title: 'msg',
	},
	
	position: 'top',
	confirmButtonText: '確定',
};

// 格式設定 - 鎖定 (不允許按 ESC 或點擊外部關閉)
const lockedSettings = {
	allowOutsideClick: false,
	allowEscapeKey: false,
};

// 格式設定 - 不聚焦任何 button
const unFocusButtonSettings = {
	didOpen(popup) {
		popup.focus();
	},
};

// 格式設定 - 錯誤訊息
const errorSettings = {
	customClass: {
		title: 'msg msg-error',
	},
	icon: 'error',
	confirmButtonColor: '#CE0000',
	confirmButtonText: '我知道了',
};


/**
 * 取得 HTML 格式的錯誤訊息。
 * @param {string | string[] | Object} error 錯誤訊息，可以是字串、字串陣列、物件。
 * @returns HTML 字串。
 */
const getErrorHtml = (error) =>
{
	let msg = '';
	
	if (typeof error === 'string') {
		msg = error;
	}
	if (error instanceof Array) {
		msg = error.join("<br>");
	}
	else if (error instanceof Object) {
		msg = Object.values(error).join("<br>");
	}
	
	return `<div class="msg msg-error">${msg}</div>`;
};


/**
 * 使用自定義的 SweetAlert2。
 * @param {Object} [options = {}] SweetAlert2 的設定。
 * @returns 各種雛型與使用方法。
 */
export function useMySwal(options = {})
{
	// error 訊息雛型
	const errorModel = Swal.mixin({
		... baseSettings,
		... lockedSettings,
		... errorSettings,
		... unFocusButtonSettings,
		... options
	});
	
	
	/**
	 * 顯示錯誤訊息。
	 * @param {string | string[] | Object} error 錯誤訊息，可以是字串、字串陣列、物件。
	 * @param {Object} [options = {}] SweetAlert2 的設定。
	 */
	const alertError = async (error, options = {}) => {
		const errorHtml = getErrorHtml(error);
		await errorModel.fire({
			... options,
			html: errorHtml,
		});
	};
	
	
	return {
		errorModel, 
		alertError, 
	};
}
