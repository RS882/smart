import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../../redux/hooks';
import { selectItemHitBannersText, selectItemNewBannersText } from '../../../../redux/LanguageSlice';


interface IItemBannerType {
	bannerType: string;
};

const StyledBanner = styled.div<IItemBannerType>`
	display:flex;
	justify-content:center;
	align-items:center;
	text-transform:capitalize;
	height:31px;
	width:auto;
	border-radius:4px;
	margin-bottom:10px;
	padding: 0 16px;
	
	pointer-events: auto;
	color:${props => props.theme.color.text.mainLight || '#fff'};
	background-color:${props => props.bannerType === 'new' ? '#48A69B' :
		props.bannerType === 'bestseller' ? '#D73838' : ''};
`;

const ItemBanner: FC<IItemBannerType> = (props) => {
	const bannerNewText = useAppSelector(selectItemNewBannersText);
	const bannerHittext = useAppSelector(selectItemHitBannersText);

	const bannerText = props.bannerType === 'new' ? bannerNewText :
		props.bannerType === 'bestseller' ? bannerHittext : '';

	return (
		<StyledBanner bannerType={props.bannerType} >
			{bannerText}
		</StyledBanner>
	);
};

export default ItemBanner;