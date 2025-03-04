import { Container } from "react-bootstrap";
import WOHimg1 from "../assets/img/pngwing.png";
import WOHimg2 from "../assets/img/snooww.jpg";
import WOHimg3 from "../assets/img/snegovik.png";

export default function WorkOnHolidays() {
  return (
    <Container fluid id="workonholidays">
      <div
        className="d-flex justify-content-center align-items-center py-3  mb-3 block-message "
        style={{ backgroundImage: `url(${WOHimg2})` }}
      >
        <img src={WOHimg1} alt="holiday" className="me-4" />
        <div className="text-center">
          <p className=" fs-4 fw-bold fst-italic">
            График работы в новогодние праздники
          </p>
          <p className=" fs-5 fw-bold">
            30, 31 декабря, 1-3, 7 января выходной!
          </p>
          <p className=" fs-5 fw-bold">4 января работаем в обычном режиме</p>
        </div>
        <img src={WOHimg3} alt="holiday" className="ms-4" />
      </div>
    </Container>
  );
}
