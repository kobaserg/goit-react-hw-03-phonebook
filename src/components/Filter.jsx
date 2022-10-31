import React from 'react';

export class Filter extends React.Component {
  handleFilter = event => {
    this.props.filterList(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Find contact by Name</h3>
        <label>
          <input type="text" onChange={this.handleFilter}></input>
        </label>
      </div>
    );
  }
}
