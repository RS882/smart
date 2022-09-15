import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IIsPage {
	isCatalog: boolean;
	isScearch: boolean;
	isMore: boolean;
}

interface IMenuState {
	isMenu: IIsPage;
	isDesktopScearch: boolean;
	isUserMenuOpen: boolean;
};

const initialState: IMenuState = {
	isMenu: {
		isCatalog: false,
		isScearch: false,
		isMore: false,
	},
	isDesktopScearch: false,
	isUserMenuOpen: false,
};
// All values of the literals of the object set the FALSE
const getObjFalse = (obj: IIsPage): IIsPage => {
	let key: keyof typeof obj;
	for (key in obj) { obj[key] = false }
	return obj;
};

const open = (key: keyof typeof initialState.isMenu) =>
	(state: IMenuState, action: PayloadAction<boolean>) => {
		state.isMenu = getObjFalse(state.isMenu);
		state.isMenu[key] = action.payload;
	};

// Reducer Heder menu
export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		openCatalog: open('isCatalog'),
		openScearch: open('isScearch'),
		openMore: open('isMore'),
		closeMenu: (state) => { state.isMenu = getObjFalse(state.isMenu) },

		openDesktopScearch: (state, action: PayloadAction<boolean>) => {
			state.isDesktopScearch = action.payload;
		},

		openUserMenu: (state, action: PayloadAction<boolean>) => {
			state.isUserMenuOpen = action.payload;
		},
	},
})
export const { openCatalog, openScearch, openMore, closeMenu, openDesktopScearch, openUserMenu, } = menuSlice.actions;

export const selectIsMenu = (state: RootState) => state.menu.isMenu;
export const selectIsDesktopScearch = (state: RootState) => state.menu.isDesktopScearch;
export const selectIsUserMenuOpen = (state: RootState) => state.menu.isUserMenuOpen;

export default menuSlice.reducer;