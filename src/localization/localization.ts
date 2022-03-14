import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";


export interface IHeaderStings {
	btnEnter: string;
	btnSearch: string;
	workTime: string[];
};

interface IStrings extends LocalizedStringsMethods {
	header: IHeaderStings,
};


export let strings: IStrings = new LocalizedStrings({
	en: {
		header: {
			btnEnter: 'login',
			btnSearch: 'search',
			workTime: ['Mo-sn: fm ', ' to '],
		},
	},
	ua: {
		header: {
			btnEnter: 'увійти',
			btnSearch: 'пошук',
			workTime: ['Пн-нд: з ', ' до '],
		},
	},
	ru: {
		header: {
			btnEnter: 'войти',
			btnSearch: 'поиск',
			workTime: ['Пн-вс: с ', ' до '],
		},
	},
});

