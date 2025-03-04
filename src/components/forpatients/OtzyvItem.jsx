import { Container } from "react-bootstrap";

import { dataOtzyvy } from "../../data/dataOtzyvy";

export default function OtzyvItem() {
  return (
    <Container className="">
      {dataOtzyvy.reverse().map((item) => (
        <Container key={item.id} className="border my-4 p-4">
          <p className="fw-bold">{item.name}</p>
          <p className="fw-light">Отзыв о </p>
          <p className="fw-bold"> {item.forname}</p>
          <p>{item.otzyv}</p>
          <p className="fw-light">{item.date} г.</p>
        </Container>
      ))}
    </Container>
  );
}
