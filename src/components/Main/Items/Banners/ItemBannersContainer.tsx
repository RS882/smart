import React, { FC } from 'react';
import styled from 'styled-components';
import ItemBanner from './ItemBanner';

export interface IItemBanners {
	new?: number | boolean;
	bestseller?: number | boolean;
}

const StyledBannersContainer = styled.div`
	display:flex;
	flex-direction:column;
	align-items:flex-end;
	position:absolute;
	z-index:100;
	top: 10px;
	right:10px;
	height: calc(100% - 10px) ;
	width: calc(100% - 10px);
	pointer-events: none;

`;

const ItemBannersContainer: FC<IItemBanners> = (props) => {


	return (
		<StyledBannersContainer>
			{props.new ? <ItemBanner bannerType='new' /> : null}
			{props.bestseller ? <ItemBanner bannerType='bestseller' /> : null}
		</StyledBannersContainer>
	);
};

export default ItemBannersContainer;