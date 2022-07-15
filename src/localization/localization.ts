import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { IAddress, IBottomBtn, ICatalogMenu, IDporMenu, IFooter, IFooterMenu, ILoginBoxStrings, IMenuItem, IMoreMenuItem, IScearchDrop, ISlides, ISundry } from "../types/LocalizationTypes";
import { headerTextEn, headerTextRu, headerTextUa } from "./localHeader";
import { footerTextEn, footerTextRu, footerTextUa } from './localFooter';
import { sliderTextEn, sliderTextRu, sliderTextUa } from './localSlider';
import { IRegBoxStrings } from './../types/LocalizationTypes';
import { loginTextEn, loginTextRu } from './localLogin';
import { itemCardTextEn, itemCardTextRu, itemCardTextUa } from "./localItemCart";

export interface IHeaderStings {
	sundry: ISundry;
	bottomBtn: IBottomBtn;
	menuItem: IMenuItem;
	dropMenu: IDporMenu;
	scearch: IScearchDrop;
	dropMoreMenu: { [property: string]: IMoreMenuItem, };
	catalogMenu: ICatalogMenu;
	userMenuItem: IMenuItem;

};

export interface IFooterStings extends IAddress {
	store: IFooterMenu;
	client: IFooterMenu;
	cooperation: IFooterMenu;
	footer: IFooter;
};

export interface ILoginStings {
	login: ILoginBoxStrings;
	reg: IRegBoxStrings;

};
export interface IItemCard {
	buyBtn: string;
	newBanner: string;
	hitBanner: string;
};

export interface IStrings {
	header: IHeaderStings;
	footer: IFooterStings;
	slider: ISlides;
	login: ILoginStings;
	itemCard: IItemCard;
};



export interface IStringsWithMethods extends IStrings, LocalizedStringsMethods {

};

export let strings: IStringsWithMethods = new LocalizedStrings({
	en: {
		header: headerTextEn,
		footer: footerTextEn,
		slider: sliderTextEn,
		login: loginTextEn,
		itemCard: itemCardTextEn,
	},
	ua: {
		header: headerTextUa,
		footer: footerTextUa,
		slider: sliderTextUa,
		login: loginTextRu,
		itemCard: itemCardTextUa,
	},
	ru: {
		header: headerTextRu,
		footer: footerTextRu,
		slider: sliderTextRu,
		login: loginTextRu,
		itemCard: itemCardTextRu,
	},
});

