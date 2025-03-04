import { NavLink } from "react-router-dom";

export default function DoctorItem(props) {
  return (
    <NavLink
      to={`/doctors/` + props.data.path + "/"}
      className="nav-link"
      target="_top"
      rel="noopener noreferrer"
    >
      <div className="col">
        <div className="card  h-100">
          <img
            src={require(`../../assets/img/${props.data.img}`)}
            className="card-img-top"
            alt={props.data.firstname}
            title={props.data.title}
          />
          <div className="card-body ">
            <p className="card-text text-center">{props.data.lastname}</p>
            <p className="card-text text-center">{props.data.firstname}</p>
            <p className="card-text text-center">{props.data.surname}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
