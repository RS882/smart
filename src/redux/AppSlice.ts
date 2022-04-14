import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';


export interface IApp {
	initializated: boolean;
	isRetina: boolean;
};

const initialState: IApp = {
	initializated: false,
	isRetina: false,
};

const AppSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		initializatedSuccess: (state) => {
			state.initializated = true;
		},
		setIsRetina: (state, action: PayloadAction<boolean>) => {
			state.isRetina = action.payload;
		},
	}
});

export const { initializatedSuccess, setIsRetina } = AppSlice.actions;

export const selectInitializated = (state: RootState) => state.app.initializated;
export const selectIsRetina = (state: RootState) => state.app.isRetina;

export default AppSlice.reducer