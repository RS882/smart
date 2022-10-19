import { ErrorMessage, FieldHookConfig, useField } from 'formik';
import React, { FC } from 'react';
import styled from 'styled-components';

import { validateSelectIsEnpty } from '../../../../utilits/validators';

import CartDateBox from '../../CartDateBox';



interface ISelectCityContainer {
	option?: string[];
	title: string;
	placholderText?: string;
	optionPlus?: string[][];
};

export const StyledCitySelect = styled.select`
  width: 100%;
  font: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  -webkit-appearance: none;
   -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  &:not([multiple]) {
  background-repeat: no-repeat;
  background-position: calc(100% - 0.25em) 0.35em;
  background-size: 0.85em auto;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cpath d='M70.3 13.8L40 66.3 9.7 13.8z' fill='%23000'%3E%3C/path%3E%3C/svg%3E");
};
  &::-ms-expand {
  display: none;
};
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



const SelectCityContainer = ({ option, title, placholderText, optionPlus, ...props }: ISelectCityContainer & FieldHookConfig<string> & React.SelectHTMLAttributes<HTMLSelectElement> & React.ClassAttributes<HTMLSelectElement>) => {
	const [field, meta,] = useField({ ...props, validate: props.validate || validateSelectIsEnpty });

	const getOptionElemrnt = (option?: string[], optionPlus?: string[][]) => {
		if (!option && !optionPlus) return null;
		if (optionPlus) {
			return optionPlus!.map((e, i) => <option value={e[0]} key={e[0] + i}>{e[0]}{e[1]}</option>)
		} else {
			return option!.sort().map((e, i) => <option value={e} key={e + i}>{e}</option>)
		};

	};


	console.log(optionPlus?.filter(e => e[0] === field.value)[0][1]);


	return (<div>
		<StyledTitleDateBox>{title}</StyledTitleDateBox>
		<CartDateBox bdColor={meta.error && meta.touched ? '#F15152' : ''}>
			<StyledCitySelect id='city' {...field} {...props}>
				<option value=''>{placholderText || title}</option>
				{getOptionElemrnt(option, optionPlus)}
			</StyledCitySelect>
		</CartDateBox>
		<StyledErrorMessage>	<ErrorMessage name={field.name} /></StyledErrorMessage>
	</div>

	);
};

export default React.memo(SelectCityContainer);