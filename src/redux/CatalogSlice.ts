import { createSlice } from '@reduxjs/toolkit';


export interface ICatalog {
	selectedItemsType: string;
};

const initialState: ICatalog = {
	selectedItemsType: '',
};

const CatalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		// getSelectedItemsType:
	}
});

export default CatalogSlice.reducer