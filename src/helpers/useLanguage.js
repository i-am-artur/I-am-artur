import { useLayoutEffect, useState } from 'react';
import { languages } from '../constants';

export function useLanguage() {
	const [language, changeLanguage] = useState(null);

	useLayoutEffect(() => {
		const defaultLanguage = getUserLanguage() ?? languages.en;
		setLanguage(defaultLanguage);
	}, []);

	const setLanguage = (newLanguage) => {
		if (newLanguage.length !== 2) {
			throw Error(
				'Language string must be 2 characters long and (en, ru and etc.)'
			);
		}
		changeLanguage(newLanguage.toLowerCase());
	};

	return [language, setLanguage];
}

function getUserLanguage() {
	return Object.keys(languages).find(
		(key) => languages[key].toLowerCase() === navigator.language
	);
}
