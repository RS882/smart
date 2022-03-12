import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ILanguages {
	activeLanguage?: string,
	languages?: string[],
}

interface IApp {
	language: ILanguages,
}

const initialState: IApp = {
	language: {
		activeLanguage: ``,
		languages: [],
	}
}

const appSlice = createSlice({

	name: 'app',
	initialState,
	reducers: {
		setActiveLanguage: (state, action: PayloadAction<string>) => {
			state.language.activeLanguage = action.payload;
		},
		setLanguages: (state, action: PayloadAction<ILanguages>) => {
			state.language = action.payload;
		},
	},
})

export const { setActiveLanguage, setLanguages, } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectActiveLanguage = (state: RootState) => state.app.activeLanguage;
export const selectLanguage = (state: RootState) => state.app.language;

export default appSlice.reducer