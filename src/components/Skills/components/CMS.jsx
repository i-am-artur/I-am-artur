import content from '../content';
import * as PropTypes from 'prop-types';
import _ from '../skills.module.css';

export default function CMS({ language }) {
	return (
		<p>
			{content.cms.introduction[language]}
			<ul className={_.cms_list}>
				{Object.keys(content.cms.cms_list).map((key) => (
					<li className={_.cms_list_item} key={key}>
						-{' '}
						<a
							href={content.cms.cms_list[key].link}
							target='_blank'
							rel='noreferrer'
						>
							<img
								className={_.cms_image}
								height='29'
								src={require(`../../../assets/${content.cms.cms_list[key].image}`)}
								alt='cms'
							/>
						</a>{' '}
						- {content.cms.cms_list[key][language]}
					</li>
				))}
			</ul>
		</p>
	);
}

CMS.propTypes = { language: PropTypes.string.isRequired };
