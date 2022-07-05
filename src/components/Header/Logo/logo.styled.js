import styled from 'styled-components';
import { colors, fontSize } from '../../../common/Styles/theme';

import { Link } from 'react-router-dom';

export const Heading = styled.h2`
	margin: 0;
	font-size: ${fontSize.logo};
`;

export const HomeLink = styled(Link)`
	white-space: nowrap;
	color: ${colors.emblem};
`;
