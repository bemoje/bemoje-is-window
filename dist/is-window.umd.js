(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-window'] = factory());
}(this, (function () { 'use strict';

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

	return isWindow;

})));
