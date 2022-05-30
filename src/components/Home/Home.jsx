import _ from './home.module.css';
import avatar from '../../assets/avatar.jpg';

import { useContext } from 'react';
import { LanguageContext } from '../../App';
import { content } from './content';

export default function Home() {
	const [language] = useContext(LanguageContext);

	return (
		<div className={_.content}>
			<p>&gt; {content.greeting[language]}</p>
			<p>&gt; {content.name[language]}</p>
			<img
				width='150'
				height='150'
				className={_.avatar}
				src={avatar}
				alt='avatar'
			/>
			<p>&gt; {content.offer[language]}</p>
		</div>
	);
}
