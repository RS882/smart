import React from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import Button from './../Button';


const StyledFlexLC = styled(Flex)`
	text-transform: capitalize;
	font-size: 14px;
	span{
		padding-left:5px;
	}
`

const LaguageBtn = () => {
	return (
		<Button width='auto'>
			<StyledFlexLC className='_icon-change' margin='0 10px' ><span>language</span></StyledFlexLC>
		</Button>
	);
};

export default LaguageBtn;