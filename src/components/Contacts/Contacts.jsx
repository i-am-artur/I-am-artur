import { ContactSource, Content, Slogan } from './contacts.styled';

import messengers from '../../assets/skills/messengers.gif';
import email from '../../assets/skills/Gmail-Logo.gif';

import { useContext } from 'react';
import { LanguageContext } from '../../App';
import { content } from './content';

export default function Contacts() {
	const [language] = useContext(LanguageContext);

	return (
		language && (
			<>
				{/*<PageHeading>{content.heading[language]}</PageHeading>*/}
				<Content>
					<h3>{content.name[language]}</h3>
					<Slogan>{content.slogan[language]}</Slogan>
					<ContactSource>
						<img
							alt='phone number and messengers'
							height='30'
							src={messengers}
						/>
						: <a href='tel:+380985693051'>+38 098 569 3051</a>
					</ContactSource>
					<ContactSource>
						<img alt='email' height='22' src={email} />:{' '}
						<a href={`mailto:${content.email}`}>{content.email}</a>
					</ContactSource>
				</Content>
			</>
		)
	);
}
