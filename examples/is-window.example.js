import isWindow from '../src/is-window'

// fake window object
const window = {}
window.window = window

isWindow(window)
//=> true
