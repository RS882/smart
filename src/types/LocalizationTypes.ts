
export interface IBottomBtn {
	[property: string]: string;

};

export interface IMenuItem {
	[property: string]: string;
};

export interface ISundry {
	btnEnter: string;
	btnSearch: string;
	workTime: string[];
};

export interface IAddress {
	address: string[];
}
export interface IFooterMenu {
	titleName: string;
	item: { [property: string]: string; };

};