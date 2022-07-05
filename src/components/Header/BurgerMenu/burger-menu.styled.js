import styled from 'styled-components';
import { media } from '../../../common/Styles/theme';

export const Burger = styled.button`
	margin: 0;
	width: 40px;
	height: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 3px;
	background-color: blue;
	border: none;
	cursor: pointer;

	${media.Desktop} {
		display: none;
	}
`;

export const BurgerLine = styled.span`
	margin: 0;
	height: 3px;
	width: 80%;
	background-color: white;
`;
