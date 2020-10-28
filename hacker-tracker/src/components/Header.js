import React from "react";

function Header() {
  return (
    <header className="jumbotron jumbotron-fluid text-center">
      <h1 className="display-3">Hacker Tracker</h1>
      <h2 className="display-4">Employee Directory</h2>
      <p className="lead">
        Use the Search Bar to filter results or sort by name using the arrow in the heading.
      </p>
    </header>
  )
};

export default Header;