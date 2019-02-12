import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Root from '../components/Root';
import PropTypes from 'prop-types';

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				{this.props.children}
			</React.Fragment>
		);
	}
}

Layout.propTypes = {};

export default Layout;
