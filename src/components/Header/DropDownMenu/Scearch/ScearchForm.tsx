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

// const ScearchForm: FC = (props) => {

// 	const validators = Yup.object({
// 		scearchFild: Yup.string()
// 			.min(3, 'Must be 3 characters or more')
// 			.required('Required')
// 	});



// 	return (
// 		<Formik
// 			initialValues={{ scearchFild: '', }}
// 			validationSchema={validators}
// 			onSubmit={values => console.log(values.scearchFild)}
// 		>
// 			{formik => (
// 				<form onSubmit={formik.handleSubmit}>
// 					<label htmlFor="scearchFild">scearchFild
// 						<input
// 							id="scearchFild"
// 							type="text"
// 							{...formik.getFieldProps('scearchFild')}
// 						/>
// 					</label>
// 					{formik.touched.scearchFild && formik.errors.scearchFild ? (
// 						<div>{formik.errors.scearchFild}</div>
// 					) : null}
// 					<StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
// 				</form>
// 			)}
// 		</Formik>
// 	);
// };

// export default ScearchForm;