import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IIsActionFull {
	isCartFull: boolean,
	isMoreFull: boolean,
}


interface IItemsObj {
	itemsInCart: string[];
	viewedItems: string[];
	favoriteItems: string[];
	compareItems: string[];

};


export interface IAction extends IIsActionFull, IItemsObj {
};

const isObj: IIsActionFull = {
	isCartFull: false,
	isMoreFull: false,
};
const itemsObj: IItemsObj = {
	itemsInCart: [],
	viewedItems: [],
	favoriteItems: [],
	compareItems: [],
};

const initialState: IAction = {

	...itemsObj,
	...isObj,
};


// Add the product to the list of activity
const addItemsTo = (key: keyof typeof itemsObj, isFull: keyof typeof isObj = 'isMoreFull') =>
	(state: IAction, action: PayloadAction<string>) => {
		state[key].push(action.payload);
		state[isFull] = true;
	};
// We check to eat goods in the basket
const setIsCartFull = (items: string[]) => items.length !== 0;
// Let's check whether there are goods viewed, you like and for comparison
const setIsMoreFull = (items1: string[], items2: string[], items3: string[]) => (items1.length + items2.length + items3.length) !== 0;

// We remove the goods from the list of activity
const delItemsTo = (key: keyof typeof itemsObj) =>
	(state: IAction, action: PayloadAction<string>) => {
		const index = state[key].indexOf(action.payload);
		if (index >= 0) state[key].splice(index, 1)
		state.isCartFull = setIsCartFull(state.itemsInCart);
		state.isMoreFull = setIsMoreFull(state.viewedItems, state.compareItems, state.favoriteItems);
	};
// Clean the list of acting
const clearAllItems = (key: keyof typeof itemsObj) => (state: IAction) => {
	state[key] = [];
	state.isCartFull = setIsCartFull(state.itemsInCart);
	state.isMoreFull = setIsMoreFull(state.viewedItems, state.compareItems, state.favoriteItems);
};

//Reducer of actions with goods -examination, comparison, of the basket, likes
const ActionSlice = createSlice({

	name: 'action',
	initialState,
	reducers: {
		loadCounts: (state, action: PayloadAction<IItemsObj>) => {
			const { itemsInCart, viewedItems, favoriteItems, compareItems } = action.payload;
			state.itemsInCart = itemsInCart;
			state.viewedItems = viewedItems;
			state.favoriteItems = favoriteItems;
			state.compareItems = compareItems;
			state.isCartFull = setIsCartFull(itemsInCart);
			state.isMoreFull = setIsMoreFull(viewedItems, compareItems, favoriteItems);
		},

		addItemToViewed: addItemsTo('viewedItems'),
		delItemToViewed: delItemsTo('viewedItems'),
		clearViewed: clearAllItems('viewedItems'),

		addItemToFavorite: addItemsTo('favoriteItems'),
		delItemToFavorite: delItemsTo('favoriteItems'),
		clearFavorite: clearAllItems('favoriteItems'),

		addItemToCompare: addItemsTo('compareItems'),
		delItemToCompare: delItemsTo('compareItems'),
		clearCompare: clearAllItems('compareItems'),

		addItemToCart: addItemsTo('itemsInCart', 'isCartFull'),
		delItemToCart: delItemsTo('itemsInCart'),
		delAllItemToCart: (state: IAction, action: PayloadAction<string>) => {
			state.itemsInCart = state.itemsInCart.filter((e) => e !== action.payload);
			state.isCartFull = setIsCartFull(state.itemsInCart);

		},
		clearCart: clearAllItems('itemsInCart'),

		clearCounts: (state) => {
			state.itemsInCart = [];
			state.viewedItems = [];
			state.favoriteItems = [];
			state.compareItems = [];
			state.isCartFull = false;
			state.isMoreFull = false;
		},
	}
})


export const { clearCounts, loadCounts,
	addItemToCart, delItemToCart, delAllItemToCart, clearCart, addItemToViewed, delItemToViewed, clearViewed,
	addItemToFavorite, delItemToFavorite, clearFavorite,
	addItemToCompare, delItemToCompare, clearCompare }
	= ActionSlice.actions;


export const selectIsCartFull = (state: RootState) => state.action.isCartFull;
export const selectIsMoreFull = (state: RootState) => state.action.isMoreFull;
export const selectActionCount = (state: RootState) =>
({
	viewed: state.action.viewedItems.length,
	favorites: state.action.favoriteItems.length,
	compare: state.action.compareItems.length,
	cart: state.action.itemsInCart.length,
});
export const selectItemInCart = (state: RootState) => state.action.itemsInCart;
export const selectViewedItem = (state: RootState) => state.action.viewedItems;
export const selectFavoritedItem = (state: RootState) => state.action.favoriteItems;
export const selectCompaedItem = (state: RootState) => state.action.compareItems;
export default ActionSlice.reducer