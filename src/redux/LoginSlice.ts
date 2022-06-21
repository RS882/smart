import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { loginUser, regNewUser } from "./Thunk/thunkLogin";

export interface IUserDate {
	id: string;
	name: string;
	password: string;
	email: string;
	phone: string;
	registrationDate: string;
	city: string;
	address: string;
	zipIndex: string;
	paymentMethod: string;
	deliveryMethod: string;
	avatar: string;
	shoppingHistory: string[];
	favorites: string[];
}

export interface ILogin {
	isPopUp: boolean;
	isLoginBox: boolean;
	isRegBox: boolean;
	isShowPassword: boolean;
	isSubmit: boolean;
	isLoginSuccess: boolean;
	userDate: IUserDate | {};
	error: any | undefined;
	errorText: string | undefined;
	regMessage: string | undefined;
};

const initialState: ILogin = {
	isPopUp: false,
	isLoginBox: false,
	isRegBox: false,
	isShowPassword: false,
	isSubmit: false,
	isLoginSuccess: false,
	error: undefined,
	errorText: undefined,
	userDate: {},
	regMessage: undefined,
}


export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		openPopUp: (state) => {
			state.isPopUp = true;
			state.isRegBox = false;
			state.isLoginBox = false;
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
		changeIsSubmit: (state, action: PayloadAction<boolean>) => {
			state.isSubmit = action.payload;
		},
		setLogOut: (state) => {
			state.isLoginSuccess = false;
			state.userDate = {};
		},
		clearRegMessage: (state) => {
			state.regMessage = undefined;
		}
	},
	extraReducers: {
		[loginUser.fulfilled.type]: (state, action: PayloadAction<IUserDate>) => {
			if (typeof (action.payload) === 'string') {
				state.errorText = action.payload;
				state.isLoginSuccess = false;
			} else {
				state.userDate = action.payload;
				state.errorText = undefined;
				state.error = undefined;
				state.isLoginSuccess = true;
			}
		},
		[loginUser.rejected.type]: (state, action: PayloadAction<Error>) => {
			console.log('errror');
			state.error = action.payload;
		},
		[regNewUser.fulfilled.type]: (state, action: PayloadAction<IUserDate>) => {
			if (action.payload.id !== undefined) {
				state.userDate = action.payload;
				state.regMessage = 'You are registered!';
				state.isLoginSuccess = true;

			} else {
				state.userDate = {};
				state.isLoginSuccess = false;
				state.regMessage = 'Registration failed...(';
			}

		},
		[regNewUser.rejected.type]: (state, action: PayloadAction<Error>) => {
			console.log('errror');
			state.error = action.payload;
		},
	}
})


export const { openLoginBox, openRegBox, openPopUp,
	closePopUp, changeIsShowPassword, changeIsSubmit, setLogOut, clearRegMessage } = loginSlice.actions;

export const selectIsLoginBox = (state: RootState) => state.login.isLoginBox;
export const selectIsRegBox = (state: RootState) => state.login.isRegBox;
export const selectIsPopUp = (state: RootState) => state.login.isPopUp;
export const selectIsShowPassword = (state: RootState) => state.login.isShowPassword;
export const selectIsSubmit = (state: RootState) => state.login.isSubmit;
export const selectIsLogSuccess = (state: RootState) => state.login.isLoginSuccess;
export const selectLoginMessage = (state: RootState) => state.login.regMessage;

export default loginSlice.reducer;