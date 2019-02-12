import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import websiteReducers from './reducers';
import { loadState, saveState } from './localStorage';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const configureStore = () => {
	const persistedState = loadState();
	const store = createStore(websiteReducers, persistedState);

	store.subscribe(
		throttle(() => {
			saveState();
		}, 1000)
	);

	return store;
};

export default configureStore;
