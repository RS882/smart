import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";


interface IApp {
	activeLanguage: string,
	languages: string[],
}

const initialState: IApp = {
	activeLanguage: ``,
	languages: [],
}

const appSlice = createSlice({

	name: 'app',
	initialState,
	reducers: {
		setActiveLanguage: (state, action: PayloadAction<string>) => {
			state.activeLanguage = action.payload;
		},
		setLanguages: (state, action: PayloadAction<string[]>) => {
			state.languages = action.payload;
		},
	},
})

export const { setActiveLanguage, setLanguages, } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectActiveLanguage = (state: RootState) => state.app.activeLanguage;
export const selectLanguages = (state: RootState) => state.app.languages;

export default appSlice.reducer