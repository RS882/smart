import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import { IAddress, IBottomBtn, ICatalogMenu, IDporMenu, IFooter, IFooterMenu, IMenuItem, IMoreMenuItem, IScearchDrop, ISlides, ISundry } from "../types/LocalizationTypes";
import { headerTextEn, headerTextRu, headerTextUa } from "./localHeader";
import { footerTextEn, footerTextRu, footerTextUa } from './localFooter';
import { sliderTextEn, sliderTextRu, sliderTextUa } from './localSlider';

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
	slider: ISlides;
};

export interface IStringsWithMethods extends LocalizedStringsMethods {
	header: IHeaderStings;
	footer: IFooterStings;
	slider: ISlides;
};

export let strings: IStringsWithMethods = new LocalizedStrings({
	en: {
		header: headerTextEn,
		footer: footerTextEn,
		slider: sliderTextEn,
	},
	ua: {
		header: headerTextUa,
		footer: footerTextUa,
		slider: sliderTextUa,
	},
	ru: {
		header: headerTextRu,
		footer: footerTextRu,
		slider: sliderTextRu,
	},
});

