import React, { FC } from 'react';
import styled from 'styled-components';
import ScearchForm from './ScearchForm';

import { selectLangStiringsHeaderScearch } from './../../../../redux/LanguageSlice';
import { useAppSelector } from '../../../../redux/hooks';

const StyledScearch = styled.div`
	width: 100%;
	margin-top:30px;
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		margin-top:50px;
	};
`;

const StyledMobil = styled.div`
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display:none;
	};
`;
const StyledTablet = styled.div`
	display:none;	
	@media ${props => props.theme.media?.tablet || '(min-width: 767.98px)'} {
		display:block;
	};
`;


const Scearch: FC = (props) => {

	const scearch = useAppSelector(selectLangStiringsHeaderScearch);
	const plaeceholderMob = scearch !== null ? scearch.plaeceholderMob : '';
	const plaeceholderTab = scearch !== null ? scearch.plaeceholderTab : '';
	return (
		<StyledScearch>
			<StyledMobil>
				<ScearchForm placeholderText={plaeceholderMob} />
			</StyledMobil>
			<StyledTablet>
				<ScearchForm placeholderText={plaeceholderTab} />
			</StyledTablet>
		</StyledScearch>
	);
};

export default Scearch;