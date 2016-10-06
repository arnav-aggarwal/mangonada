/**
 * The top-most component. Does not do anything except render
 * SearchBar and RepoDisplay.
 */

import React, { Component } from 'react';
import RepoDisplay from '../containers/repo_display';
import Chart from '../containers/chart';
import WordCloud from '../containers/word_cloud';
import BubbleChart from '../containers/bubble_chart';
import RepoList from '../containers/repo_list';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_repo : "",
      repoList: "",
    };

    this.updateUrl = this.updateUrl.bind(this);
    this.updateRepoList = this.updateRepoList.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.params.user != this.props.params.user) ||
        (prevProps.params.repo != this.props.params.repo)) {

      const newUrlEntered = `${this.props.params.user}/${this.props.params.repo}`;
      this.updateUrl(newUrlEntered);
    }
  }

  updateUrl(newUserRepo) {
    this.setState({ user_repo : newUserRepo });
  }

  updateRepoList(repoList) {
    this.setState({ repoList });
  }

  render() {
    return (
      <div>
        <RepoDisplay />
        <Chart />
        <WordCloud />
        <BubbleChart />
        <RepoList repoList={this.state.repoList} onSubmit={this.updateRepoList} />
      </div>
    );
  }
}
