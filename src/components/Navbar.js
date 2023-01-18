import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <Link to="/">
            <img
              alt=""
              height="150px"
              width="140px"
              src={require("../assets/images/nav-logo.png")}
            />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <details role="list">
            <summary role="link">Activities</summary>
            <ul role="listbox">
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/retreat">Retreat</Link>
              </li>
              <li>
                <Link to="/">Trainings</Link>
              </li>
              <li>
                <Link to="/">Conferences</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
