import React, { Component } from "react";
import API from "../../utils/API";
import "./results.css";

class Results extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    API.savedBooks()
      .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
      .catch((err) => console.error(err));
  }

  handleSave = (book) => {
    if (this.state.savedBooks.map((book) => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then((deletedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.filter(
              (book) => book._id !== deletedBook._id
            ),
          })
        )
        .catch((err) => console.error(err));
    } else {
      API.saveBook(book)
        .then((savedBook) =>
          this.setState({
            savedBooks: this.state.savedBooks.concat([savedBook]),
          })
        )
        .catch((err) => console.error(err));
    }
  };

  render() {
    return (
      <div data-aos="fade-up" data-aos-duration="2500" data-aos-delay="500">
        {!this.props.books.length ? (
          <h4 className="text-center">No results to display</h4>
        ) : (
          <div>
            {this.props.books.map((result) => (
              <div className="card mb-3" key={result._id}>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      alt={result.title}
                      className="img-fluid"
                      src={result.image}
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title">
                        {result.title} by {result.authors}
                      </h5>
                      <p className="card-text">{result.description}</p>
                      <div>
                        <a
                          href={result.link}
                          className="btn badge-pill btn-outline-dark mt-3"
                          target="_blank"
                        >
                          View
                        </a>
                        <button
                          onClick={() => this.handleSave(result)}
                          className="btn badge-pill btn-outline-info mt-3 ml-3"
                        >
                          {this.state.savedBooks
                            .map((book) => book._id)
                            .includes(result._id)
                            ? "Remove"
                            : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Results;
