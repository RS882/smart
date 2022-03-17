import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IIsActionFull {
	isCartFull?: boolean,
	isMoreFull?: boolean,
}

interface IActions {
	viewed: number;
	favorites: number;
	compare: number;
	cart: number;
}

export interface IAction extends IIsActionFull {
	counts: IActions,
};


const initialState: IAction = {
	counts: {
		viewed: 0,
		favorites: 5,
		compare: 25,
		cart: 15,
	},
	isCartFull: true,
	isMoreFull: true,
};

const ActionSlice = createSlice({

	name: 'action',
	initialState,
	reducers: {
		loadCounts: (state, action: PayloadAction<IActions>) => {
			state.counts = action.payload;
			state.isCartFull = state.counts.cart !== 0;
			state.isMoreFull = (state.counts.viewed + state.counts.compare + state.counts.favorites) !== 0;
		},
		addViewedCount: (state) => {
			++state.counts.viewed;
			state.isMoreFull = true;
		},
		addFavoritesCount: (state) => {
			++state.counts.favorites;
			state.isMoreFull = true;
		},
		reduceFavoritesCount: (state) => {
			state.counts.favorites && --state.counts.favorites;
			state.isMoreFull = state.counts.favorites !== 0;
		},
		addCompareCount: (state) => {
			++state.counts.compare;
			state.isMoreFull = true;
		},
		reduceCompareCount: (state) => {
			state.counts.compare && --state.counts.compare;
			state.isMoreFull = state.counts.compare !== 0;
		},
		addCartCount: (state) => {
			++state.counts.cart;
			state.isCartFull = true;
		},
		reduceCartCount: (state) => {
			state.counts.cart && --state.counts.cart;
			state.isCartFull = state.counts.cart !== 0;
		},
		clearCounts: (state) => {
			let key: keyof typeof state.counts;
			for (key in state.counts) { state.counts[key] = 0; }
			state.isCartFull = false;
			state.isMoreFull = false;
		},
	}
})


export const { addViewedCount, addFavoritesCount, reduceFavoritesCount,
	addCompareCount, reduceCompareCount, addCartCount, reduceCartCount, clearCounts, loadCounts }
	= ActionSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectViewedCount = (state: RootState) => state.action.counts.viewed;
export const selectFavoritesCount = (state: RootState) => state.action.counts.favorites;
export const selectCompareCount = (state: RootState) => state.action.counts.compare;
export const selectCartCount = (state: RootState) => state.action.counts.cart;
export const selectIsCartFull = (state: RootState) => state.action.isCartFull;
export const selectIsMoreFull = (state: RootState) => state.action.isMoreFull;
export const selectActionCount = (state: RootState) => state.action.counts;
export default ActionSlice.reducer