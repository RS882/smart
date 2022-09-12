import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';
import { getItem } from './Thunk/thunkItem';
import { loginUser, regNewUser } from './Thunk/thunkLogin';



export interface IErrorSlice {
	errorMessage?: string;

};

const initialState: IErrorSlice = {
	errorMessage: undefined,

};



const ErrorSlice = createSlice({
	name: 'error',
	initialState,
	reducers: {
		setErrorMessage: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
		delErrorMessage: (state) => {
			state.errorMessage = undefined;
		},
	},
	extraReducers: {
		[getItem.rejected.type]: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
		[loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
		[regNewUser.rejected.type]: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
	}
});

export const { setErrorMessage, delErrorMessage } = ErrorSlice.actions;

export const selectErrorMessage = (state: RootState) => state.error.errorMessage;

export default ErrorSlice.reducer