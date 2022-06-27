
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

export interface IItems {
	itemsData: IItemData[] | [];
	itemsPage: number;
	errorText: string | undefined;

};

const initialState: IItems = {
	itemsData: [],
	itemsPage: 1,
	errorText: undefined,
};

export const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {

		toogleFavoriteItem: (state, action: PayloadAction<number>) => {
			state.itemsData[action.payload].isFavorite = !state.itemsData[action.payload].isFavorite
		},
		toogleCompareItem: (state, action: PayloadAction<number>) => {
			state.itemsData[action.payload].isCompare = !state.itemsData[action.payload].isCompare
		},

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

export const { toogleFavoriteItem, toogleCompareItem } = itemSlice.actions;

export const selectitemsData = (state: RootState) => state.item.itemsData;

export default itemSlice.reducer;