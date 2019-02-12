import React, { Component } from 'react';

const withAuth = WrappedComponent => {
	class Auth extends Component {
		state = {
			isAuthenticated: true
		};

		render() {
			return <WrappedComponent isAuthenticated={this.state.isAuthenticated} />;
		}
	}
};

export default withAuth;
