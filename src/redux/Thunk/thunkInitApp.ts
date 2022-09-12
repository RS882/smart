import { createAsyncThunk } from "@reduxjs/toolkit";
import { IStrings, IStringsWithMethods } from "../../localization/localization";
import { ILanguages, } from "../LanguageSlice";
import { transformObjStrings } from './../../utilits/functions';


export const setLanguages = createAsyncThunk(
	'languages/setLanguages',
	async (data: IStringsWithMethods) => {
		return await {
			languages: data.getAvailableLanguages(),
			activeLanguage: data.getLanguage(),
		} as ILanguages;
	}

);

export const loadLanguage = createAsyncThunk(
	'languages/loadLanguage',
	async (data: IStringsWithMethods) => {
		return await transformObjStrings(data) as IStrings | null;
	}
);

export const setScrollWidth = createAsyncThunk(
	'modal/setScrollWidth',
	async (data: React.RefObject<HTMLDivElement>) => {
		const elem = data.current;
		let res: number = 0;
		if (elem !== null) {
			elem.style.overflowY = `scroll`;
			res = await elem.offsetWidth - elem.clientWidth;
			elem.style.overflowY = `auto`;
		};


		return await res as number;
	}
);

