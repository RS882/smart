import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

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
			state.scrollWidth = action.payload;
		},
		// устанавливаем ширину полосы прокрутки
		setOpacity: (state, action: PayloadAction<string>) => {
			state.opacity = action.payload;
		},
	},
})
export const { changeIsModal, changeIsBodyLock, setScrollWidth, setOpacity } = modalSlice.actions;

export const selectIsModal = (state: RootState) => state.modal.isModal;
export const selectIsBodyLock = (state: RootState) => state.modal.isBodyLock;
export const selectScrollWidth = (state: RootState) => state.modal.scrollWidth;
export const selectModalOpacity = (state: RootState) => state.modal.opacity;

export default modalSlice.reducer;