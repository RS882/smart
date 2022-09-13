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
const changeIsFetching = (is: boolean) => (state: IPreloaderState) => {
	state.isFetching = is;
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
		[getItem.pending.type]: changeIsFetching(true),
		[getItem.fulfilled.type]: changeIsFetching(false),
		[getItem.rejected.type]: changeIsFetching(false),
		[setLanguages.pending.type]: changeIsFetching(true),
		[setLanguages.fulfilled.type]: changeIsFetching(false),
		[setLanguages.rejected.type]: changeIsFetching(false),
		[loginUser.pending.type]: changeIsFetching(true),
		[loginUser.fulfilled.type]: changeIsFetching(false),
		[loginUser.rejected.type]: changeIsFetching(false),
		[regNewUser.pending.type]: changeIsFetching(true),
		[regNewUser.fulfilled.type]: changeIsFetching(false),
		[regNewUser.rejected.type]: changeIsFetching(false),
		[setScrollWidth.pending.type]: changeIsFetching(true),
		[setScrollWidth.fulfilled.type]: changeIsFetching(false),
		[setScrollWidth.rejected.type]: changeIsFetching(false),
	}
})
export const { setIsFeching } = preloaderSlice.actions;

export const selectIsPreloader = (state: RootState) => state.preloader.isFetching;


export default preloaderSlice.reducer;