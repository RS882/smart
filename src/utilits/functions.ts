import { IStrings, IStringsWithMethods } from "../localization/localization";


export type telFn = (phoneNum: string | undefined) => string;

//преобразуем шаблон пока тел номера из +3801111111 в +38 (011) 111 11 11
export const showPhoneNum: telFn = phoneNum => {
	if (!phoneNum) return '';
	const res: string[] = phoneNum.split('');
	// изменем массив arr : на позиции указанные в массиве arrModPos вставляем строку modElem
	const arrMod = (arr: string[], arrModPos: number[], modElem: string = ' ') => arrModPos.forEach(e => arr.splice(e, 0, modElem));
	arrMod(res, [3, 7, 11, 14]);
	arrMod(res, [4], '(');
	arrMod(res, [8], ')');
	return res.join('');
};

// получает объект без литералов начинающихся на _
export const transformObjStrings = (obj: IStringsWithMethods) => {
	let stringsText: IStrings = { ...obj };
	let key: keyof typeof stringsText;
	for (key in stringsText) {
		(key[0] !== '_') ? stringsText = { ...stringsText } : delete stringsText[key];
	}
	return stringsText;
};

//----------------------------------------------------------------
export const isRetina = () => {/*проверка Retina*/
	return !!((window.matchMedia && (window.matchMedia
		('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)')
		.matches || window.matchMedia
			('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)')
			.matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2))
		&& /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
};
