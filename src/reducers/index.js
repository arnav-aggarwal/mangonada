import { combineReducers } from 'redux';
import RepoReducer from './reducer_currentRepo';
import RepoListReducer from './reducer_repoList';

const rootReducer = combineReducers({
  currentRepo: RepoReducer,
  repoList: RepoListReducer
});

export default rootReducer;
