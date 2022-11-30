
import { IStrings, IStringsWithMethods } from "../localization/localization";


export type telFn = (phoneNum: string | undefined) => string;

//We convert a phone number of a telephone number from +380111111 V +38 (011) 111 11 11
export const showPhoneNum: telFn = phoneNum => {
	if (!phoneNum) return '';
	const res: string[] = phoneNum.split('');
	// We change the arrase Arr: At the positions indicated in the arrmodpos array, we insert the linem line
	const arrMod = (arr: string[], arrModPos: number[], modElem: string = ' ') => arrModPos.forEach(e => arr.splice(e, 0, modElem));
	arrMod(res, [3, 7, 11, 14]);
	arrMod(res, [4], '(');
	arrMod(res, [8], ')');
	return res.join('');
};

// receives an object without literals starting on _
export const transformObjStrings = (obj: IStringsWithMethods) => {
	let stringsText: IStrings = { ...obj };
	let key: keyof typeof stringsText;
	for (key in stringsText) {
		(key[0] !== '_') ? stringsText = { ...stringsText } : delete stringsText[key];
	}
	return stringsText;
};

//----------------------------------------------------------------
/*verification Retina*/
export const isRetina = () => {
	return !!((window.matchMedia && (window.matchMedia
		('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)')
		.matches || window.matchMedia
			('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)')
			.matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2))
		&& /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
};
// We convert the phone number- leave only numbers
export const converTelNumber = (tel: string | undefined) => {

	if (tel !== undefined) {
		return tel.split('').filter(e => /^\d$/.test(e)).join('')
	}
};
//---------------------------------------------
// We enter the data of the array in localStorage
export const addArrayToLocalStore = <T>(arr: T[], baseKey: string): void => {
	arr.map((e, i) => localStorage.setItem(baseKey + i, e + ''));
};
//--------------------------
// We get a date in format string 'yyyy-mm-dd'
export const getDateIsMoreTodayForString = (day: number = 0): string => {
	const dateNow = new Date();
	const dayNowPlus = dateNow.getDate() + day;
	return `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dayNowPlus < 10 ? `0${dayNowPlus}` : `${dayNowPlus}`}`;
};




