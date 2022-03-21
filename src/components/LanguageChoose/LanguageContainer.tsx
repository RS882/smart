import React, { FC } from 'react';
import { closeMenuLng, selectIsLangMenu, selectLanguage, setActiveLanguage, toggleShowMenuLng } from '../../redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Languages from './Languages';
import { strings } from '../../localization/localization';


const LanguageContainer = () => {

	const dispatch = useAppDispatch();
	const language = useAppSelector(selectLanguage);
	const isMenu = useAppSelector(selectIsLangMenu);

	const onClickBtnLng = () => {
		dispatch(toggleShowMenuLng());
	};

	const cnahgeActiveLng = (e: string) => {
		strings.setLanguage(e);
		dispatch(setActiveLanguage(e));
		dispatch(closeMenuLng());
	};

	return (
		<Languages {...language} onClickBtnLng={onClickBtnLng}
			cnahgeActiveLng={cnahgeActiveLng} isMenu={isMenu} />

	);
};

export default LanguageContainer;