import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { setScrollWidth } from './Thunk/thunkInitApp';

interface IModalState {
	isModal: boolean;
	isBodyLock: boolean;
	scrollWidth: number;
	opacity: string;
}

const initialState: IModalState = {
	isModal: false,
	isBodyLock: false,
	scrollWidth: 0,
	opacity: '0.8',
};
// Reducer of the modal window
export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		// Whether the modal window sets and the scrolling of the page is openly blocked
		changeIsModal: (state, action: PayloadAction<boolean>) => {
			state.isModal = action.payload;
			state.isBodyLock = action.payload;
		},
		// sets whether the scrolling of the page is blocked
		changeIsBodyLock: (state, action: PayloadAction<boolean>) => {
			state.isBodyLock = action.payload;
		},

		// Install the transparency of the modal window
		setOpacity: (state, action: PayloadAction<string>) => {
			state.opacity = action.payload;
		},
	},
	extraReducers: {
		// Install the width of the scroll strip
		[setScrollWidth.fulfilled.type]: (state, action: PayloadAction<number>) => {
			state.scrollWidth = action.payload;
		},
	}
})
export const { changeIsModal, changeIsBodyLock, setOpacity } = modalSlice.actions;

export const selectIsModal = (state: RootState) => state.modal.isModal;
export const selectIsBodyLock = (state: RootState) => state.modal.isBodyLock;
export const selectScrollWidth = (state: RootState) => state.modal.scrollWidth;
export const selectModalOpacity = (state: RootState) => state.modal.opacity;

export default modalSlice.reducer;