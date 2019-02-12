import { combineReducers } from 'redux';
import fetchProjects from './fetchProjects';

const websiteReducers = combineReducers({
	fetchProjects
});

export default websiteReducers;
