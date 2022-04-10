import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { IAddress, IBottomBtn, ICatalogMenu, IDporMenu, IFooter, IFooterMenu, IMenuItem, IMoreMenuItem, IScearchDrop, ISundry } from "../types/LocalizationTypes";
import { headerTextEn, headerTextRu, headerTextUa } from "./localHeader";
import { footerTextEn, footerTextRu, footerTextUa } from './localFooter';

export interface IHeaderStings {
	sundry: ISundry;
	bottomBtn: IBottomBtn;
	menuItem: IMenuItem;
	dropMenu: IDporMenu;
	scearch: IScearchDrop;
	dropMoreMenu: { [property: string]: IMoreMenuItem, };
	catalogMenu: ICatalogMenu;

};

export interface IFooterStings extends IAddress {
	store: IFooterMenu;
	client: IFooterMenu;
	cooperation: IFooterMenu;
	footer: IFooter;
};

export interface IStrings {
	header: IHeaderStings;
	footer: IFooterStings;
};

export interface IStringsWithMethods extends LocalizedStringsMethods {
	header: IHeaderStings;
	footer: IFooterStings;
};

export let strings: IStringsWithMethods = new LocalizedStrings({
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

