import React, { Component } from 'react';

// define a new class SearchBar
// give it access to all functionality from
// Component class in React
class SearchBar extends Component {
  //this is how we init state in a class
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  // every class must have a render method
  render() {
    return (
    <div>
      <input
        value={this.state.term}
        onChange={(event) => this.setState({term: event.target.value}) } />
    </div>
  );
  }
}

export default SearchBar;
