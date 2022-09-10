import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';


interface IBreadcrumbsProps {
	link: string;
	text: string;
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

const Breadcrumbs: FC<IBreadcrumbsProps> = (props) => {
	//const url = useLocation().pathname;
	const url = '/advantages/howToBuy/iwuwuqiu/uoppp/939382/1ssss';

	const urlArr = url.split('/').map(e => '/' + e)


	const linkElem = urlArr.map((e, i, arr) => {
		const text = e.slice(1)


		return arr.length !== i + 1 ? <StyledBreadcrumbsLink to={i !== 0 ? e : '/'} key={e + i}>
			{i !== 0 ? text : 'Home'} <StyledBreadcrumbsArrow className={'_icon-arrow-right'} />
		</StyledBreadcrumbsLink > :
			<StyledBreadcrumbsActive >{i !== 0 ? text : 'Home'}</StyledBreadcrumbsActive>;

	})


	return (
		<>
			{/* {url !== '/' && url !== '/cart' ? */}
			<StyledBreadcrumbsBox>
				{linkElem}
			</StyledBreadcrumbsBox>
			{/* : null} */}
		</>
	);
};

export default React.memo(Breadcrumbs);