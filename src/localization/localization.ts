import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";


export interface IHeaderStings {
	btnEnter?: string;
	btnSearch?: string;
};

interface IStrings extends LocalizedStringsMethods {
	header: IHeaderStings,
};


export let strings: IStrings = new LocalizedStrings({
	en: {
		header: {
			btnEnter: 'login',
			btnSearch: 'search',
		},
	},
	ua: {
		header: {
			btnEnter: 'увійти',
			btnSearch: 'пошук',
		},
	},
	ru: {
		header: {
			btnEnter: 'войти',
			btnSearch: 'поиск',
		},
	},
});

