import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IAction {
	counts: {
		viewed: number;
		favorites: number;
		compare: number;
		cart: number;
	}
};
const initialState: IAction = {
	counts: {
		viewed: 0,
		favorites: 5,
		compare: 25,
		cart: 15,
	}
};

const ActionSlice = createSlice({

	name: 'action',
	initialState,
	reducers: {
		addViewedCount: (state) => { ++state.counts.viewed },
		addFavoritesCount: (state) => { ++state.counts.favorites },
		addCompareCount: (state) => { ++state.counts.compare },
		addCartCount: (state) => { ++state.counts.cart },
		clearCounts: (state) => {
			let key: keyof typeof state.counts;
			for (key in state.counts) { state.counts[key] = 0; }
		},

	}

})


export const { addViewedCount, addFavoritesCount, addCompareCount, addCartCount, clearCounts, } = ActionSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectViewedCount = (state: RootState) => state.action.counts.viewed;
export const selectFavoritesCount = (state: RootState) => state.action.counts.favorites;
export const selectCompareCount = (state: RootState) => state.action.counts.compare;
export const selectCartCount = (state: RootState) => state.action.counts.cart;
export const selectActionCount = (state: RootState) => state.action.counts;
export default ActionSlice.reducer