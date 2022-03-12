import React, { FC } from 'react';
import { selectLanguage } from '../redux/appSlice';
import { useAppSelector } from '../redux/hooks';
import Languages from './Languages';


const LanguageContainer = () => {


	const language = useAppSelector(selectLanguage);

	const onClickBtn = () => {
		console.log('111');

	}

	return (
		<Languages {...language} onClickBtn={onClickBtn} />

	);
};

export default LanguageContainer;