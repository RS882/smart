import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ILanguages {
	activeLanguage: string;
	languages: string[];
}

interface ILang {
	language: ILanguages;
	isMenu: boolean;
}

const initialState: ILang = {
	language: {
		activeLanguage: ``,
		languages: [],
	},
	isMenu: false,
}

const LanguageSlice = createSlice({

	name: 'languages',
	initialState,
	reducers: {
		setActiveLanguage: (state, action: PayloadAction<string>) => {
			state.language.activeLanguage = action.payload;
		},
		setLanguages: (state, action: PayloadAction<ILanguages>) => {
			state.language = action.payload;
		},
		toggleShowMenuLng: (state) => {
			state.isMenu = !state.isMenu;
		},
		closeMenuLng: (state) => {
			state.isMenu = false;
		},
	},
})

export const { setActiveLanguage, setLanguages, toggleShowMenuLng, closeMenuLng } = LanguageSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectLanguage = (state: RootState) => state.languages.language;
export const selectIsLangMenu = (state: RootState) => state.languages.isMenu;
export const selectActivLng = (state: RootState) => state.languages.language.activeLanguage;
export default LanguageSlice.reducer