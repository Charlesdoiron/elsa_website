import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Home from '../containers/Home';
import ContactPage from './../containers/ContactPage';
import ProjectPage from './../containers/ProjectPage';
import AdminPage from './../containers/AdminPage';
import Layout from './../containers/Layout';
import PropTypes from 'prop-types';

const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Switch>
					<Redirect exact from="/" to="/accueil" component={Home} />
					<Route exact path="/accueil" component={Home} />

					<Route exact path="/contact" component={ContactPage} />
					<Route path="/projet/:id" component={ProjectPage} />
					<Route path="/admin/login" component={AdminPage} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;
