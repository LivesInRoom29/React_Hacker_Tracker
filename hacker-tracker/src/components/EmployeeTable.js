import React from "react";

function EmployeeTable(props) {
  const { employees } = props;
  // To add sorting ability; initialize state as null
  //const [sortedField, setSortedField] = React.useState(null)
  return (
    <table>
      <caption>Our Employees</caption>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, i) => {
          const { name, email, phone, picture, dob } = employee;
          // Format the full name by joining first and last
          const fullName = `${name.first} ${name.last}`;
          // Format the DOB into M/DD/YYYY
          const dateDOB = new Date(dob.date).toLocaleDateString();
          return (
            <tr key={i}>
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