import styled from 'styled-components';
import { fontSize } from '../../common/Styles/theme';

export const Wrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 600px;
	width: 100%;
	flex: 1;
	flex-direction: column;
	display: flex;
	justify-content: center;
	font-size: ${fontSize.large};
`;

export const Avatar = styled.img`
	display: block;
	margin: 15px auto;
	border-radius: 50%;
	width: 155px;
`;
