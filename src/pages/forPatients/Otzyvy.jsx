import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import OtzyvItem from "../../components/forpatients/OtzyvItem";

export default function Otzyvy() {
  return (
    <Container fluid id="page2">
      <SeoPage page="otzyvy" />
      <div className="page-h1">
        <Container>
          <h1>Отзывы</h1>
        </Container>
      </div>
      <Container className="d-flex justify-content-between my-4 position-block">
        <OtzyvItem />
      </Container>
    </Container>
  );
}
