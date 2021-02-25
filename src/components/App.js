import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // callback that we will pass as prop to get the search term from SearchBar when form is submitted
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="container mt-4">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
