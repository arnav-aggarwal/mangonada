import axios from 'axios';
export const FETCH_REPO = 'FETCH_REPO';
export const FETCH_REPOLIST = 'FETCH_REPOLIST';

const repoUrlStart = '/api/repos/';
const repoListUrlStart = '/users/'
const repoListUrlEnd = '/repos'

/**
 * Format the get request and return an action with the type
 * FETCH_REPO.
 * @param  {string} gitURL - the url of the repo
 * @return {Object} The action
 */
export default function fetchRepo(gitURL) {
  const index = gitURL.indexOf('.com/')+5;
  const fullUrl = repoUrlStart + gitURL.slice(index);
  const request = axios.get(fullUrl);
  return {
    type: FETCH_REPO,
    payload: request,
  };
}

export function fetchRepoList(username) {
  const fullUrl = repoListUrlStart + username + repoListUrlEnd;
  const request = axios.get(fullUrl);
  console.log('fetchReoList')
  return {
    type: FETCH_REPOLIST,
    payload: request,
  };
}