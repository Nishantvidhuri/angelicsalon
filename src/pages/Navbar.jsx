import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/angelic salon.png';
import '../css/style.css';

function Navbar() {
  return (
    <>
      <nav className="flex justify-between pl-10 pt-2">
        <div>
          <Link to="/">
            <img className="w-24 h-24" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="mr-10 gap-10 text-white text-xl mt-5 h-full flex">
          <NavLink
            className={({ isActive }) =>
              `squiggleEffect ${isActive ? "font-semibold" : ""}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `squiggleEffect ${isActive ? "font-semibold" : ""}`
            }
            to="/Location"
          >
            Location
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `squiggleEffect ${isActive ? "font-semibold" : ""}`
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `squiggleEffect ${isActive ? "font-semibold" : ""}`
            }
            to="/q-a"
          >
            Q/A
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `squiggleEffect ${isActive ? "font-semibold" : ""}`
            }
            to="/packages"
          >
            Packages
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
