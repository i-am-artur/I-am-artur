import { Options, Component, Wrapper } from './header.styled';

import { useState } from 'react';

import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import LanguageSelect from './LanguageSelect/LanguageSelect';

export default function Header() {
	const [isNavDisplayed, setNavDisplayed] = useState(false);

	return (
		<Wrapper>
			<Component>
				<Logo />
				<Navigation isDisplayed={isNavDisplayed} />
				<Options>
					<LanguageSelect />
					<BurgerMenu
						clickedOutside={() => setNavDisplayed(false)}
						onClick={() => setNavDisplayed(!isNavDisplayed)}
					/>
				</Options>
			</Component>
		</Wrapper>
	);
}
