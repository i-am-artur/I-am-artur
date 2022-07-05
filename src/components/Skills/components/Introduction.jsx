import content from '../content';
import * as PropTypes from 'prop-types';

import { Text } from '../../../common/Styles/global';

export default function Introduction({ language }) {
	return (
		<Text>
			{content.introduction.p1[language]}{' '}
			<a
				href={content.introduction.p2.links.epam[language]}
				target='_blank'
				rel='noreferrer'
			>
				&lt;{content.introduction.p2.text}&gt;
			</a>
			{content.introduction.p3[language]}
		</Text>
	);
}

Introduction.propTypes = { language: PropTypes.string.isRequired };
