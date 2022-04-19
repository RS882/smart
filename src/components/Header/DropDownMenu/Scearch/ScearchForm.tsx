import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { exampleText } from './exempleText';
import ShowScearchText from './ShowScearchText';

interface InputScearchProps {
	placeholderText: string;

}

const StyledInputScearch = styled.input.attrs<InputScearchProps>(props => ({
	type: "text",
	placeholder: props.placeholderText,
}))`
	height: 48px;
	width: 100%;
	border-radius:4px;
	border: 1px solid ${props => props.theme.color.blue || ' #4878A6'};
	padding-left:20px;
	&::placeholder{
		font-weight: 400;
		font-size: 16px;
		line-height: 120%;
		color:${props => props.theme.color.text.second || '#838688'};
	}
`;

const ScearchForm: FC<InputScearchProps> = (props) => {

	const [inputValue, setInputValue] = useState(``);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};


	return (
		<>
			<StyledInputScearch {...props} value={inputValue} onChange={changeHandler} />
			<ShowScearchText inputValue={inputValue} exampleText={exampleText} />
		</>
	)
};

export default ScearchForm;

