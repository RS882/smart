
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getItem } from './Thunk/thunkItem';

export interface IItemData {
	id: string;
	itemname: string;
	prise: string;
	discount: number;
	starts: number;
	reviews: number;
	salehit: number;
	newitem: number;
	isFavorite?: boolean;
	isCompare?: boolean;

};
export interface IKoord {
	left?: string;
	top?: string;
	widthK?: string;
	heightK?: string;
}

export interface IItems {
	itemsData: IItemData[] | [];
	itemsPage: number;
	errorText: string | undefined;
	isAddingItemToCart?: boolean;
	// startFlyToCart: IKoord;
	endFlyToCart: IKoord;
};

const initialState: IItems = {
	itemsData: [],
	itemsPage: 1,
	errorText: undefined,
	isAddingItemToCart: false,
	// startFlyToCart: {
	// 	left: undefined,
	// 	top: undefined,
	// },
	endFlyToCart: {
		left: undefined,
		top: undefined,
	},
};

export const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {

		toogleFavoriteItem: (state, action: PayloadAction<string>) => {
			state.itemsData.map(e => { if (e.id === action.payload) e.isFavorite = !e.isFavorite; })
		},
		toogleCompareItem: (state, action: PayloadAction<string>) => {
			state.itemsData.map(e => { if (e.id === action.payload) e.isCompare = !e.isCompare; })
		},
		startAddingItemToCart: (state) => {
			state.isAddingItemToCart = true;

		},
		endAddingItemToCart: (state) => {
			state.isAddingItemToCart = false;
		},
		// getFlyingStartKoord: (state, action: PayloadAction<IKoord>) => {
		// 	state.startFlyToCart = action.payload;
		// },
		getFlyingEndKoord: (state, action: PayloadAction<IKoord>) => {
			state.endFlyToCart = action.payload;
		},

		clearFlyingKoord: (state) => {
			// state.startFlyToCart.left = undefined;
			// state.startFlyToCart.top = undefined;
			state.endFlyToCart.left = undefined;
			state.endFlyToCart.top = undefined;
		}
	},
	extraReducers: {
		[getItem.fulfilled.type]: (state, action: PayloadAction<IItemData[]>) => {
			if (typeof (action.payload) === 'string') {
				state.errorText = action.payload;

			} else {
				state.itemsData = action.payload;
				state.itemsData.map((e) => {
					e.isFavorite = false;
					e.isCompare = false;
				})

			}
		},
		[getItem.rejected.type]: (state, action: PayloadAction<Error>) => {
			console.log('errror');

		},
	}

})

export const { toogleFavoriteItem, toogleCompareItem, startAddingItemToCart, endAddingItemToCart,
	getFlyingEndKoord, clearFlyingKoord } = itemSlice.actions;

export const selectitemsData = (state: RootState) => state.item.itemsData;
export const selectAddItemToCart = (state: RootState) => state.item.isAddingItemToCart;
// export const selectStartFlyKoord = (state: RootState) => state.item.startFlyToCart;
export const selectEndFlyKoord = (state: RootState) => state.item.endFlyToCart;

export default itemSlice.reducer;