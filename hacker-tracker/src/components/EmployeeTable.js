import React from "react";

//generic sort function - to go into utilities
// Is there a better way to do with where some are in nested objects?
const sortArray = (array, column, direction) => {
  // make a shallow copy of the data to sort
  let stortedArr = [...array];

  if (column !== null) {
    if (column === "name") {
      stortedArr.sort((a, b) => {
        if (a[column].last < b[column].last) {
          return direction === "ascending" ? -1 : 1;
        } else if (a[column].last > b[column].last) {
          return direction === "ascending" ? 1 : -1;
        } else {
          return 0;
        }
      });
    }

    if (column === "email") {
      stortedArr.sort((a, b) => {
        if (a[column] < b[column]) {
          return direction === "ascending" ? -1 : 1;
        } else if (a[column] > b[column]) {
          return direction === "ascending" ? 1 : -1;
        } else {
          return 0;
        }
      });
    }

    if (column === "dob") {
      stortedArr.sort((a, b) => {
        const difference = new Date(a.dob.date) - new Date (b.dob.date);
        return direction === "ascending" ? difference : -difference;
      });
    }
  }

  return stortedArr;
}



function EmployeeTable(props) {
  const { employees } = props;
  console.log("employees: ", employees);
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

  const sortedEmployees = sortArray(employees, sortConfig.key, sortConfig.direction);

  return (
    <table className="table table-striped">
      <caption>Our Employees</caption>
      <thead className="thead-dark">
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">
            <button type="button" onClick={() => requestSort("name")}>Name</button>
          </th>
          <th scope="col">Phone</th>
          <th scope="col">
            <button type="button" onClick={() => requestSort("email")}>Email</button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => requestSort("dob")}>DOB</button>
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
              <td><img src={picture.large} alt={fullName} /></td>
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