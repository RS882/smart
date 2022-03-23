import React, { FC } from 'react';
import styled from 'styled-components';


interface FooterLabelProps {
	item: string;
};

const StyledFooterLabel = styled.div`
	font-size: 13px;
	line-height: 100%;
	color:${props => props.theme.color.text.second || '#838688'};
`

const FooterLabel: FC<FooterLabelProps> = (props) => {
	return (
		<StyledFooterLabel >{props.item}	</StyledFooterLabel>
	);
};

export default FooterLabel;