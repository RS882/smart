import React, { FC } from 'react';
import { StyledForgotPasswordBtn } from '../LoginForm';

interface IUserAgreementBtn {
	regText?: {
		text: string;
		link: string;
	}
};

const showUserAgr = () => {
	console.log('show');

}

const UserAgreementBtn: FC<IUserAgreementBtn> = (props) => {
	return (
		<div>
			<span> {props.regText ? props.regText.text : ''}</span>
			<StyledForgotPasswordBtn onClick={showUserAgr} type='button'>{props.regText ? props.regText.link : ''}</StyledForgotPasswordBtn>
		</div>
	);
};

export default UserAgreementBtn;