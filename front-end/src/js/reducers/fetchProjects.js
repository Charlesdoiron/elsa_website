import { FETCH_PROJECTS } from '../actions/fetchProjects';

const fetchProjects = (state = [], action) => {
	switch (action.type) {
		case FETCH_PROJECTS:
			return {
				...state,
				projects: action.payload
			};
		default:
			return state;
	}
};

export default fetchProjects;
