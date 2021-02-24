import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onChangeHandler = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div>
        <form
          action=""
          className="shadow-sm p-4 border border-secondary rounded"
        >
          <label htmlFor="search" className="h5">
            Search Image
          </label>
          <input
            type="text"
            className="form-control"
            name="search"
            id="search"
            onChange={this.onChangeHandler}
            value={this.state.term} // react must control all data
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
