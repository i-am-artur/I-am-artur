import * as PropTypes from 'prop-types';

import { Text } from '../../../common/Styles/global';
import content from '../content';
import { TechnologyList, Technology } from '../skills.styled';

export default function Technologies({ language }) {
	return (
		<>
			<Text>{content.development[language]}</Text>
			<TechnologyList>
				{content.technologies.map((technology) => (
					<Technology key={technology.name}>
						{technology.isVisible && technology.name}
						<img
							src={require(`../../../assets/skills/${technology.image}`)}
							alt={technology.name}
						/>
					</Technology>
				))}
			</TechnologyList>
		</>
	);
}

Technologies.propTypes = { language: PropTypes.string.isRequired };
