import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { loginUser } from "./Thunk/thunkLogin";

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
	userDate?: IUserDate;
	error?: string | undefined;
};

const initialState: ILogin = {
	isPopUp: false,
	isLoginBox: false,
	isRegBox: false,
	isShowPassword: false,
	isSubmit: false,
	isLoginSuccess: false,
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
		setLoginSuccess: (state) => {
			state.isLoginSuccess = true;
		},
		setLogOut: (state) => {
			state.isLoginSuccess = false;
		},
	},
	extraReducers: {
		[loginUser.fulfilled.type]: (state, action: PayloadAction<IUserDate>) => {

		}
	}
})


export const { openLoginBox, openRegBox, openPopUp,
	closePopUp, changeIsShowPassword, changeIsSubmit, setLoginSuccess, setLogOut } = loginSlice.actions;

export const selectIsLoginBox = (state: RootState) => state.login.isLoginBox;
export const selectIsRegBox = (state: RootState) => state.login.isRegBox;
export const selectIsPopUp = (state: RootState) => state.login.isPopUp;
export const selectIsShowPassword = (state: RootState) => state.login.isShowPassword;
export const selectIsSubmit = (state: RootState) => state.login.isSubmit;
export const selectIsLogSuccess = (state: RootState) => state.login.isLoginSuccess;

export default loginSlice.reducer;