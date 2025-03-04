import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Container } from "react-bootstrap";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { routesMain } from "../routers/routers";

const Breadcrumbs = () => {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(routesMain);
  const pathnameBloked = location.pathname !== "/";
  return (
    <Container id="breadcrumbs">
      <Breadcrumb>
        {breadcrumbs.map(({ breadcrumb, match }, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            pathnameBloked &&
            (isLast && location.pathname !== "/search/" ? (
              <Breadcrumb.Item
                key={match.pathname}
                className="link-warning"
                active
              >
                {breadcrumb}
              </Breadcrumb.Item>
            ) : match.pathname === "/" ? (
              <Breadcrumb.Item
                key={index}
                linkProps={{ to: match.pathname }}
                linkAs={Link}
              >
                <span className="material-icons">home</span>
              </Breadcrumb.Item>
            ) : (
              location.pathname !== "/search/" && (
                <Breadcrumb.Item
                  key={index}
                  linkProps={{ to: match.pathname }}
                  linkAs={Link}
                  className="underline-one"
                >
                  {breadcrumb}
                </Breadcrumb.Item>
              )
            ))
          );
        })}
      </Breadcrumb>
    </Container>
  );
};

export default Breadcrumbs;
