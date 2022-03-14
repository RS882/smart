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
}