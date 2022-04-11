import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';


export interface IApp {
	initializated: boolean;
};

const initialState: IApp = {
	initializated: false,
};

const AppSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		initializatedSuccess: (state) => {
			state.initializated = true;
		},

	}
});

export const { initializatedSuccess } = AppSlice.actions;

export const selectInitializated = (state: RootState) => state.app.initializated;

export default AppSlice.reducer