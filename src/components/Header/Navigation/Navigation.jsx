import _ from './navigation.module.css';

import { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { LanguageContext } from '../../../App';
import { navText } from './content';

export default function Navigation({ isDisplayed }) {
	const [language] = useContext(LanguageContext);

	const navStyles = useMemo(() => {
		const styles = [_.nav];
		if (isDisplayed) styles.push(_.nav_displayed);
		return styles.join(' ');
	}, [isDisplayed]);

	const styleNavLink = (isActive) => {
		const style = [_.nav_link];
		if (isActive) style.push(_.nav_link_active);
		return style.join(' ');
	};

	return (
		language && (
			<nav className={navStyles}>
				<ul className={_.menu}>
					{/*TODO: Delete if after*/}
					{Object.keys(navText).map((key) => (
						<li className={_.menu__item} key={key}>
							{navText[key].path ? (
								<NavLink
									className={({ isActive }) => styleNavLink(isActive)}
									to={navText[key].path}
								>
									{navText[key][language].toUpperCase()}
								</NavLink>
							) : (
								navText[key][language].toUpperCase()
							)}
						</li>
					))}
				</ul>
			</nav>
		)
	);
}
