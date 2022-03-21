import React, { FC } from 'react';
import { IHeaderTel } from '../../../types/HeaderTypes';
import { showPhoneNum } from '../../../utilits/functions';
import HeaderTel from '../../Header/HeaderTel/HeaderTel';


const FoorerTelContainer: FC<IHeaderTel> = (props) => {
	return (
		<div>
			<HeaderTel workTime={props.workTime} showPhoneNum={showPhoneNum}
				direction='column' fontSize='20px' fontWeight='600' />
		</div>
	);
};

export default FoorerTelContainer;