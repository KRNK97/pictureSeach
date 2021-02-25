import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { searchResults: [], message: "" };

  // callback that we will pass as prop to get the search term from SearchBar when form is submitted
  // then we will make api call with the search term to get the results
  onSearchSubmit = (term) => {
    axios
      .get(`https://api.unsplash.com/search/photos`, {
        params: {
          query: term,
        },
        headers: {
          Authorization:
            "Client-ID rmtU-Ox6R_2v_3KVtTnxbVXOg5Q-9nB5oVPWnIakc4M",
        },
      })
      .then(
        (response) => {
          this.setState({
            searchResults: response.data.results,
          });
          this.setState({
            message: String(this.state.searchResults.length) + " results found",
          });
        },
        (error) => {
          console.log(error);
        }
      );

    this.setState({ message: "loading results . . ." });
  };

  render() {
    return (
      <div className="container mt-4">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <span className="my-2 text-center text-muted">
          {this.state.message}
        </span>
        <ImageList images={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
