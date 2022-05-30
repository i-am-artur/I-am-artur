import _ from './burger-menu.module.css';

import { useEffect } from 'react';

export default function BurgerMenu({ clickedOutside, onClick }) {
	useEffect(() => {
		document.addEventListener('click', (event) => {
			if (!isBurgerMenuClicked(event)) {
				clickedOutside();
			}
		});
	}, [clickedOutside]);

	return (
		<button className={_.burger} onClick={onClick}>
			<span className={_.burger_line}></span>
			<span className={_.burger_line}></span>
			<span className={_.burger_line}></span>
		</button>
	);
}

function isBurgerMenuClicked(event) {
	const clickedTarget = event.target;
	const classList = clickedTarget.classList;

	return classList.contains(_.burger) || classList.contains(_.burger_line);
}
