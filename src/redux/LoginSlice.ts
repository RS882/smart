import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ILogin {
	isPopUp: boolean;
	isLoginBox: boolean;
	isRegBox: boolean;
	isShowPassword: boolean;
};

const initialState: ILogin = {
	isPopUp: false,
	isLoginBox: false,
	isRegBox: false,
	isShowPassword: false,
}


export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		openPopUp: (state) => {
			state.isPopUp = true;
			state.isRegBox = false;
			state.isLoginBox = true;
		},
		closePopUp: (state) => {
			state.isPopUp = false;
			state.isRegBox = false;
			state.isLoginBox = false;
		},
		openLoginBox: (state, action: PayloadAction<boolean>) => {
			state.isRegBox = false;
			state.isLoginBox = action.payload;

		},
		openRegBox: (state, action: PayloadAction<boolean>) => {
			state.isLoginBox = false;
			state.isRegBox = action.payload;
		},
		changeIsShowPassword: (state, action: PayloadAction<boolean>) => {
			state.isShowPassword = action.payload;
		},
	}
})


export const { openLoginBox, openRegBox, openPopUp, closePopUp, changeIsShowPassword, } = loginSlice.actions;

export const selectIsLoginBox = (state: RootState) => state.login.isLoginBox;
export const selectIsRegBox = (state: RootState) => state.login.isLoginBox;
export const selectIsPopUp = (state: RootState) => state.login.isPopUp;
export const selectIsShowPassword = (state: RootState) => state.login.isShowPassword;

export default loginSlice.reducer;