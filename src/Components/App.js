import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import DisplayItem from './DisplayItem';

export class App extends Component {
  state = {
    searchresults: [],
    clear: false,
  };
  onSubmit = (term) => {
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${term}&origin=*`
      )
      .then((data) => {
        this.setState({ searchresults: data.data.query.search, clear: false });
      });
  };
  Clear = () => {
    this.setState({ clear: true });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} onClear={this.Clear} />

        {this.props.clear ? null : (
          <DisplayItem item={this.state.searchresults} />
        )}
      </div>
    );
  }
}

export default App;
