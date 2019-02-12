import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const routes = [{ label: 'Accueil', root: 'accueil' }, { label: 'Contact', root: 'contact' }];

class Header extends Component {
	render() {
		return (
			<div>
				<ul>
					{routes.map(route => (
						<Link to={`/${route.root}`} key={route.root}>
							<li>{route.label}</li>
						</Link>
					))}
				</ul>
			</div>
		);
	}
}

Header.propTypes = {};

export default Header;
