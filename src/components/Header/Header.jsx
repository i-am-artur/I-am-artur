import _ from './header.module.css';

import { useState, useCallback } from 'react';

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import LanguageSelect from './LanguageSelect/LanguageSelect';

export default function Header() {
	const [isNavDisplayed, setNavDisplayed] = useState(false);

	const hideNavigation = useCallback(() => {
		setNavDisplayed(false);
	}, []);

	return (
		<header className={_.header}>
			<Logo />
			<Navigation isDisplayed={isNavDisplayed} />
			<div className={_.options}>
				<LanguageSelect />
				<BurgerMenu
					clickedOutside={hideNavigation}
					onClick={() => setNavDisplayed(!isNavDisplayed)}
				/>
			</div>
		</header>
	);
}
