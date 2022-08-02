import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from './../../../../theme';

interface IStars {
	stars: number;
	reviewsNumber: number;

};

interface IStarProps {
	isColor: boolean;
	last: boolean;
};


const StyledStarsAndReviewsContainer = styled.div`
	display: flex;
	padding:2px;
	margin-bottom:20px;
`;

const StyledStarsBox = styled.div`
	display:flex;
	margin-right:12px;
`;
const StyledStar = styled.div<IStarProps>`
	font-size:22px;
	color: ${props => props.isColor ? props.theme.color.yellow : props.theme.color.lightBlue};
	margin-right:${props => props.last ? '0px' : '6px'};
`;

const StyledReviewsBox = styled.button`
	display:flex;
	transition:all 0.3s ease 0s;
		&:hover{
		color: ${props => props.theme.color.yellow};
	}
`;
const StyledReviews = styled.div`
	font-size:22px;
	display:flex;
	padding:2px;


`;
const StyledNumReviews = styled.div`
	font-size:16px;
	margin-left:10px;
`;

const StarsContainer: FC<IStars> = ({ stars, reviewsNumber }) => {

	const starsBlock = [0, 0, 0, 0, 0].map((e, i, arr) =>
		<StyledStar className='_icon-star' isColor={i <= stars - 1} last={i === arr.length - 1} key={`_icon - star ${i} `} />
	);
	return (
		<StyledStarsAndReviewsContainer>
			<StyledStarsBox>{starsBlock}</StyledStarsBox>
			<StyledReviewsBox>
				<StyledReviews className='_icon-message-square' >
					<StyledNumReviews>({reviewsNumber})</StyledNumReviews>
				</StyledReviews>
			</StyledReviewsBox>
		</StyledStarsAndReviewsContainer>
	);
};

export default React.memo(StarsContainer);