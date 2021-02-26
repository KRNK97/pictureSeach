import React from "react";
import './SearchBar.css';

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
      <div className="w-100 text-center">
        <form
          action=""
          className="p-4 rounded w-sm-65 w-100 mx-auto"
          onSubmit={this.submitHandler}
        >
          <label htmlFor="search" className="">
            <span className="display-4">Search Image</span>
          </label>
          <input
            type="text"
            className="form-control rounded shadow-sm"
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
