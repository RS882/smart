import React, { FC } from 'react';


interface ShowScearchTextProps {
	inputValue: string;
	exampleText: string;
};

const ShowScearchText: FC<ShowScearchTextProps> = (prors) => {

	const scearchText: string[] = prors.inputValue ? prors.exampleText.split(` `).filter(e => e.includes(prors.inputValue)) : [];
	const inputLength: number = prors.inputValue.length;
	const scearchElem: JSX.Element[] = scearchText.map((e, i) => {
		const startPos: number = e.indexOf(prors.inputValue);
		const partFirst: string = startPos ? e.slice(0, startPos) : '';
		const partFinal: string = startPos + inputLength === e.length - 1 ? e.slice(startPos + inputLength) : '';
		return (
			<div key={e + i}>{partFirst}<strong>{prors.inputValue}</strong>{partFinal}</div>
		)
	})

	return (
		<>
			{scearchElem}
		</>
	)
};

export default ShowScearchText;