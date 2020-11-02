import React from "react";

function SearchForm(props) {
  return (
    <form className="form-inline">
      <div className="form-group w-75">
        <label htmlFor="search" className="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control w-75"
          placeholder="Search by name, phone, or email"
          id="search"
        />
      </div>
    </form>
  );
};

export default SearchForm;