import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';


export interface ICatalog {
	selectedItemsType: string;
};

const initialState: ICatalog = {
	selectedItemsType: '',
};
// Reducer of the Catalog of Products
const CatalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setSelectedItemsType: (state, action: PayloadAction<string>) => {
			state.selectedItemsType = action.payload;
		},

	}
});

export const { setSelectedItemsType } = CatalogSlice.actions;

export const selectItemsType = (state: RootState) => state.catalog.selectedItemsType;

export default CatalogSlice.reducer