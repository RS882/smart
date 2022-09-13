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

const addErrorMessage = (state: IErrorSlice, action: PayloadAction<string>) => {
	console.log(action.payload);

	state.errorMessage = action.payload
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
		[getItem.rejected.type]: addErrorMessage,
		[loginUser.rejected.type]: addErrorMessage,
		[regNewUser.rejected.type]: addErrorMessage,

	}
});

export const { setErrorMessage, delErrorMessage } = ErrorSlice.actions;

export const selectErrorMessage = (state: RootState) => state.error.errorMessage;

export default ErrorSlice.reducer