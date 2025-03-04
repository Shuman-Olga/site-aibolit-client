import { Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function BlockImg() {
  return (
    <Container id="blockimg" className="">
      <div className="position-relative position-img">
        <img
          src={require("../../assets/img/img-home.jpg")}
          alt="img-background"
          className=" img-background"
        />
        <h4 className="position-absolute top-0 end-0 mt-5 me-5 h4-text">
          Заботимся о здоровье ваших детей с 2001 года
        </h4>
        <div className="position-absolute bottom-50 end-0 me-5 btn-callback">
          <ul>
            <li>
              <NavLink
                to="uslugi-i-ceny/pediatr/"
                target="_top"
                rel="noopener noreferrer"
                relative="path"
              >
                ПЕДИАТРЫ
              </NavLink>
            </li>
            <li>
              <Link
                to="programmy-nablyudeniya-za-zdorovem/"
                target="_top"
                rel="noopener noreferrer"
              >
                ДЕТСКИЕ МЕДИЦИНСКИЕ ПРОГРАММЫ
              </Link>
            </li>
            <li>
              <Link to="uslugi-i-ceny/" target="_top" rel="noopener noreferrer">
                Online КОНСУЛЬТАЦИЯ С ПЕДИАТРОМ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" wrapper-block-btn">
        <NavLink
          to="uslugi-i-ceny/vyzov-pediatra-na-dom/"
          className="nav-link"
          target="_top"
          rel="noopener noreferrer"
        >
          <div className="block-btn color1">
            <div className="block-btn-border">
              <img
                src={require("../../assets/img/home.png")}
                alt="img-home"
                className="block-btn-img"
                title="img-home"
              />
              <p className="text-center">Вызов врача на дом</p>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="programmy-nablyudeniya-za-zdorovem/"
          className="nav-link"
          target="_top"
          rel="noopener noreferrer"
        >
          <div className="block-btn color2">
            <div className="block-btn-border">
              <img
                src={require("../../assets/img/calling.png")}
                alt="img-programm"
                className="block-btn-img2"
                title="img-programm"
              />
              <p className="text-center">Программы</p>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/"
          className="nav-link"
          target="_top"
          rel="noopener noreferrer"
        >
          <div className="block-btn color3">
            <div className="block-btn-border">
              <img
                src={require("../../assets/img/analyzes.png")}
                alt="img-analyz"
                className="block-btn-img"
                title="img-analyz"
              />
              <p className="text-center">Анализы</p>
            </div>
          </div>
        </NavLink>
      </div>
    </Container>
  );
}
