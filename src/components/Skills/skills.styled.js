import styled from 'styled-components';

export const CMS_LIST = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
`;

export const CMS_ITEM = styled.li`
	margin: 20px 0;
`;

export const CMS_IMAGE = styled.img`
	vertical-align: middle;
`;

export const TechnologyList = styled.ul`
	padding: 0;
	grid-template-columns: repeat(auto-fill, 120px);
	gap: 30px;
	display: grid;
	list-style-type: none;
	margin: auto;
	width: 100%;
	justify-content: space-between;
`;

export const Technology = styled.li`
	height: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: flex-start;
`;
