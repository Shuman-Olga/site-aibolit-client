import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function MenuItems({ items }) {
  return (
    <>
      {items.children &&
      items.path !== "blog/" &&
      items.path !== "uslugi-i-ceny/" ? (
        <li className="nav-item dropdown mx-2 wrap-li d-flex">
          <NavLink
            className="nav-link text-dark"
            to={items.path}
            target="_top"
            rel="noopener noreferrer"
            state={{ p: items.breadcrumb }}
            id={`navbarDropdown${items.breadcrumb}`}
          >
            {items.breadcrumb}
          </NavLink>
          <Dropdown dropmenus={items} />{" "}
          <button
            type="button"
            className="btn-menu-toggle btn dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
            to={items.path}
            target="_top"
            rel="noopener noreferrer"
          >
            <span className="visually-hidden">
              Переключатель выпадающего списка
            </span>
          </button>
        </li>
      ) : (
        <li className="nav-item  mx-2">
          <NavLink
            to={items.path}
            className="nav-link text-dark"
            target="_top"
            rel="noopener noreferrer"
            state={{ p: `${items.breadcrumb}` }}
          >
            {items.breadcrumb}
          </NavLink>
        </li>
      )}
    </>
  );
}
