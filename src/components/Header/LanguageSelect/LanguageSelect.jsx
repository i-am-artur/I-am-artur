import { Language, LanguageItem, LanguageList } from './language-select.styled';

import { useContext } from 'react';

import { LanguageContext } from '../../../App';
import { languages } from '../../../constants';

export default function LanguageSelect() {
	const [appLanguage, setAppLanguage] = useContext(LanguageContext);

	return (
		<LanguageList>
			{Object.values(languages).map((language) => (
				<LanguageItem key={language}>
					<Language
						selected={appLanguage === language}
						onClick={() => setAppLanguage(language)}
					>
						{language.toUpperCase()}
					</Language>
				</LanguageItem>
			))}
		</LanguageList>
	);
}
