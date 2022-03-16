import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IActionFull {
	isCartFull?: boolean,
	isMoreFull?: boolean,
}

export interface IAction extends IActionFull {
	counts: {
		viewed: number;
		favorites: number;
		compare: number;
		cart: number;
	},

};


const initialState: IAction = {
	counts: {
		viewed: 0,
		favorites: 5,
		compare: 25,
		cart: 15,
	},
	isCartFull: false,
	isMoreFull: false,
};

const ActionSlice = createSlice({

	name: 'action',
	initialState,
	reducers: {
		addViewedCount: (state) => { ++state.counts.viewed },
		addFavoritesCount: (state) => { ++state.counts.favorites },
		reduceFavoritesCount: (state) => { state.counts.favorites && --state.counts.favorites },
		addCompareCount: (state) => { ++state.counts.compare },
		reduceCompareCount: (state) => { state.counts.compare && --state.counts.compare },
		addCartCount: (state) => { ++state.counts.cart },
		reduceCartCount: (state) => { state.counts.cart && --state.counts.cart },
		clearCounts: (state) => {
			let key: keyof typeof state.counts;
			for (key in state.counts) { state.counts[key] = 0; }
		},
	}
})


export const { addViewedCount, addFavoritesCount, reduceFavoritesCount,
	addCompareCount, reduceCompareCount, addCartCount, reduceCartCount, clearCounts, }
	= ActionSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectViewedCount = (state: RootState) => state.action.counts.viewed;
export const selectFavoritesCount = (state: RootState) => state.action.counts.favorites;
export const selectCompareCount = (state: RootState) => state.action.counts.compare;
export const selectCartCount = (state: RootState) => state.action.counts.cart;
export const selectActionCount = (state: RootState) => state.action.counts;
export default ActionSlice.reducer