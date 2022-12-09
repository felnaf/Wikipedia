import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    searchterm: '',
  };
  onSearchTermChange = (e) => {
    this.setState({
      searchterm: e.target.value,
    });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.searchterm);
  };
  // clearBtn = () => {
  //     this.props.onClear();
  //   // this.setState({
  //   //   searchterm: '',
  //   // });
  // };

  render() {
    return (
      <div className="search-bar container">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search keyword...."
              onChange={this.onSearchTermChange}
              value={this.state.searchterm}
            />
            <small className="form-text text-muted">
              Search here and view images
            </small>
          </div>
          <button className="clr" onClick={this.props.onClear}>
            Clear
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
