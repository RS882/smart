import { addItemToViewed, addViewedCount, loadCounts } from "./ActionSlice"
import store from "./store"

describe('Redux action slice test', () => {
	const state = store.getState().action
	it('Should initially set action to an empty object', () => {

		expect(state).not.toEqual({})
	})
	it('Shold adding view counter', () => {

		const result = store.dispatch(loadCounts({
			viewed: 1,
			favorites: 1,
			compare: 1,
			cart: 1,
		}))



		expect(result.type).toBe('action/loadCounts')
		expect(result.payload).toEqual({
			viewed: 1,
			favorites: 1,
			compare: 1,
			cart: 1,
		})
	})

})
