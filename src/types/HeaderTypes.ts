
export interface IHeaderBottomItem {
	classItem: string;
	itemText?: string | any;
	name: string;
	isCartFull?: boolean;
	isMoreFull?: boolean;
};

export interface IActionArray {
	name: string,
	classIcon: string;
	classIconActive?: string;
};

export interface IHeaderTelProps {
	direction?: string;
	fontSize?: string;
	fontWeight?: string;
};

export interface IHeaderTel {
	workTime: string[];
};