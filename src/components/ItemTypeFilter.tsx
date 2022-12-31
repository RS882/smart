import React, { FC, } from 'react';

import { Form, Formik } from 'formik';
import styled from 'styled-components';

import SelectTypeFilter from './PrivateOffice/SelectTypeFilter';


interface IItemTypeFilter {
	itemType: string[];
	setSelectedItemType: React.Dispatch<React.SetStateAction<string>>;
};
const StyledForm = styled(Form)`
	width:100%;
	
`;

const ItemTypeFilter: FC<IItemTypeFilter> = ({ itemType, setSelectedItemType }) => {
	return (
		<Formik
			initialValues={{ filterType: itemType[0], }}
			onSubmit={(values) => { setSelectedItemType(values.filterType) }}>
			{() => (
				<StyledForm>
					<SelectTypeFilter name='filterType' itemTypeName={itemType} />
				</StyledForm>
			)}
		</Formik>
	);
};

export default React.memo(ItemTypeFilter);