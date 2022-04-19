
export interface IBottomBtn {
	[property: string]: string;

};

export interface IMenuItem {
	[property: string]: string;
};
export interface IScearchDrop {
	[property: string]: string;
};

export interface ICatalogMenu {
	[property: string]: string;
};

export interface ISundry {
	btnEnter: string;
	btnSearch: string;
	workTime: string[];
};

export interface IDporMenu {
	title: {
		catalog: string;
		search: string;
		more: string;
	}
};

export interface IMoreMenuItem {
	menuText: string;
	subMenu?: { [property: string]: string; }[];
};


export interface IAddress {
	address: string[];
}
export interface IFooterMenu {
	titleName: string;
	item: { [property: string]: string; };
};
export interface IFooter {
	[property: string]: string;
};

export interface ISlides {
	bannerText: string;
};

export interface ILoginBoxStrings {
	title: string;
	emailOrTel: string;
	password: string;
	forgotPassword: string;
	renemberMe: string;
	loginBtn: string;
	goToRegBtn: string;
};
export interface IRegBoxStrings {
	title: string;
	name: string;
	email: string;
	tel: string;
	createPassword: string;
	regText: { text: string, link: string, };
	regBtn: string;
	goToLoginBtn: string;

};