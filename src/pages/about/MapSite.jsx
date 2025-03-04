import { Container } from "react-bootstrap";

import SeoPage from "../../components/Seo";
import { routesMain } from "../../routers/routers";
import MapMenuItem from "../../components/about/MapMenuItem";

export default function MapSite() {
  console.log(routesMain);
  return (
    <Container fluid id="mapsite">
      <SeoPage page="mapsite" />
      <div className="page-h1">
        <Container>
          <h1>Карта Сайта</h1>
        </Container>
      </div>
      <Container className="mt-4 position-block">
        <ul className="map">
          {routesMain.map((menu, index) => {
            return <MapMenuItem items={menu} key={index} />;
          })}
        </ul>
      </Container>
    </Container>
  );
}
