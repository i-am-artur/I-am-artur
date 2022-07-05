import styled from 'styled-components';
import { colors, gap, media, width } from '../../common/Styles/theme';

export const Wrapper = styled.div`
	background-color: ${colors.dark};
`;

export const Component = styled.header`
	margin-left: auto;
	margin-right: auto;
	padding: ${gap.original};
	max-width: ${width.reachable};
	justify-content: space-between;
	align-items: flex-start;
	position: relative;
	display: flex;

	${media.Desktop} {
		align-items: baseline;
		justify-content: space-evenly;
	}
`;

export const Options = styled.div`
	display: flex;
	align-items: center;
`;
