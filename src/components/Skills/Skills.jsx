import { useContext } from 'react';

import { PageHeading } from '../../common/Styles/global';
import Introduction from './components/Introduction';
import CMS from './components/CMS';
import Technologies from './components/Technologies';

import { LanguageContext } from '../../App';
import content from './content';

export default function Skills() {
	const [language] = useContext(LanguageContext);

	return (
		language && (
			<>
				<PageHeading>{content.heading[language]}</PageHeading>
				<Introduction language={language} />
				<CMS language={language} />
				<Technologies language={language} />
			</>
		)
	);
}
