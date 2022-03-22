import React, { FC } from 'react';
import styled from 'styled-components';
import { IAddress } from '../../../types/LocalizationTypes';
import Flex from '../../Flex';

const StyledAddressElem = styled.div`
	&:not(:last-child) {
		margin-bottom:5px;
	}	
`;


const FooterAddress: FC<IAddress> = (props) => {

	const AddressElem: JSX.Element[] = props.address.map((e, i) =>
		<StyledAddressElem key={e + i}> {e}</StyledAddressElem>)
	return (
		<Flex direction='column' align='flex-start' justufy='flex-start'>
			{AddressElem}
		</Flex>
	);
};

export default FooterAddress;