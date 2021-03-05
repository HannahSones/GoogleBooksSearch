import React from "react";
import "./input.css"


function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h4>Enter the book name or author</h4></label>
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
