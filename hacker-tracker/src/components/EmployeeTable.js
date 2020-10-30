function EmployeeTable(props) {
  const { employees } = props;
  return (
    <table>
      <caption>Our Employees</caption>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, i) => {
          return (
            <tr key={i}>
              <td>{employee.picture.thumbnail}</td>
              <td>{employee.name.first}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          )

        })}
      </tbody>
    </table>
  );
}

export default EmployeeTable;