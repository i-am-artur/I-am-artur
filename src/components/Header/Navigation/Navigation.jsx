import { Menu, Nav, MenuItem, MenuLink } from './navigation.styled';

import { useContext } from 'react';

import { LanguageContext } from '../../../App';
import { navText } from './content';
import * as PropTypes from 'prop-types';

export default function Navigation({ isDisplayed }) {
	const [language] = useContext(LanguageContext);

	return (
		language && (
			<Nav isDisplayed={isDisplayed}>
				<Menu>
					{Object.keys(navText).map((key) => (
						<MenuItem key={key}>
							<MenuLink to={navText[key].path}>
								{navText[key][language].toUpperCase()}
							</MenuLink>
						</MenuItem>
					))}
				</Menu>
			</Nav>
		)
	);
}

Navigation.propTypes = {
	isDisplayed: PropTypes.bool.isRequired,
};
