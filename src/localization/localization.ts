import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { IBottomBtn, IMenuItem, ISundry } from "../types/LocalizationTypes";
import { headerTextEn, headerTextRu, headerTextUa } from "./localHeader";

export interface IHeaderStings {
	sundry: ISundry;
	bottomBtn: IBottomBtn | any;
	menuItem: IMenuItem;
};

interface IStrings extends LocalizedStringsMethods {
	header: IHeaderStings,
};


export let strings: IStrings = new LocalizedStrings({
	en: {
		header: headerTextEn,
	},
	ua: {
		header: headerTextUa,
	},
	ru: {
		header: headerTextRu,
	},
});

