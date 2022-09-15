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
};
interface IItemsObj {
	itemsInCart: string[];
	viewedItems: string[];
	favoriteItems: string[];
	compareItems: string[];

};


export interface IAction extends IIsActionFull, IItemsObj {
	counts: IActions,

};

const isObj: IIsActionFull = {
	isCartFull: false,
	isMoreFull: true,
};
const itemsObj: IItemsObj = {
	itemsInCart: [],
	viewedItems: [],
	favoriteItems: [],
	compareItems: [],
};

const initialState: IAction = {
	counts: {
		viewed: 0,
		favorites: 0,
		compare: 0,
		cart: 0,
	},
	...itemsObj,
	...isObj,
};

// Add a unit to the operation counter
const addCount = (key: keyof typeof initialState.counts, isFull: keyof typeof isObj = 'isMoreFull') =>
	(state: IAction) => {
		++state.counts[key];
		state[isFull] = true;
	};
// Removing a unit to the operation counter
const reduceCount = (key: keyof typeof initialState.counts, isFull: keyof typeof isObj = 'isMoreFull') =>
	(state: IAction) => {
		state.counts[key] && --state.counts[key];
		state[isFull] = state.counts[key] !== 0;
	};
// Add the product to the list of activity
const addItemsTo = (key: keyof typeof itemsObj) => (state: IAction, action: PayloadAction<string>) => {
	state[key].push(action.payload);
};
// We remove the goods from the list of activity
const delItemsTo = (key: keyof typeof itemsObj) => (state: IAction, action: PayloadAction<string>) => {
	state[key] = state[key].filter(e => e !== action.payload);
};
// Clean the list of acting
const clearAllItems = (key: keyof typeof itemsObj) => (state: IAction) => {
	state[key] = [];
};

//Reducer of actions with goods -examination, comparison, of the basket, likes
const ActionSlice = createSlice({

	name: 'action',
	initialState,
	reducers: {
		loadCounts: (state, action: PayloadAction<IActions>) => {
			state.counts = action.payload;
			state.isCartFull = state.counts.cart !== 0;
			state.isMoreFull = (state.counts.viewed + state.counts.compare + state.counts.favorites) !== 0;
		},

		addViewedCount: addCount('viewed'),
		addItemToViewed: addItemsTo('viewedItems'),
		delItemToViewed: delItemsTo('viewedItems'),
		clearViewed: clearAllItems('viewedItems'),

		addFavoritesCount: addCount('favorites'),
		reduceFavoritesCount: reduceCount('favorites'),
		addItemToFavorite: addItemsTo('favoriteItems'),
		delItemToFavorite: delItemsTo('favoriteItems'),
		clearFavorite: clearAllItems('favoriteItems'),

		addCompareCount: addCount('compare'),
		reduceCompareCount: reduceCount('compare'),
		addItemToCompare: addItemsTo('compareItems'),
		delItemToCompare: delItemsTo('compareItems'),
		clearCompare: clearAllItems('compareItems'),

		addCartCount: addCount('cart', 'isCartFull'),
		reduceCartCount: reduceCount('cart', 'isCartFull'),
		addItemToCart: addItemsTo('itemsInCart'),
		delItemToCart: delItemsTo('itemsInCart'),
		clearCart: clearAllItems('itemsInCart'),

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


export const selectViewedCount = (state: RootState) => state.action.counts.viewed;
export const selectFavoritesCount = (state: RootState) => state.action.counts.favorites;
export const selectCompareCount = (state: RootState) => state.action.counts.compare;
export const selectCartCount = (state: RootState) => state.action.counts.cart;
export const selectIsCartFull = (state: RootState) => state.action.isCartFull;
export const selectIsMoreFull = (state: RootState) => state.action.isMoreFull;
export const selectActionCount = (state: RootState) => state.action.counts;
export const selectItemInCart = (state: RootState) => state.action.itemsInCart;
export const selectViewedItem = (state: RootState) => state.action.viewedItems;
export const selectFavoritedItem = (state: RootState) => state.action.favoriteItems;
export const selectCompaedItem = (state: RootState) => state.action.compareItems;
export default ActionSlice.reducer