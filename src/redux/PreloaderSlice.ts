import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { setLanguages, setScrollWidth } from './Thunk/thunkInitApp';
import { getItem } from "./Thunk/thunkItem";
import { loginUser, regNewUser } from "./Thunk/thunkLogin";

interface IPreloaderState {
	isFetching: boolean;
};

const initialState: IPreloaderState = {
	isFetching: false,

};

export const preloaderSlice = createSlice({
	name: 'preloader',
	initialState,
	reducers: {
		setIsFeching: (state, action: PayloadAction<boolean>) => {
			state.isFetching = action.payload;
		},

	},
	extraReducers: {
		[getItem.pending.type]: (state) => {
			state.isFetching = true;
		},
		[getItem.fulfilled.type]: (state) => {
			state.isFetching = false;
		},
		[setLanguages.pending.type]: (state) => {
			state.isFetching = true;
		},
		[setLanguages.fulfilled.type]: (state) => {
			state.isFetching = false;
		},
		[loginUser.pending.type]: (state) => {
			state.isFetching = true;
		},
		[loginUser.fulfilled.type]: (state) => {
			state.isFetching = false;
		},
		[regNewUser.pending.type]: (state) => {
			state.isFetching = true;
		},
		[regNewUser.fulfilled.type]: (state) => {
			state.isFetching = false;
		},
		[setScrollWidth.pending.type]: (state) => {
			state.isFetching = true;
		},
		[setScrollWidth.fulfilled.type]: (state) => {
			state.isFetching = false;
		},

	}
})
export const { setIsFeching } = preloaderSlice.actions;

export const selectIsPreloader = (state: RootState) => state.preloader.isFetching;


export default preloaderSlice.reducer;