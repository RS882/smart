import React, { FC } from 'react';
import styled from 'styled-components';

interface IShopAdress {
	city: string;
	adress: string;
	mode: string;
};

const StyledArress = styled.div`
	font-size:20px;
	margin-bottom:10px;
`;
const StyledMode = styled.div`
	color:${props => props.theme.color.text.second || '#838688'};
`;

const ShopAdress: FC<IShopAdress> = ({ city, adress, mode }) => {
	return (
		<>
			<StyledArress>{`${city}, ${adress}`}</StyledArress>
			<StyledMode>{mode}</StyledMode>
		</>
	);
};

export default ShopAdress;