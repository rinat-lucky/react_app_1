import React from 'react';
import './search-panel.css'

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  updateSearch = (e) => {
    const { value } = e.target;
    if (value !== ' ') {
      const term = value;
      this.setState({term});
      this.props.onUpdateSearch(term);
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Найти сотрудника"
        className="form-control search-input"
        value={this.state.term}
        onChange={this.updateSearch}
      />
    );
  }
};

export default SearchPanel;