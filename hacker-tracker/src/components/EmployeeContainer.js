import React from "react";
import SearchForm from "./SearchForm";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";

class EmployeeContainer extends React.Component {
// set initial state
  state = {
    results: [],
    search: "",
  };

  // when component mounts, get a list of all the employees
  componentDidMount() {
    API.search()
      .then(res => {
        this.setState({ results: res.data.results})
      })
      .catch(err => console.log(err));
  };

  //when the input changes in the search box, change the value of the search state
  handleInputChange = event => {
    this.setState({ search : event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // need to .map() through the results to return an array of those matching this.state.search
  };

  render() {
    return (
      <div className="container">
        <SearchForm
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable employees={this.state.results} />
      </div>
    );
  };
}

export default EmployeeContainer;