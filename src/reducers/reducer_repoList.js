import { FETCH_REPOLIST } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_REPOLIST:
      console.log('reducer_repoList', action.payload.data);
      return action.payload.data || {test: 'test'};
    default:
      return state;
  }
}
