import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

export interface IBottomBtn {
	home: string;
	catalog: string;
	cart: string;
	search: string;
	more: string;
}

export interface IHeaderStings {
	btnEnter: string;
	btnSearch: string;
	workTime: string[];
	bottomBtn: IBottomBtn | any;
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
			bottomBtn: {
				home: 'home',
				catalog: 'catalog',
				cart: 'cart',
				search: 'search',
				more: 'more',
			},
		},
	},
	ua: {
		header: {
			btnEnter: 'увійти',
			btnSearch: 'пошук',
			workTime: ['Пн-нд: з ', ' до '],
			bottomBtn: {
				home: 'головна',
				catalog: 'каталог',
				cart: 'кошик',
				search: 'пошук',
				more: 'ще',
			},
		},
	},
	ru: {
		header: {
			btnEnter: 'войти',
			btnSearch: 'поиск',
			workTime: ['Пн-вс: с ', ' до '],
			bottomBtn: {
				home: 'главная',
				catalog: 'каталог',
				cart: 'корзина',
				search: 'поиск',
				more: 'ещё',
			},
		},
	},
});

