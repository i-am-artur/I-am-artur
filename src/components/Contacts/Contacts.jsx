import _ from './contacts.module.css';
import messengers from '../../assets/messengers.gif';
import email from '../../assets/Gmail-Logo.gif';

import { useContext } from 'react';
import { LanguageContext } from '../../App';

export default function Contacts() {
	const [language] = useContext(LanguageContext);
	const content = {
		heading: { en: 'Contacts', ru: 'Контакты' },
		name: { en: 'Arthur', ru: 'Артур' },
		slogan: {
			en: 'Development of internet solutions',
			ru: 'Разработка интернет решений',
		},
		email: 'adrenalin247@gmail.com',
	};

	return (
		language && (
			<>
				<h1 className={_.heading}>{content.heading[language]}</h1>
				<div className={_.content}>
					<h3>{content.name[language]}</h3>
					<div className={_.slogan}>{content.slogan[language]}</div>
					<div className={_.contact__type}>
						<img
							height='30'
							src={messengers}
							alt='phone number and messengers'
						/>
						: <a href='tel:+38 098 569 3051'>+38 098 569 3051</a>
					</div>
					<div className={_.contact__type}>
						<img height='22' src={email} alt='email' />:{' '}
						<a href={`mailto:${content.email}`}>{content.email}</a>
					</div>
				</div>
			</>
		)
	);
}
