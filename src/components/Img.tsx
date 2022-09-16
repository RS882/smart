import React, { FC } from 'react';
import styled from 'styled-components';
import Flex from './Flex';

interface ImgProps {
	src: string,
	alt: string,
	width?: string,
	height?: string,
}

const StyledImg = styled.img.attrs(props => ({
	src: props.src,
	alt: props.alt || 'alt',
	width: props.width || '',
	height: props.height || '',

})) <ImgProps>`
	width: 100%;
	height: 100%;
`;

// component for displaying pictures
const Image: FC<ImgProps> = (props) => {
	return (
		<Flex>
			<StyledImg {...props} />
		</Flex>
	);
};

export default React.memo(Image);