import { ErrorMessage, FieldHookConfig, useField } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';
import { cityArr } from '../../../../localization/uu';
import { useAppSelector } from '../../../../redux/hooks';
import { selectCartDeliveryTextCity } from '../../../../redux/LanguageSlice';
import ErrorMessageContainer from '../../../Login/InputForm/ErrorMessageContainer';
import CartDateBox from '../../CartDateBox';





const StyledCitySelect = styled.select`
width: 100%;
 font: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  -webkit-appearance: none;
   -moz-appearance: none;
  appearance: none;
  &:not([multiple]) {
  background-repeat: no-repeat;
  background-position: calc(100% - 0.25em) 0.35em;
  background-size: 0.85em auto;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cpath d='M70.3 13.8L40 66.3 9.7 13.8z' fill='%23000'%3E%3C/path%3E%3C/svg%3E");
}
  &::-ms-expand {
  display: none;
}
`;
export const StyledTitleDateBox = styled.div`
	margin-bottom:8px;
`;

const StyledErrorMessage = styled.div`
	font-size:12px;
	font-weight:700;
	color:${props => props.theme.color.red || '#F15152'};
	z-index:30;
`;


const SelectCityContainer = (props: FieldHookConfig<string> & React.SelectHTMLAttributes<HTMLSelectElement> & React.ClassAttributes<HTMLSelectElement>) => {
	const [field, meta,] = useField(props);
	const yourCityName = useAppSelector(selectCartDeliveryTextCity)
	const city = cityArr;
	const cityElem = city.city.sort().map((e, i) => <option value={e} key={e + i}>{e}</option>)

	return (<div>
		<StyledTitleDateBox>{yourCityName}</StyledTitleDateBox>
		<CartDateBox bdColor={meta.error && meta.touched ? '#F15152' : ''}>
			<StyledCitySelect id='city' {...field} {...props} >
				<option value=''>{yourCityName}</option>
				{cityElem}
			</StyledCitySelect>
		</CartDateBox>
		<StyledErrorMessage>	<ErrorMessage name={field.name} /></StyledErrorMessage>
	</div>

	);
};

export default React.memo(SelectCityContainer);