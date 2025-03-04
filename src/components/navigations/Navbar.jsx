import { routesMain } from "../../routers/routers";
import * as bootstrap from "bootstrap";

import MenuItems from "./MenuItems";
import Search from "../Search";

export default function Navbar() {
  const collapseElementList = document.querySelectorAll(".navbar-toggle");
  const collapseList = [...collapseElementList].map(
    (collapseEl) => new bootstrap.Collapse(collapseEl)
  );
  return (
    <nav id="navbar" className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Переключатель навигации"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            {routesMain[0].children.slice(1, -1).map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
}
