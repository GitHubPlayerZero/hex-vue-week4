import { useLoading } from 'vue-loading-overlay';
import { keyboard } from './keyboard';

const baseSettings = {
	color: 'blue',
	zIndex: 1059,	// 避免遮蔽 SWAL2 (SWAL2 的 z-index 為 1060)
	enforceFocus: false,	// 避免使 SWAL2 失焦
};


/**
 * 使用自定義的 loading。  
 * 允許傳入自己另外的設定，若有與基本設定重複的項目，會使用傳入的設定。  
 * 注意，此方法只會開啟整頁 loading，若需要區域性的 loading，請使用 useMyAreaLoading。
 * @param {Object} [options = {}] vue-loading-overlay 的設定。
 * @returns 相關的使用方法或物件。
 */
export function useMyLoading(options = {})
{
	// 是否已開啟 loading ?
	let isOpened = false;
	
	const $loading = useLoading({
		... baseSettings,
		... options,
	});
	
	
	/**
	 * 開啟全域 loading，允許傳入自己另外的設定。
	 * @param {Object} [options = {}] vue-loading-overlay 的設定。
	 * @returns 針對這次開啟的 loader，提供調用的方法。
	 */
	function open(options = {})
	{
		// 若已有開啟 loading，則不重複開啟，且 loading 交由最外層的開啟者關閉
		if (isOpened) {
			return {
				close() {}
			};
		}
		
		
		isOpened = true;
		
		// loading 期間屏蔽鍵盤動作
		const abortController = new AbortController();
		keyboard.prevent(document.querySelector("#app"), abortController.signal);
		
		// 開啟 loading。
		// 會強制 container 為 undefined 以確保開啟整頁 loading。
		const loader = $loading.show({
			... options,
			container: undefined,
		});
		
		// 使 loading 取得焦點，並且禁止鍵盤操作 (主要防止 tab)
		const elemOverlay = document.querySelector(".vl-overlay.vl-full-page");
		keyboard.prevent(elemOverlay);
		elemOverlay.focus();
		
		
		/**
		 * 關閉 loading。
		 */
		function close() {
			abortController.abort();	// 取消鍵盤阻擋
			loader.hide();
			isOpened = false;
		}
		
		return { close };
	}
	
	return { open };
}


/**
 * 使用自定義的 loading。  
 * 允許傳入自己另外的設定，若有與基本設定重複的項目，會使用傳入的設定。  
 * 注意，此方法為開啟區域性的 loading，若需要整頁 loading，請使用 useMyLoading。
 * @param {Object} options - vue-loading-overlay 的設定。
 * @returns 相關的使用方法或物件。
 */
export function useMyAreaLoading(options = {})
{
	const $loading = useLoading({
		... baseSettings,
		... options,
	});
	
	
	/**
	 * 開啟 loading，允許傳入自己另外的設定。
	 * @param {Object} [options = {}] vue-loading-overlay 的設定。
	 * @returns 針對這次開啟的 loader，提供調用的方法。
	 */
	function open(options = {})
	{
		if (!options.container) {
			console.error("container 參數不可為空！");
			return;
		}
		
		// 開啟 loading
		const loader = $loading.show(options);
		
		// 取得 container 的 tabindex 供之後還原
		const tabindex = options.container.getAttribute("tabindex");
		
		// loading 期間屏蔽 container 區域的鍵盤動作
		const abortController = new AbortController();
		keyboard.prevent(options.container, abortController.signal);
		
		// 將 container 的 tabindex 設為 0，以便取得焦點 (以防止 tab)
		options.container.setAttribute("tabindex", "0");
		options.container.focus();
		
		
		/**
		 * 關閉 loading。
		 */
		function close()
		{
			options.container.setAttribute("tabindex", tabindex);	// 復原 container 的 tabindex
			abortController.abort();	// 取消鍵盤監聽
			loader.hide();
		}
		
		return { close };
	}
	
	return { open };
}
