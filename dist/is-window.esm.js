/**
 * Determine if a value is a window-object.
 * @param {*} value - The value
 * @returns {boolean}
 */
function isWindow(value) {
	if (value == null) {
		return false
	}

	if (value !== Object(value)) {
		return false
	}

	if (value !== value.window) {
		return false
	}

	return true
}

export default isWindow;
