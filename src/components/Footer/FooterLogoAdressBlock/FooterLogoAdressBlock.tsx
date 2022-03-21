import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';
import FoorerTelContainer from './FoorerTelContainer';
import FooterLogo from './FooterLogo';

interface IFooterTelProps {
	workTime: string[];
}

const StyledFooterLogoAdressBlock = styled(Flex)`
	border: 1px solid #000;
`;


const FooterLogoAdressBlock: FC<IFooterTelProps> = (props) => {
	return (
		<StyledFooterLogoAdressBlock justufy='flex-start' direction='column'>
			<FooterLogo />
			<FoorerTelContainer workTime={props.workTime} />
		</StyledFooterLogoAdressBlock>
	);
};

export default FooterLogoAdressBlock;