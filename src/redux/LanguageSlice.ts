import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IStrings } from './../localization/localization';
import { loadLanguage, setLanguages } from "./Thunk/thunkInitApp";
import { boolean } from "yup";

export interface ILanguages {
	activeLanguage: string;
	languages: string[];
}

interface ILang {
	language: ILanguages;
	isMenu: boolean;
	langStrings: IStrings | null;
	isLangChange: boolean;
}

const initialState: ILang = {
	language: {
		activeLanguage: ``,
		languages: [],
	},
	isMenu: false,
	langStrings: null,
	isLangChange: false,
}

const LanguageSlice = createSlice({

	name: 'languages',
	initialState,
	reducers: {
		setActiveLanguage: (state, action: PayloadAction<string>) => {
			state.language.activeLanguage = action.payload;
		},

		toggleShowMenuLng: (state) => {
			state.isMenu = !state.isMenu;
		},
		closeMenuLng: (state) => {
			state.isMenu = false;
		},
		setIsLangChange: (state, action: PayloadAction<boolean>) => {
			state.isLangChange = action.payload;
		},

	},
	extraReducers: {


		// [setLanguages.pending.type]: (state) => {

		// },
		[setLanguages.fulfilled.type]: (state, action: PayloadAction<ILanguages>) => {
			state.language = action.payload;
		},

		[loadLanguage.fulfilled.type]: (state, action: PayloadAction<IStrings | null>) => {
			state.langStrings = action.payload;

		},

	},
	// [setLanguage.rejected]: rejectedUsers,


})

export const { setActiveLanguage, toggleShowMenuLng, closeMenuLng, setIsLangChange, } = LanguageSlice.actions;

// Other code such as selectors can use the imported `RootState` type


export const selectLanguage = (state: RootState) => state.languages.language;
export const selectIsLangMenu = (state: RootState) => state.languages.isMenu;
export const selectActivLng = (state: RootState) => state.languages.language.activeLanguage;
export const selectIsLangChange = (state: RootState) => state.languages.isLangChange;
export const selectLangStiringsHeader = (state: RootState) => state.languages.langStrings && state.languages.langStrings.header;
export const selectLangStiringsHeaderBottomBtn = (state: RootState) => state.languages.langStrings && state.languages.langStrings.header.bottomBtn;
export const selectLangStiringsHeaderCatalogMenu = (state: RootState) => state.languages.langStrings && state.languages.langStrings.header.catalogMenu;
export const selectLangStiringsHeaderDropMenu = (state: RootState) => state.languages.langStrings && state.languages.langStrings.header.dropMenu;
export const selectLangStiringsHeaderDropMoreMenu = (state: RootState) => state.languages.langStrings && state.languages.langStrings.header.dropMoreMenu;
export const selectLangStiringsHeaderMenuItem = (state: RootState) => state.languages.langStrings && state.languages.langStrings.header.menuItem;
export const selectLangStiringsHeaderScearch = (state: RootState) => state.languages.langStrings && state.languages.langStrings.header.scearch;
export const selectLangStiringsHeaderSundry = (state: RootState) => state.languages.langStrings && state.languages.langStrings.header.sundry;
export const selectLangStiringsFooter = (state: RootState) => state.languages.langStrings && state.languages.langStrings.footer;
export const selectLangStiringsFooterAddress = (state: RootState) => state.languages.langStrings && state.languages.langStrings.footer.address;
export const selectLangStiringsFooterClient = (state: RootState) => state.languages.langStrings && state.languages.langStrings.footer.client;
export const selectLangStiringsFooterCooperationt = (state: RootState) => state.languages.langStrings && state.languages.langStrings.footer.cooperation;
export const selectLangStiringsFooterFooter = (state: RootState) => state.languages.langStrings && state.languages.langStrings.footer.footer;
export const selectLangStiringsFooterStore = (state: RootState) => state.languages.langStrings && state.languages.langStrings.footer.store;
export const selectLangStiringsSlideText = (state: RootState) => state.languages.langStrings && state.languages.langStrings.slider.bannerText;
export default LanguageSlice.reducer