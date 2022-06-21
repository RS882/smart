
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getItem } from './Thunk/thunkItem';

export interface IItemData {
	itemname: string;
	prise: string;
	discount: number;
	starts: number;
	reviews: number;
	salehit: number;
	newitem: number;
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

	},
	extraReducers: {
		[getItem.fulfilled.type]: (state, action: PayloadAction<IItemData[]>) => {
			if (typeof (action.payload) === 'string') {
				state.errorText = action.payload;

			} else {
				state.itemsData = action.payload;


			}
		},
		[getItem.rejected.type]: (state, action: PayloadAction<Error>) => {
			console.log('errror');

		},
	}

})

//export const {  } = itemSlice.actions;


export default itemSlice.reducer;