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
    <div className='search-bar'>
      <input
        value={this.state.term}
        onChange={event => setInterval(this.onInputChange(event.target.value), 2000)} />
    </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
