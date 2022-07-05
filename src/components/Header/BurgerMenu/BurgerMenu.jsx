import './burger-menu.styled.js';

import { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { Burger, BurgerLine } from './burger-menu.styled';

export default function BurgerMenu({ clickedOutside, onClick }) {
	useEffect(() => {
		document.addEventListener('click', (event) => {
			if (!isBurgerMenuClicked(event, Burger, BurgerLine)) {
				clickedOutside();
			}
		});
	}, [clickedOutside]);

	//TODO: create burger
	return (
		<Burger onClick={onClick}>
			<BurgerLine />
			<BurgerLine />
			<BurgerLine />
		</Burger>
	);
}

BurgerMenu.propTypes = {
	clickedOutside: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired,
};

function isBurgerMenuClicked(event, Burger, BurgerLine) {
	const clickedTarget = event.target;
	const classList = clickedTarget.classList;

	return (
		classList.contains(Burger.styledComponentId) ||
		classList.contains(BurgerLine.styledComponentId)
	);
}
