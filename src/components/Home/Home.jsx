import { Avatar, Wrapper } from './home.styled';
import { Text } from '../../common/Styles/global';

import avatar from '../../assets/avatar.jpg';

import { useContext } from 'react';
import { LanguageContext } from '../../App';
import { content } from './content';

export default function Home() {
	const [language] = useContext(LanguageContext);

	return (
		<Wrapper>
			<Text>&gt; {content.greeting[language]}</Text>
			<Text>&gt; {content.name[language]}</Text>
			<Avatar width='150' height='150' src={avatar} alt='avatar' />
			<Text>&gt; {content.offer[language]}</Text>
		</Wrapper>
	);
}
