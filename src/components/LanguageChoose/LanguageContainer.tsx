import React, { FC } from 'react';
import { selectIsLangMenu, selectLanguage, setActiveLanguage, toggleShowMenu } from '../redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Languages from './Languages';
import { strings } from '../../localization/localization';


const LanguageContainer = () => {

	const dispatch = useAppDispatch();
	const language = useAppSelector(selectLanguage);
	const isMenu = useAppSelector(selectIsLangMenu);

	const onClickBtn = () => {
		dispatch(toggleShowMenu());
	};

	const cnahgeActiveLng = (e: any) => {
		strings.setLanguage(e);
		dispatch(setActiveLanguage(e));
	};
	console.log(strings);

	return (
		<Languages {...language} onClickBtn={onClickBtn}
			cnahgeActiveLng={cnahgeActiveLng} isMenu={isMenu} />

	);
};

export default LanguageContainer;