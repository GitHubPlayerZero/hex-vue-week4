/**
 * 禁止鍵盤動作。
 * @param {Element} elem - 要禁止鍵盤動作的 DOM 元素。
 * @param {AbortSignal} [abortSignal] - 若需要稍後取消禁止鍵盤動作的效果，可以傳入 AbortSignal。
 */
function prevent(elem, abortSignal)
{
	const options = { capture: true };
	
	if (abortSignal) {
		options.signal = abortSignal;
	}
	
	// 只需屏蔽 keydown、keyup，因為只要屏蔽了 keydown 就不會觸發 keypress
	["keydown", "keyup"].forEach((item) => {
		elem.addEventListener(
			item, 
			(event) => {
				event.preventDefault();
				event.stopPropagation();
			}, 
			options
		);
	});
}


export const keyboard = {
	prevent,
};
