import styled from 'styled-components';
import { colors, gap, fontSize, media } from '../../../common/Styles/theme';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
	display: ${({ isDisplayed }) => (isDisplayed ? 'block' : 'none')};
	right: 0;
	top: 100%;
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	padding: ${gap.original};
	background-color: ${colors.dark};
	text-align: end;
	font-size: ${fontSize.menuLarge};
	font-weight: bold;

	${media.Desktop} {
		display: flex;
		justify-content: center;
		position: initial;
		padding: 0;
		font-size: ${fontSize.medium};
	}
`;

export const Menu = styled.ul`
	padding: 0;
	margin: 0;
	list-style-type: none;

	${media.Desktop} {
		width: 450px;
		display: flex;
		justify-content: space-evenly;
	}
`;

export const MenuItem = styled.li`
	margin-bottom: 16px;

	${media.Desktop} {
		margin: 0;
	}
`;

export const MenuLink = styled(NavLink)`
	color: white;

	&.active {
		color: ${colors.active};
	}
`;
