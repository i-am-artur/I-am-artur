import * as PropTypes from 'prop-types';

import { Text } from '../../../common/Styles/global';
import { CMS_IMAGE, CMS_ITEM, CMS_LIST } from '../skills.styled';
import content from '../content';

export default function CMS({ language }) {
	return (
		<>
			<Text>{content.cms.introduction[language]}</Text>
			<CMS_LIST>
				{Object.keys(content.cms.cms_list).map((key) => (
					<CMS_ITEM key={key}>
						-{' '}
						<a
							href={content.cms.cms_list[key].link}
							target='_blank'
							rel='noreferrer'
						>
							<CMS_IMAGE
								height='29'
								src={require(`../../../assets/skills/${content.cms.cms_list[key].image}`)}
								alt='cms'
							/>
						</a>{' '}
						- {content.cms.cms_list[key][language]}
					</CMS_ITEM>
				))}
			</CMS_LIST>
		</>
	);
}

CMS.propTypes = { language: PropTypes.string.isRequired };
