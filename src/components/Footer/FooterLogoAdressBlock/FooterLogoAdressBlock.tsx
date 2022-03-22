import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';

import FooterTelContainer from './FooterTelContainer';
import FooterLogo from './FooterLogo';
import FooterAddress from './FooterAddress';
import { IAddress } from '../../../types/LocalizationTypes';

interface IFooterTelProps extends IAddress {
	workTime: string[];
}



const FooterLogoAdressBlock: FC<IFooterTelProps> = (props) => {
	return (
		<Flex justufy='flex-start' direction='column' align='flex-start'>
			<FooterLogo />
			<FooterTelContainer workTime={props.workTime} />
			<FooterAddress address={props.address} />
		</Flex>
	);
};

export default FooterLogoAdressBlock;