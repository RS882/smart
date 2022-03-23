import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { IAddress, IBottomBtn, IFooter, IFooterMenu, IMenuItem, ISundry } from "../types/LocalizationTypes";
import { headerTextEn, headerTextRu, headerTextUa } from "./localHeader";
import { footerTextEn, footerTextRu, footerTextUa } from './localFooter';

export interface IHeaderStings {
	sundry: ISundry;
	bottomBtn: IBottomBtn;
	menuItem: IMenuItem;
};

export interface IFooterStings extends IAddress {
	store: IFooterMenu;
	client: IFooterMenu;
	cooperation: IFooterMenu;
	footer: IFooter;
};

interface IStrings extends LocalizedStringsMethods {
	header: IHeaderStings;
	footer: IFooterStings;
};


export let strings: IStrings = new LocalizedStrings({
	en: {
		header: headerTextEn,
		footer: footerTextEn,
	},
	ua: {
		header: headerTextUa,
		footer: footerTextUa,
	},
	ru: {
		header: headerTextRu,
		footer: footerTextRu,
	},
});

