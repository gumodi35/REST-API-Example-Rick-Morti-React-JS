import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.css";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container" style={styles}>
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick & Morty <span >Personajes</span>
        </Link>
  
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink className="nav-link" to="/" >
              Personajes
            </NavLink>
            <NavLink className="nav-link" to="/episodes" >
              Episodios
            </NavLink>
            <NavLink
              activclassname="active"
              className="nav-link"
              to="/location"
            >
              Mundos
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
