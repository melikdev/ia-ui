import "../assets/styles/navbar.css"

// important
import { Link } from "react-router-dom"
import { useState } from "react"

// icons
import MenuIcon from "@mui/icons-material/Menu"
import InstagramIcon from "@mui/icons-material/Instagram"

const Navbar = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false)

  return (
    <nav className="container-fluid">
      <nav style={{ height: "150px" }} className="container">
        <ul className="logo">
          <li>
            <Link to="/">
              <img
                height="100px"
                width="110px"
                className="nav-logo"
                alt=""
                src={require("../assets/images/nav-logo.png")}
              />
            </Link>
          </li>
        </ul>
        <ul className="links">
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
        <ul className="social-links">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/islamicagroecology/"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <li className="hamburger-icon">
            <MenuIcon
              style={{ fontSize: "30px" }}
              onClick={() => setToggleHamburger(!toggleHamburger)}
            />
          </li>
          {toggleHamburger && (
            <div className="hamburger-menu">
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
                        <Link
                          onClick={() => setToggleHamburger(false)}
                          to="/events"
                        >
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => setToggleHamburger(false)}
                          to="/retreat"
                        >
                          Retreat
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => setToggleHamburger(false)} to="/">
                          Trainings
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => setToggleHamburger(false)} to="/">
                          Conferences
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link onClick={() => setToggleHamburger(false)} to="/library">
                    Library
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setToggleHamburger(false)} to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setToggleHamburger(false)} to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setToggleHamburger(false)}
                    to="/about-us"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </nav>
  )
}

export default Navbar
