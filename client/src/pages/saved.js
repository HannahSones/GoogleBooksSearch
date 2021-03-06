import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results/results";

class Saved extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <h3>My saved books</h3>
        <Results books={this.state.savedBooks} />
      </div>
    );
  }
}

export default Saved;
