import _ from './skills.module.css';

import { useContext } from 'react';
import { LanguageContext } from '../../App';
import content from './content';

export default function Skills() {
	const [language] = useContext(LanguageContext);

	return (
		language && (
			<>
				<h1 className={_.heading}>{content.heading[language]}</h1>
				<div className={_.content}>knkl</div>
			</>
		)
	);
}
