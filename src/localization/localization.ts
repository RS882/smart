import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

export interface IBottomBtn {
	home: string;
	catalog: string;
	cart: string;
	search: string;
	more: string;
};

export interface IMenuItem {
	catalog: string;
	about: string;
	stock: string;
	installment: string;
	servise: string;
	wholesale: string;
	contacts: string;
}

export interface ISundry {
	btnEnter: string;
	btnSearch: string;
	workTime: string[];

}

export interface IHeaderStings {
	sundry: ISundry;
	bottomBtn: IBottomBtn | any;
	menuItem: IMenuItem;
};

interface IStrings extends LocalizedStringsMethods {
	header: IHeaderStings,
};


export let strings: IStrings = new LocalizedStrings({
	en: {
		header: {
			sundry: {
				btnEnter: 'login',
				btnSearch: 'search',
				workTime: ['Mo-sn: fm ', ' to '],
			},
			bottomBtn: {
				home: 'home',
				catalog: 'catalog',
				cart: 'cart',
				search: 'search',
				more: 'more',
			},
			menuItem: {
				catalog: 'Product catalog',
				about: 'about us',
				stock: 'stock',
				installment: 'installment 0|0|18',
				servise: 'Service and Warranty',
				wholesale: 'Wholesale/Dropshipping',
				contacts: 'contacts',
			},
		},
	},
	ua: {
		header: {
			sundry: {
				btnEnter: 'увійти',
				btnSearch: 'пошук',
				workTime: ['Пн-нд: з ', ' до '],
			},
			bottomBtn: {
				home: 'головна',
				catalog: 'каталог',
				cart: 'кошик',
				search: 'пошук',
				more: 'ще',
			},
			menuItem: {
				catalog: 'Каталог товарів',
				about: 'Про компанію',
				stock: 'акція',
				installment: 'розстрочка 0|0|18',
				servise: 'Сервіс та гарантія',
				wholesale: 'Опт/дропшиппінг',
				contacts: 'контакти',
			},
		},
	},
	ru: {
		header: {
			sundry: {
				btnEnter: 'войти',
				btnSearch: 'поиск',
				workTime: ['Пн-вс: с ', ' до '],
			},
			bottomBtn: {
				home: 'главная',
				catalog: 'каталог',
				cart: 'корзина',
				search: 'поиск',
				more: 'ещё',
			},
			menuItem: {
				catalog: 'Каталог товаров',
				about: 'О компании',
				stock: 'акция',
				installment: 'Рассрочка 0|0|18',
				servise: 'Сервис и гарантия',
				wholesale: 'Опт/дропшиппинг',
				contacts: 'контакты',
			},
		},
	},
});

