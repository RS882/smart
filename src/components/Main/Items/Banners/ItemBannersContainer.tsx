import React, { FC } from 'react';
import styled from 'styled-components';
import ItemBanner from './ItemBanner';

export interface IItemBanners {
	newItem?: number | boolean;
	bestseller?: number | boolean;
}

const StyledBannersContainer = styled.div`
	display:flex;
	flex-direction:column;
	align-items:flex-end;
	position:absolute;
	top: 10px;
	right:10px;
	height: calc(100% - 10px) ;
	width: calc(100% - 10px);
	pointer-events: none;

`;

const ItemBannersContainer: FC<IItemBanners> = ({ newItem, bestseller, ...props }) => {


	return (
		<StyledBannersContainer>
			{newItem ? <ItemBanner bannerType='new' /> : null}
			{bestseller ? <ItemBanner bannerType='bestseller' /> : null}
		</StyledBannersContainer>
	);
};

export default React.memo(ItemBannersContainer);