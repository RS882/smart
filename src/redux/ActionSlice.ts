import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IIsActionFull {
	isCartFull: boolean,
	isMoreFull: boolean,
}

interface IActions {
	viewed: number;
	favorites: number;
	compare: number;
	cart: number;
}

export interface IAction extends IIsActionFull {
	counts: IActions,
	itemsInCart: string[];
	viewedItems: string[];
	favoriteItems: string[];
	compareItems: string[];
};


const initialState: IAction = {
	counts: {
		viewed: 0,
		favorites: 5,
		compare: 25,
		cart: 0,
	},
	isCartFull: false,
	isMoreFull: true,
	itemsInCart: [],
	viewedItems: [],
	favoriteItems: [],
	compareItems: [],
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
		addItemToViewed: (state, action: PayloadAction<string>) => {
			state.viewedItems.push(action.payload);
		},
		delItemToViewed: (state, action: PayloadAction<string>) => {
			state.viewedItems = state.viewedItems.filter(e => e !== action.payload);
		},
		clearViewed: (state) => {
			state.viewedItems = [];
		},

		addFavoritesCount: (state) => {
			++state.counts.favorites;
			state.isMoreFull = true;
		},
		reduceFavoritesCount: (state) => {
			state.counts.favorites && --state.counts.favorites;
			state.isMoreFull = state.counts.favorites !== 0;
		},
		addItemToFavorite: (state, action: PayloadAction<string>) => {
			state.favoriteItems.push(action.payload);
		},
		delItemToFavorite: (state, action: PayloadAction<string>) => {
			state.favoriteItems = state.favoriteItems.filter(e => e !== action.payload);
		},
		clearFavorite: (state) => {
			state.favoriteItems = [];
		},

		addCompareCount: (state) => {
			++state.counts.compare;
			state.isMoreFull = true;
		},
		reduceCompareCount: (state) => {
			state.counts.compare && --state.counts.compare;
			state.isMoreFull = state.counts.compare !== 0;
		},
		addItemToCompare: (state, action: PayloadAction<string>) => {
			state.compareItems.push(action.payload);
		},
		delItemToCompare: (state, action: PayloadAction<string>) => {
			state.compareItems = state.compareItems.filter(e => e !== action.payload);
		},
		clearCompare: (state) => {
			state.compareItems = [];
		},


		addCartCount: (state) => {
			++state.counts.cart;
			state.isCartFull = true;
		},
		addItemToCart: (state, action: PayloadAction<string>) => {
			state.itemsInCart.push(action.payload);
		},
		delItemToCart: (state, action: PayloadAction<string>) => {
			state.itemsInCart = state.itemsInCart.filter(e => e !== action.payload);
		},
		clearCart: (state) => {
			state.itemsInCart = [];
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
	addCompareCount, reduceCompareCount, addCartCount, reduceCartCount, clearCounts, loadCounts,
	addItemToCart, delItemToCart, clearCart, addItemToViewed, delItemToViewed, clearViewed,
	addItemToFavorite, delItemToFavorite, clearFavorite,
	addItemToCompare, delItemToCompare, clearCompare }
	= ActionSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectViewedCount = (state: RootState) => state.action.counts.viewed;
export const selectFavoritesCount = (state: RootState) => state.action.counts.favorites;
export const selectCompareCount = (state: RootState) => state.action.counts.compare;
export const selectCartCount = (state: RootState) => state.action.counts.cart;
export const selectIsCartFull = (state: RootState) => state.action.isCartFull;
export const selectIsMoreFull = (state: RootState) => state.action.isMoreFull;
export const selectActionCount = (state: RootState) => state.action.counts;
export const selectItemInCart = (state: RootState) => state.action.itemsInCart;
export default ActionSlice.reducer