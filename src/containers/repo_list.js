import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepoList } from '../actions/index.js';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class RepoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameEntered: '',
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    const { repoList } = nextProps;
    const repoNames = JSON.parse(repoList).map(item => item.name + '<br>');
    document.getElementById('printedList').innerHTML = repoNames;
  }

  /**
   * Handles url input from the user into the main searchbar
   * @param  {Object} event
   */
  onInputChange(event) {
    this.setState({ usernameEntered: event.target.value });
    setTimeout(() => console.log(this.state.usernameEntered), 10);
  }

  /**
   * Handles when the user presses enter in the url searchbar.
   * Calls fetchRepo which makes a request to our backend.
   * @param  {Object} event
   */
  onFormSubmit(event) {
    if(event.keyCode === 13){
      event.preventDefault();
      if (this.props.onSubmit) {
        this.props.onSubmit(event.target.value);
      }

      this.props.fetchRepoList(this.state.usernameEntered);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <TextField 
          style = {{width: 250}}
          onChange={this.onInputChange.bind(this)}
          value={this.state.usernameEntered}
          onKeyDown={this.onFormSubmit.bind(this)}
          hintText="Enter github username"
          id="usernameField"
        />
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return { repoList: state.repoList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRepoList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
