import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <ul className="nav justify-content-between">
          {/* <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Budget
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Transaction
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/debts" className="nav-link">
              Debts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
