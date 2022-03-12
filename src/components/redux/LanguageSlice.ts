import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ILanguages {
	activeLanguage?: string;
	languages?: string[];
}

interface ILang {
	language: ILanguages;
	isMenu: boolean;
	isChange: boolean;

}

const initialState: ILang = {
	language: {
		activeLanguage: ``,
		languages: [],
	},
	isMenu: false,
	isChange: false,
}

const LanguageSlice = createSlice({

	name: 'languages',
	initialState,
	reducers: {
		setActiveLanguage: (state, action: PayloadAction<string>) => {
			state.language.activeLanguage = action.payload;
			state.isChange = !state.isChange;
		},
		setLanguages: (state, action: PayloadAction<ILanguages>) => {
			state.language = action.payload;
		},
		toggleShowMenu: (state) => {
			state.isMenu = !state.isMenu;
		},
		closeMenu: (state) => {
			state.isMenu = false;
		},
	},
})

export const { setActiveLanguage, setLanguages, toggleShowMenu, } = LanguageSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectLanguage = (state: RootState) => state.languages.language;
export const selectIsLangMenu = (state: RootState) => state.languages.isMenu;
export const selectIsChangeLng = (state: RootState) => state.languages.isChange;
export default LanguageSlice.reducer