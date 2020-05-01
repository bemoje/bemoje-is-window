import isWindow from '../src/is-window'

describe('isWindow', () => {
	test('works', () => {
		expect(typeof isWindow === 'function').toBe(true)
		expect(isWindow(null)).toBe(false)
		expect(isWindow(void 0)).toBe(false)
		expect(isWindow('str')).toBe(false)
		expect(isWindow({})).toBe(false)
		const fakeWindow = {}
		fakeWindow.window = fakeWindow
		expect(isWindow(fakeWindow)).toBe(true)
	})
})
