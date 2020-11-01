import React from "react";
import SearchForm from "./SearchForm";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";

class EmployeeContainer extends React.Component {
// set initial state
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      search: "",
      results: [],
    }
  }

  // when component mounts, get a list of all the employees
  componentDidMount() {
    API.search()
      .then(res => {
        this.setState({
          employees: res.data.results,
          results: res.data.results
        })
      })
      .catch(err => console.log(err));
  };

  //when the input changes in the search box, change the value of the search state
  handleInputChange = event => {
    const search = event.target.value.toLowerCase();
    this.setState({ search : search });

    const employees = this.state.employees;

    if (search) {
      const searchResults = employees.reduce((accumulator, employee) => {
        if (
          employee.name.first.toLowerCase().includes(search) || employee.name.last.toLowerCase().includes(search) ||
          employee.email.toLowerCase().includes(search) || employee.phone.includes(search)
        ) {
          accumulator.push(employee);
        }
        return accumulator;
      }, []);
      console.log("search resutls: ", searchResults);
      this.setState({
        results: searchResults
      });
    }

  };

  render() {
    return (
      <div className="container">
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeTable employees={this.state.results} />
      </div>
    );
  };
}

export default EmployeeContainer;