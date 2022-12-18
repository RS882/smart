import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';
import { selectGeneralInformationTaxt } from '../../redux/LanguageSlice';
import { selectUserData } from '../../redux/LoginSlice';
import Button from '../Button';
import noAvatar from '../../assets/noAvatar.png';


export const StyledPrivatOfficebox = styled.div`
	margin: 0 20px 50px 20px;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'}{
		margin-bottom:60px;
	};
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		margin: 0 0px 0px 135px;
	}
`;



const StyledName = styled.div`
	font-weight: 600;
	font-size: 24px;
	margin-bottom:30px;
	@media ${props => props.theme.media?.desktop || '(width >= 991.98px)'} {
		font-weight: 700;
		font-size: 28px;
	}
`;

const StyledAvatarAndUserInfoBox = styled.div`
	margin-bottom:30px;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'}{
	display: flex;
	}
`;

const StyledUserInfoBox = styled.div`
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'}{
	margin-left:30px;
	}
`;

const StyledAvatarBox = styled.div`
	height:101px;
	width:101px;
	`;

const SyledAvatar = styled.img`
	height:100%;
	width:100%;
	border-radius: 5px;
`;

const StyledUserInformation = styled.div`
	margin-top:10px;
	
`;
const StyledArticle = styled.div`
margin-bottom:20px;
`;

const StyledArticleText = styled.span`

`;

const StyledArticleLink = styled(Link)`
	color: ${props => props.theme.color.darkBlue || '#2A5275'};
	font-weight: 600;
	transition: all 0.3s ease 0s;
	&:hover{
		color: ${props => props.theme.color.blue || '#4878A6'};
	}
`;

const StyledBtn = styled.div`
	width:100%;
	@media ${props => props.theme.media?.tablet || '(width >= 767.98px)'} {
		width: 310px;
		
	};
`

const GeneralInformation = () => {

	const navigate = useNavigate();

	const user = useAppSelector(selectUserData);
	const text = useAppSelector(selectGeneralInformationTaxt);

	const regDate = new Date(Date.parse(user.registrationDate));
	const addNullAfter = (num: number): string => num > 0 && num < 10 ? `0${num}` : `${num}`;
	const regDateText: string = `${regDate.getDate()}-${addNullAfter(regDate.getMonth() + 1)}-${regDate.getFullYear()}`;

	const getArticleText = (text: string): JSX.Element => <><StyledArticleText>{text}</StyledArticleText>{` `} </>;

	const onClickGoToPersData = () => navigate('/privateOffice/personalData');

	return (
		<StyledPrivatOfficebox>
			<StyledName>{user.name}</StyledName>
			<StyledAvatarAndUserInfoBox>
				<StyledAvatarBox>
					<SyledAvatar src={user.avatar || noAvatar} height='101' width='101' alt='User avatar' />
				</StyledAvatarBox>
				<StyledUserInfoBox>
					<StyledUserInformation> {`${text.regData} ${regDateText}`}</StyledUserInformation>
					<StyledUserInformation> {`${text.numOfOrders} ${user.shoppingHistory.length}`}</StyledUserInformation>
				</StyledUserInfoBox>
			</StyledAvatarAndUserInfoBox>

			<StyledArticle>
				{getArticleText(text.articleText[0])}
				<StyledArticleLink to='/privateOffice/personalData'>{text.articleText[1]} </StyledArticleLink>
				{getArticleText(text.articleText[2])}
				<StyledArticleLink to='/privateOffice/changePassword'>{text.articleText[3]} </StyledArticleLink>
				{getArticleText(text.articleText[4])}
				<StyledArticleLink to='/privateOffice/shoppingHistory'>{text.articleText[5]} </StyledArticleLink>
				{getArticleText(text.articleText[6])}
				<StyledArticleLink to='/privateOffice/favorites'>{text.articleText[7]} </StyledArticleLink>
			</StyledArticle>

			<StyledBtn>
				<Button width='100%' onClick={onClickGoToPersData}>{text.btnText}</Button>
			</StyledBtn>

		</StyledPrivatOfficebox>
	);
};

export default GeneralInformation;