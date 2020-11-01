const SortArray = (array, column, direction) => {
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

export default SortArray;