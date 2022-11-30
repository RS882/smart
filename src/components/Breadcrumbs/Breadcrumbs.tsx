import React, { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';


interface IBreadcrumbsProps {
	link?: string;
	text: string[];
}

const StyledBreadcrumbsBox = styled.div`
	margin-top:100px;
	display:flex;
`;

const StyledBreadcrumbsLink = styled(Link)`
	display:flex;
	align-items:flex-end;
	margin-right:15px;
`;
const StyledBreadcrumbsArrow = styled.div`
	margin-left:15px;
`;
const StyledBreadcrumbsActive = styled.div`
	color:${props => props.theme.color.text.second || '#838688'};
`;

const Breadcrumbs: FC<IBreadcrumbsProps> = ({ link, text }) => {
	const urlPath = useLocation().pathname;
	const url = link || urlPath;

	const linkElem = url.split('/').map(e => '/' + e).map((e, i, arr) => {
		const textT = text[i];
		return arr.length !== i + 1 ?
			<StyledBreadcrumbsLink to={i !== 0 ? e : '/'} key={e + i}>
				{textT}
				<StyledBreadcrumbsArrow className={'_icon-arrow-right'} />
			</StyledBreadcrumbsLink > :
			<StyledBreadcrumbsActive key={e + i}>{textT}</StyledBreadcrumbsActive>;

	});


	return (
		<>

			<StyledBreadcrumbsBox>
				{linkElem}
			</StyledBreadcrumbsBox>

		</>
	);
};

export default React.memo(Breadcrumbs);