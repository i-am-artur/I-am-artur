import { Heading, HomeLink } from './logo.styled';

import { useContext } from 'react';

import { LanguageContext } from '../../../App';
import routeList from '../../AppRouter/routeList';

export default function Logo() {
	const [language] = useContext(LanguageContext);
	const logo = { en: 'I am { Arthur }', ru: 'Я { Артур }' };

	return (
		<Heading>
			<HomeLink to={routeList.home}>{logo[language]}</HomeLink>
		</Heading>
	);
}
