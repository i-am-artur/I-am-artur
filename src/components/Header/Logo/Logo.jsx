import _ from './logo.module.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../../../App';
import routeList from '../../AppRouter/routeList';

export default function Logo() {
	const [language] = useContext(LanguageContext);
	const logo = { en: 'I am { Arthur }', ru: 'Я { Артур }' };

	return (
		<h2 className={_.logo_wrapper}>
			<Link className={_.logo} to={routeList.home}>
				{logo[language]}
			</Link>
		</h2>
	);
}
