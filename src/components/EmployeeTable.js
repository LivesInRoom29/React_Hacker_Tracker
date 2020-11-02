import React from "react";
import SortArray from "../utils/SortArray";

function EmployeeTable(props) {
  const { employees } = props;
  // To add sorting ability; sortConfig is an object that
  // contains a key for what to sort by and a direction for sorting
  const [ sortConfig, setSortConfig ] = React.useState({
    key: "",
    direction: ""
  });

  const requestSort = key => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }

    setSortConfig({ key, direction });
  }

  const sortedEmployees = SortArray(employees, sortConfig.key, sortConfig.direction);


  return (
    <table className="table table-striped">
      <caption>Our Employees</caption>
      <thead className="thead-dark">
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">
            <button className="sortbtn" type="button" onClick={() => requestSort("name")}>
              Name  <i className="fas fa-sort"></i>
            </button>
          </th>
          <th scope="col">Phone</th>
          <th scope="col">
            <button className="sortbtn" type="button" onClick={() => requestSort("email")}>
              Email  <i className="fas fa-sort"></i>
            </button>
          </th>
          <th scope="col">
            <button className="sortbtn" type="button" onClick={() => requestSort("dob")}>
              DOB  <i className="fas fa-sort"></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee) => {
          const { name, email, phone, picture, dob } = employee;
          // Format the full name by joining first and last
          const fullName = `${name.first} ${name.last}`;
          // Format the DOB into M/DD/YYYY
          const dateDOB = new Date(dob.date).toLocaleDateString();
          return (
            <tr key={email}>
              <td><img src={picture.medium} alt={fullName} /></td>
              <td>{fullName}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>{dateDOB}</td>
            </tr>
          )

        })}
      </tbody>
    </table>
  );
}

export default EmployeeTable;