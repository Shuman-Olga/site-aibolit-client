import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import { routesMain } from "../../routers/routers";

export default function NavMini(props) {
  let location = useLocation();
  const linkMini = routesMain[0].children
    .slice(1)
    .find((item) => item.path === `${props.path}`)?.children;
  console.log(location);
  return (
    <div id="navmini" className="position-relative">
      <div className="svg-backgraund">
        <svg
          preserveAspectRatio="none"
          data-bbox="31.499 20 137.001 160.001"
          viewBox="31.499 20 137.001 160.001"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          role="presentation"
          aria-hidden="true"
        >
          <g>
            <path d="M166.344 54.704c-1.805-4.794-4.774-9.353-9.025-13.403-11.189-10.658-30.812-17.352-48.765-20.236-47.41-7.615-75.151 27.098-76.986 56.126-.874 13.824 6.889 27.31 7.497 41.175.652 14.878-5.574 29.557-2.586 44.536 1.666 8.348 8.576 13.214 20.06 15.16 34.353 5.821 80.34-1.147 97.585-25.256 4.83-6.752 6.951-14.461 7.698-21.959.881-8.85-1.181-17.654-1.463-26.49-.268-8.412 2.606-16.449 5.664-24.509 3.091-8.151 3.392-16.986.321-25.144z"></path>
          </g>
        </svg>
      </div>
      <div className="position-absolute arrow-svg">
        <svg
          preserveAspectRatio="none"
          data-bbox="24 33 152.001 134"
          viewBox="24 33 152.001 134"
          height="200"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          role="presentation"
          aria-hidden="true"
        >
          <g>
            <path d="M159.621 121.057L109.217 38.8c-4.726-7.737-16.025-7.732-20.745.009L26.236 140.885c-7.475 12.26 5.093 26.906 18.453 21.504l100.386-40.592c9.257-3.675 14.546-.74 14.546-.74z"></path>
            <path d="M173.822 144.873l-4.835-7.931c-3.723-6.107-11.357-8.624-18.015-5.94l-43.744 17.637 49.153 17.467c12.971 4.609 24.58-9.524 17.441-21.233z"></path>
          </g>
        </svg>
      </div>
      <div className="position-absolute nav-position">
        <Nav className="flex-column ">
          {linkMini?.slice(1)?.map((item, index) => (
            <NavLink
              to={item.path}
              className="nav-link"
              target="_top"
              rel="noopener noreferrer"
              key={index}
            >
              {item.breadcrumb}
            </NavLink>
          ))}
        </Nav>
      </div>
    </div>
  );
}
