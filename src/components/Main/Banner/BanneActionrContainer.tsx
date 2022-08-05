import React, { FC } from 'react';
import styled from 'styled-components';
import { ArrowFn } from '../../../types/fnTypes';
import Image from '../../Img';


export interface IBannerItemObj {
	srcItem: string;
	text: string;
	w: string;
	h: string;
	typeItem?: string;
	callBack: ArrowFn;
}

interface IBannerItemProps {
	bannerItem: IBannerItemObj;


}

export const StyledBannerContainer = styled.div`
		background: ${props => props.theme.color.lightBlue || '#EDF2F6'};
		border-radius: 8px;
		width: 100%;
	`;
const StyledBannerActionContainer = styled.button < { itemType: string }> `
		height:160px;
		display:flex;
		width: 100%;
		height:100%;
		flex-direction:${props => props.itemType || 'row'};
		justify-content:space-between;
		align-items:center;
		padding:0 30px;
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
			height:180px;
			flex-direction:row;
		};
	
`;

const StyledBannerItemText = styled.div`
	font-weight: 700;	
		@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		font-size: 28px;
	
	};
`;
const StyledBannerItemImg = styled.div`
	
	display: flex;
	justify-content:center;
	align-items:center;
	
`;
const BanneActionrContainer: FC<IBannerItemProps> = (props) => {

	const { typeItem, text, w, h, srcItem, callBack } = props.bannerItem;

	return (
		<StyledBannerContainer>
			<StyledBannerActionContainer onClick={callBack} itemType={typeItem || 'row'}>
				<StyledBannerItemText>{text}</StyledBannerItemText>
				<StyledBannerItemImg>
					<Image alt='Action Product' src={srcItem} width={w} height={h} />
				</StyledBannerItemImg>

			</StyledBannerActionContainer>
		</StyledBannerContainer>
	);
};

export default React.memo(BanneActionrContainer);