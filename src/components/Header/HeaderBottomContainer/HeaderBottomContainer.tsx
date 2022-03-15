import React, { FC } from 'react';
import styled from 'styled-components';

import Flex from '../../Flex';
import HeaderBottom, { IHeaderBottomItem } from './HeaderBottom';



interface IHeaderBottom {
	strings: any;
};



const StyledHeaderBottomContainer = styled(Flex)`
	position: fixed;
	bottom: 0;
	left: 0;
	max-height: 64px;
	z-index:100;
   width: 100%;
	background-color: ${props => props.theme.color.darkBlue || '#2A5275'};
	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		padding: 0 104px;
	};
	@media ${props => props.theme.media?.desktop || `(min-width: 991.98px)`} {
		display:none;
	};
	`

const HeaderBottomContainer: FC<IHeaderBottom> = (props) => {

	const NlArray: IHeaderBottomItem[] = [{ name: '', classItem: '_icon-home', },
	{ name: 'catalog', classItem: '_icon-catalog', },
	{ name: 'cart', classItem: '_icon-cart', },]
		.map((e) => ({ ...e, itemText: props.strings[e.name || 'home'] }))

	const BtnArray: IHeaderBottomItem[] =
		[{ name: 'search', classItem: '_icon-search_rev', },
		{ name: 'more', classItem: '_icon-dots', },]
			.map((e) => ({ ...e, itemText: props.strings[e.name || 'home'] }));

	return (
		<StyledHeaderBottomContainer justufy={'space-between'}>
			<HeaderBottom NlArray={NlArray} BtnArray={BtnArray} />
		</StyledHeaderBottomContainer>


	);
};

export default HeaderBottomContainer;