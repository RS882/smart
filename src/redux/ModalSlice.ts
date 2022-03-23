import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IModalState {
	isModal: boolean;
	isBodyLock: boolean;
	scrollWidth: null | number;
}

const initialState: IModalState = {
	isModal: false,
	isBodyLock: false,
	scrollWidth: null,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		// устанвливает откыто ли модльное окно и залочена прокрутка страницы
		changeIsModal: (state, action: PayloadAction<boolean>) => {
			state.isModal = action.payload;
			state.isBodyLock = action.payload;
		},
		// устанвливает залочена ли прокрутка страницы
		changeIsBodyLock: (state, action: PayloadAction<boolean>) => {
			state.isBodyLock = action.payload;
		},
		// устанавливаем ширину полосы прокрутки
		setScrollWidth: (state, action: PayloadAction<number>) => {
			state.scrollWidth = action.payload
		},
	},
})
export const { changeIsModal, changeIsBodyLock, setScrollWidth } = modalSlice.actions;

export const selectIsModal = (state: RootState) => state.modal.isModal;
export const selectIsBodyLock = (state: RootState) => state.modal.isBodyLock;
export const selectScrollWidth = (state: RootState) => state.modal.scrollWidth;
export default modalSlice.reducer;