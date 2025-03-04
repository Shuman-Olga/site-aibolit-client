import { NavLink } from "react-router-dom";

import { dataBlog } from "../../data/dataBlog";

export default function BlogItem() {
  return (
    <>
      {dataBlog.map((item) => (
        <div className="col block-posts" key={item.id}>
          <NavLink
            to={`${item.path}/`}
            className="nav-link"
            target="_top"
            rel="noopener noreferrer"
          >
            <div className="card">
              <img
                src={require(`../../assets/img/${item.img}`)}
                className="card-img-top "
                alt="nevrolog_na_dom"
                title={item.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
}
