import React, { useEffect } from "react";
import "./input.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Form(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div className="container" data-aos="fade-right" data-aos-duration="2000">
      <form>
        <div className="form-group">
          <label htmlFor="search">
            <h4>Enter the book name or author</h4>
          </label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Type the book name or author"
            id="search"
          />
          <button onClick={props.handleFormSubmit} className="btn mt-3 mb-5">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
