import { NavLink } from "react-router-dom";

export default function MapSubMenu({ submenus }) {
  return (
    <ul>
      {submenus.children.slice(1).map((submenu, index) => (
        <li className="nav-item" key={index}>
          <NavLink
            to={submenus.path + submenu.path}
            target="_top"
            rel="noopener noreferrer"
          >
            {submenu.breadcrumb}
          </NavLink>
          {submenu.children && (
            <ul>
              {submenu.children.slice(1).map((sub1, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={submenus.path + submenu.path + sub1.path}
                    target="_top"
                    rel="noopener noreferrer"
                  >
                    {sub1.breadcrumb}
                  </NavLink>
                  <ul>
                    {sub1.children && (
                      <>
                        {sub1.children.slice(1).map((sub2, index) => (
                          <li className="nav-item" key={index}>
                            <NavLink
                              to={
                                submenus.path +
                                submenu.path +
                                sub1.path +
                                sub2.path
                              }
                              target="_top"
                              rel="noopener noreferrer"
                            >
                              {sub2.breadcrumb}
                            </NavLink>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
