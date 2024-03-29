import React, { FC } from 'react';
import { closeMenuLng, selectIsLangMenu, selectLanguage, setActiveLanguage, toggleShowMenuLng } from '../../redux/LanguageSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Languages from './Languages';
import { strings } from '../../localization/localization';
import { ArrowFn } from '../../types/fnTypes';
import { loadLanguage } from '../../redux/Thunk/thunkInitApp';


import { changeIsBodyLock } from '../../redux/ModalSlice';
import { setIsFeching } from '../../redux/PreloaderSlice';



const LanguageContainer: FC = () => {

	const dispatch = useAppDispatch();
	const language = useAppSelector(selectLanguage);
	const isMenu = useAppSelector(selectIsLangMenu);



	const onClickBtnLng: ArrowFn = () => {
		dispatch(toggleShowMenuLng());
	};

	const cnahgeActiveLng = (e: string) => {
		Promise.all([
			dispatch(setIsFeching(true)),
			dispatch(changeIsBodyLock(true)),
		])
			.then(() => {
				strings.setLanguage(e);
				dispatch(setActiveLanguage(e));
				dispatch(loadLanguage(strings));
				dispatch(closeMenuLng());
			})
			.then(() => {
				setTimeout(() => {
					dispatch(setIsFeching(false))
					dispatch(changeIsBodyLock(false))
				}, 500)

			});

	};

	return (
		<>

			<Languages {...language} onClickBtnLng={onClickBtnLng}
				cnahgeActiveLng={cnahgeActiveLng} isMenu={isMenu} />
		</>
	);
};

export default LanguageContainer;