
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