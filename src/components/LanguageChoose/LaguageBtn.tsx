import React from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import Button from './../Button';


const StyledFlexLC = styled(Flex)`
	
	
`

const LaguageBtn = () => {
	return (
		<Button width='auto' texTransform='uppercase'>
			<StyledFlexLC margin='0 10px' >ua</StyledFlexLC>
		</Button>
	);
};

export default LaguageBtn;