import styled from 'styled-components';
import { gap, media, width } from './common/Styles/theme';

export const Main = styled.main`
	margin-left: ${gap.general};
	margin-right: ${gap.general};
	flex: 1;
	flex-direction: column;
	display: flex;

	${media.Max_Width} {
		max-width: ${width.max_width};
		margin-right: auto;
		margin-left: auto;
		width: 100%;
	}
`;
