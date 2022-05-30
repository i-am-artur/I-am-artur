import content from '../content';
import * as PropTypes from 'prop-types';

export default function Introduction({ language }) {
	return (
		<p>
			{content.introduction.p1[language]}{' '}
			<a
				href={content.introduction.p2.links.epam[language]}
				target='_blank'
				rel='noreferrer'
			>
				&lt;{content.introduction.p2.text}&gt;
			</a>
			{content.introduction.p3[language]}
		</p>
	);
}

Introduction.propTypes = { language: PropTypes.string.isRequired };
