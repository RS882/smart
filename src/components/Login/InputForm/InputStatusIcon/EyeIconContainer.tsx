import React, { FC } from 'react';
import EyeIcon from './EyeIcon';
import { useAppDispatch, useAppSelector } from './../../../../redux/hooks';
import { changeIsShowPassword, selectIsShowPassword } from '../../../../redux/LoginSlice';


const EyeIconContainer: FC = (props) => {
	const dispatch = useAppDispatch();
	const showText = (arg: boolean) => dispatch(changeIsShowPassword(arg));
	const isShow = useAppSelector(selectIsShowPassword)
	return <EyeIcon isShow={isShow} showText={showText} />

};

export default EyeIconContainer;