import _ from './language-select.module.css';

import { useContext } from 'react';

import { LanguageContext } from '../../../App';
import { languages } from '../../../constants';

export default function LanguageSelect() {
	const [language, setLanguage] = useContext(LanguageContext);

	const languageStyles = (lang) => {
		const styles = [_.language];
		if (lang === language) styles.push(_.language_selected);
		return styles.join(' ');
	};

	return (
		<ul className={_.languages}>
			{Object.values(languages).map((language) => (
				<li className={_.language_item} key={language}>
					<button
						onClick={() => setLanguage(language)}
						className={languageStyles(language)}
					>
						{language.toUpperCase()}
					</button>
				</li>
			))}
		</ul>
	);
}
