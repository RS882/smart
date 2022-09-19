import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { IAddress, IBottomBtn, ICatalogMenu, IDporMenu, IFooter, IFooterMenu, ILoginBoxStrings, IMenuItem, IMoreMenuItem, IScearchDrop, ISlides, ISundry } from "../types/LocalizationTypes";
import { headerTextEn, headerTextRu, headerTextUa } from "./localHeader";
import { footerTextEn, footerTextRu, footerTextUa } from './localFooter';
import { sliderTextEn, sliderTextRu, sliderTextUa } from './localSlider';
import { IRegBoxStrings } from './../types/LocalizationTypes';
import { loginTextEn, loginTextRu } from './localLogin';
import { itemCardTextEn, itemCardTextRu, itemCardTextUa } from "./localItemCart";
import { cartOderTextEn, cartOderTextRu, cartOderTextUa } from "./localCartOder";

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
	itemsBox: string[];
	allItems: string;
	bannerItemText: string[];
};

export interface ICartOder {
	title: string;
	btnNext: string;
	btnChange: string;
	order: {
		title: string;
	};
	deliveryMethod: {
		title: string;
	};
	paymentMethod: {
		title: string;
	};
	recipient: {
		title: string;
	};
	total: {
		title: string;
		goodForAmmount: string;
		costOfDelivery: string;
		free: string;
		toPay: string;
		checkout: string;
		byConfirming: string[];

	};

}

export interface IStrings {
	header: IHeaderStings;
	footer: IFooterStings;
	slider: ISlides;
	login: ILoginStings;
	itemCard: IItemCard;
	cart: ICartOder;
};



export interface IStringsWithMethods extends IStrings, LocalizedStringsMethods {

};
// Language selection object
export let strings: IStringsWithMethods = new LocalizedStrings({
	en: {
		header: headerTextEn,
		footer: footerTextEn,
		slider: sliderTextEn,
		login: loginTextEn,
		itemCard: itemCardTextEn,
		cart: cartOderTextEn,
	},
	ua: {
		header: headerTextUa,
		footer: footerTextUa,
		slider: sliderTextUa,
		login: loginTextRu,
		itemCard: itemCardTextUa,
		cart: cartOderTextUa,
	},
	ru: {
		header: headerTextRu,
		footer: footerTextRu,
		slider: sliderTextRu,
		login: loginTextRu,
		itemCard: itemCardTextRu,
		cart: cartOderTextRu,
	},
});

