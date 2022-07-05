import styled from 'styled-components';
import { fontSize, radius, gap, colors } from '../../common/Styles/theme';

export const Projects = styled.ul`
	padding: 0;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 50px;
	display: grid;
	list-style-type: none;
`;

export const ProjectItem = styled.li`
	display: flex;
	flex-direction: column;
	width: 100%;
	font-size: 1rem;
	overflow: hidden;
	background-color: #e5e5e5;
	color: black;
	border: 1px solid black;
	border-radius: ${radius.project};
`;

export const Image = styled.img`
	height: 200px;
	width: 100%;
	object-fit: cover;
	object-position: center;
	border-bottom: 1px solid black;
	border-top-right-radius: ${radius.project};
	border-top-left-radius: ${radius.project};
`;

export const Content = styled.div`
	padding: ${gap.original};
`;

export const Title = styled.h4`
	margin: 0;
	font-size: ${fontSize.original};
`;

export const ProjectLink = styled.a`
	color: ${colors.text};
`;

export const ProjectWithNoLink = styled.button`
	padding: 0;
	margin: 0;
	text-align: start;
	border: none;
	border-radius: ${radius.project};
	color: ${colors.text};
	cursor: pointer;
`;

export const ProjectModalImage = styled.img`
	max-width: 99%;
	max-height: 99%;
`;
