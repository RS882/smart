import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IStrings } from './../localization/localization';
import { loadLanguage, setLanguages } from "./Thunk/thunkInitApp";


export interface ILanguages {
	activeLanguage: string;
	languages: string[];
}

interface ILang {
	language: ILanguages;
	isMenu: boolean;
	langStrings: IStrings | null;

}

const initialState: ILang = {
	language: {
		activeLanguage: ``,
		languages: [],
	},
	isMenu: false,
	langStrings: null,

}
// Reducer of the language switching
const LanguageSlice = createSlice({

	name: 'languages',
	initialState,
	reducers: {
		setActiveLanguage: (state, action: PayloadAction<string>) => {
			state.language.activeLanguage = action.payload;
		},

		toggleShowMenuLng: (state) => {
			state.isMenu = !state.isMenu;
		},
		closeMenuLng: (state) => {
			state.isMenu = false;
		},


	},
	extraReducers: {

		[setLanguages.fulfilled.type]: (state, action: PayloadAction<ILanguages>) => {
			state.language = action.payload;
		},

		[loadLanguage.fulfilled.type]: (state, action: PayloadAction<IStrings | null>) => {
			state.langStrings = action.payload;
		},

	},

})

export const { setActiveLanguage, toggleShowMenuLng, closeMenuLng, } = LanguageSlice.actions;

export const selectLanguage = (state: RootState) => state.languages.language;
export const selectIsLangMenu = (state: RootState) => state.languages.isMenu;
export const selectActivLng = (state: RootState) => state.languages.language.activeLanguage;
export const selectLangStiringsHeader = (state: RootState) => state.languages.langStrings!.header;
export const selectLangStiringsHeaderBottomBtn = (state: RootState) => state.languages.langStrings!.header.bottomBtn;
export const selectLangStiringsHeaderCatalogMenu = (state: RootState) => state.languages.langStrings!.header.catalogMenu;
export const selectLangStiringsHeaderDropMenu = (state: RootState) => state.languages.langStrings!.header.dropMenu;
export const selectLangStiringsHeaderDropMoreMenu = (state: RootState) => state.languages.langStrings!.header.dropMoreMenu;
export const selectLangStiringsHeaderMenuItem = (state: RootState) => state.languages.langStrings!.header.menuItem;
export const selectLangStiringsHeaderScearch = (state: RootState) => state.languages.langStrings!.header.scearch;
export const selectLangStiringsHeaderSundry = (state: RootState) => state.languages.langStrings!.header.sundry;
export const selectLangStiringsFooter = (state: RootState) => state.languages.langStrings!.footer;
export const selectLangStiringsFooterAddress = (state: RootState) => state.languages.langStrings!.footer.address;
export const selectLangStiringsFooterClient = (state: RootState) => state.languages.langStrings!.footer.client;
export const selectLangStiringsFooterCooperationt = (state: RootState) => state.languages.langStrings!.footer.cooperation;
export const selectLangStiringsFooterFooter = (state: RootState) => state.languages.langStrings!.footer.footer;
export const selectLangStiringsFooterStore = (state: RootState) => state.languages.langStrings!.footer.store;
export const selectLangStiringsSlideText = (state: RootState) => state.languages.langStrings!.slider.bannerText;
export const selectLoginText = (state: RootState) => state.languages.langStrings!.login.login;
export const selectRegText = (state: RootState) => state.languages.langStrings!.login.reg;
export const selectUserMenuText = (state: RootState) => state.languages.langStrings!.header.userMenuItem;
export const selectItemBuyBtnText = (state: RootState) => state.languages.langStrings!.itemCard.buyBtn;
export const selectItemNewBannersText = (state: RootState) => state.languages.langStrings!.itemCard.newBanner;
export const selectItemHitBannersText = (state: RootState) => state.languages.langStrings!.itemCard.hitBanner;
export const selectItemsBoxName = (state: RootState) => state.languages.langStrings!.itemCard.itemsBox;
export const selectViewAllItems = (state: RootState) => state.languages.langStrings!.itemCard.allItems;
export const selectBannersItemText = (state: RootState) => state.languages.langStrings!.itemCard.bannerItemText;
export const selectCartTextTitle = (state: RootState) => state.languages.langStrings!.cart.cartOrder.title;
export const selectCartTextBtnNext = (state: RootState) => state.languages.langStrings!.cart.cartOrder.btnNext;
export const selectCartTextBtnChange = (state: RootState) => state.languages.langStrings!.cart.cartOrder.btnChange;
export const selectCartTextOrder = (state: RootState) => state.languages.langStrings!.cart.cartOrder.order;
export const selectCartTextDeliveryMethod = (state: RootState) => state.languages.langStrings!.cart.cartOrder.deliveryMethod;
export const selectCartTextPaymentMethod = (state: RootState) => state.languages.langStrings!.cart.cartOrder.paymentMethod;
export const selectDeliveryMethods = (state: RootState) => [state.languages.langStrings!.cart.cartDelivery.deliveryMethod.delivery.method,
state.languages.langStrings!.cart.cartDelivery.deliveryMethod.pickup.method];
export const selectCartTextRecipient = (state: RootState) => state.languages.langStrings!.cart.cartOrder.recipient;
export const selectCartTextTotal = (state: RootState) => state.languages.langStrings!.cart.cartOrder.total;
export const selectCartDeliveryTextCity = (state: RootState) => state.languages.langStrings!.cart.cartDelivery.city;
export const selectCartDeliveryTextDelivery = (state: RootState) => state.languages.langStrings!.cart.cartDelivery.deliveryMethod.delivery;
export const selectCartDeliveryTextPickup = (state: RootState) => state.languages.langStrings!.cart.cartDelivery.deliveryMethod.pickup;
export const selectDateMonDayText = (state: RootState) => state.languages.langStrings!.cart.dateMonDay;
export const selectPaymentMethodTaxt = (state: RootState) => state.languages.langStrings!.cart.cartPaymentMethod.paymentMethod;
export const selectRecipientTaxt = (state: RootState) => state.languages.langStrings!.cart.recipient;
export const selectGeneralInformationTaxt = (state: RootState) => state.languages.langStrings!.privatOffice.generalInformation;
export const selectPersonalDataText = (state: RootState) => state.languages.langStrings!.privatOffice.personalData;
export const selectchangePasswortText = (state: RootState) => state.languages.langStrings!.privatOffice.changePasswort;
export const selectFavotitsPrivatOfficeText = (state: RootState) => state.languages.langStrings!.privatOffice.favotites;
export const selectFavotitsSortText = (state: RootState) => state.languages.langStrings!.privatOffice.favoritsSort;


export default LanguageSlice.reducer