import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";

function Header() {
  return (
    <>
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="brand">
          <h1 class="brand-logo">Worker Hub</h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <div>
          <LogOutButton />
        </div>
      </header>
    </>
  );
}

export default Header;
