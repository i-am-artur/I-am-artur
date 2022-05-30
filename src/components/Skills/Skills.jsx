import _ from './skills.module.css';

import { useContext } from 'react';
import { LanguageContext } from '../../App';
import content from './content';
import Introduction from './components/Introduction';
import CMS from './components/CMS';

export default function Skills() {
	const [language] = useContext(LanguageContext);

	return (
		language && (
			<>
				<h1 className='page_heading'>{content.heading[language]}</h1>
				<Introduction language={language} />
				<CMS language={language} />
				<p>
					{content.development[language]}
					<ul className={_.technologies}>
						{content.technologies.map((technology) => (
							<li className={_.technology}>
								{technology.name}
								<img
									className={_.technology_image}
									src={require(`../../assets/${technology.image}`)}
									alt={technology.name}
								/>
							</li>
						))}
					</ul>
				</p>
			</>
		)
	);
}
