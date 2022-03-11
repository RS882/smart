import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";


export interface IHeaderStings {
	btnEnter: string,
};

interface IStrings extends LocalizedStringsMethods {
	header: IHeaderStings,
};


export let strings: IStrings = new LocalizedStrings({
	en: {

		header: {
			btnEnter: 'login',
		},
	},
	uk: {
		header: {
			btnEnter: 'увійти',
		},
	},

	ru: {
		header: {
			btnEnter: 'войти',
		},
	},
});

