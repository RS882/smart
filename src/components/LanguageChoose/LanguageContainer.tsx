import React, { FC } from 'react';
import { closeMenuLng, selectIsLangMenu, selectLanguage, setActiveLanguage, toggleShowMenuLng } from '../../redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Languages from './Languages';
import { strings } from '../../localization/localization';
import { ArrowFn } from '../../types/fnTypes';


const LanguageContainer: FC = () => {

	const dispatch = useAppDispatch();
	const language = useAppSelector(selectLanguage);
	const isMenu = useAppSelector(selectIsLangMenu);

	const onClickBtnLng: ArrowFn = () => {
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