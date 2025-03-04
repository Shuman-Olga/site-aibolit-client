import { NavLink } from "react-router-dom";

export default function Dropdown({ dropmenus }) {
  return (
    <ul
      className="dropdown-menu"
      aria-labelledby={`navbarDropdown${dropmenus.breadcrumb}`}
    >
      {dropmenus.children.slice(1).map((dropmenu, index) => (
        <li key={index}>
          <NavLink
            className="dropdown-item"
            to={dropmenus.path + dropmenu.path}
            target="_top"
            rel="noopener noreferrer"
          >
            {dropmenu.breadcrumb}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
