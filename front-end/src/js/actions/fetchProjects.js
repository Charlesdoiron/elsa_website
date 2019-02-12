export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export const fetchProjects = () => {
	return dispatch =>
		dispatch({
			type: FETCH_PROJECTS,
			payload: ['projet1', 'projet2', 'projets3']
		});
};
