import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getItem } from './Thunk/thunkItem';

export interface IItemData {
	id: string;
	itemname: string;
	itemDescription: string;
	prise: string;
	discount: number;
	starts: number;
	reviews: number;
	salehit: number | boolean;
	newitem: number | boolean;
	itemType: string;


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
	idFlyingItem: string | undefined;
	endFlyToCart: IKoord;
	startFlyToCart: IKoord;
	isGetKoord: boolean;
};

const initialState: IItems = {
	itemsData: [],
	itemsPage: 1,
	errorText: undefined,
	isAddingItemToCart: false,
	idFlyingItem: undefined,
	endFlyToCart: {
		left: undefined,
		top: undefined,
	},
	startFlyToCart: {
		left: undefined,
		top: undefined,
		widthK: undefined,
		heightK: undefined,

	},
	isGetKoord: false,
};

export const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {


		startAddingItemToCart: (state) => {
			state.isAddingItemToCart = true;

		},
		endAddingItemToCart: (state) => {
			state.isAddingItemToCart = false;
		},

		getFlyingEndKoord: (state, action: PayloadAction<IKoord>) => {
			state.endFlyToCart = action.payload;
		},
		getFlyingStartKoord: (state, action: PayloadAction<IKoord>) => {
			state.startFlyToCart = action.payload;
			state.isGetKoord = true;
		},


		clearFlyingKoord: (state) => {
			state.endFlyToCart.left = undefined;
			state.endFlyToCart.top = undefined;
			state.startFlyToCart.left = undefined;
			state.startFlyToCart.top = undefined;
			state.startFlyToCart.widthK = undefined;
			state.startFlyToCart.heightK = undefined;
			state.isGetKoord = false;
		},
		addFlyingItemId: (state, action: PayloadAction<string>) => {
			state.idFlyingItem = action.payload;
		},
		clearFlyingItemId: (state) => {
			state.idFlyingItem = undefined;
		}
	},
	extraReducers: {
		[getItem.fulfilled.type]: (state, action: PayloadAction<IItemData[]>) => {
			if (typeof (action.payload) === 'string') {
				state.errorText = action.payload;

			} else {
				state.itemsData = action.payload;
				state.itemsData.map((e) => {
					e.starts = Math.round(e.starts / 20);
					e.salehit = e.salehit > 50;
					e.newitem = e.newitem > 50;
					e.itemType = `itemsType${Math.round(+e.itemType / 11)}`;

					// itemsType1: '_icon-hoverboard',
					// itemsType2: '_icon-e_kick_scooter',
					// itemsType3: '_icon-mono_wheel',
					// itemsType4: '_icon-segway',
					// itemsType5: '_icon-e_scooter',
					// itemsType6: '_icon-e_bike',
					// itemsType7: '_icon-e_cars',
					// itemsType8: '_icon-e_skate',
					// itemsType9: '_icon-accessory',
					// itemsType10: '_icon-smart_toys',
					// itemsType11: '_icon-smart_watch',
				})

			}
		},
		[getItem.rejected.type]: (state, action: PayloadAction<Error>) => {
			console.log('errror');

		},
	}

})

export const { startAddingItemToCart, endAddingItemToCart,
	getFlyingEndKoord, getFlyingStartKoord, clearFlyingKoord, addFlyingItemId, clearFlyingItemId } = itemSlice.actions;

export const selectitemsData = (state: RootState) => state.item.itemsData;
export const selectAddItemToCart = (state: RootState) => state.item.isAddingItemToCart;
export const selectEndFlyKoord = (state: RootState) => state.item.endFlyToCart;
export const selectStartFlyKoord = (state: RootState) => state.item.startFlyToCart;
export const selectIdFlyingItem = (state: RootState) => state.item.idFlyingItem;
export const selectIsGetKoord = (state: RootState) => state.item.isGetKoord;
export default itemSlice.reducer;