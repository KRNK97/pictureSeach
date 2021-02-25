import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // update state when input changes
  onChangeHandler = (e) => {
    this.setState({ term: e.target.value });
  };

  // handle form submission
  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state.term);
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <form
          action=""
          className="shadow-sm p-4 border border-secondary rounded"
          onSubmit={this.submitHandler}
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
