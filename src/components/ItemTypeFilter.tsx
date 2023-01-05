import React, { FC, useState } from 'react';

import { Form, Formik } from 'formik';
import styled from 'styled-components';

import SelectTypeFilter from './SelectTypeFilter';
import { useAppSelector } from '../redux/hooks';
import { selectActivLng } from './../redux/LanguageSlice';
import { useEffect } from 'react';


interface IItemTypeFilter {
	itemType: string[];
	setSelectedItemType: React.Dispatch<React.SetStateAction<string>>;
};
const StyledForm = styled(Form)`
	width:100%;
	
`;

const ItemTypeFilter: FC<IItemTypeFilter> = ({ itemType, setSelectedItemType }) => {

	const [isLangChange, setIsLangChange] = useState(false);

	const aktivLang = useAppSelector(selectActivLng);

	useEffect(() => {
		setIsLangChange(true);
	}, [aktivLang]);



	return (
		<Formik
			initialValues={{ filterType: itemType[0], }}
			onSubmit={(values, actions) => {

				if (isLangChange) {
					actions.resetForm();
					setIsLangChange(false);
				} else {
					setSelectedItemType(values.filterType)
				}

			}}>
			{() => (
				<StyledForm>
					<SelectTypeFilter name='filterType' itemTypeName={itemType} isLangChange={isLangChange} />
				</StyledForm>
			)}
		</Formik>
	);
};

export default React.memo(ItemTypeFilter);