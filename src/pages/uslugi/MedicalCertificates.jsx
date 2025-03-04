import { Container } from "react-bootstrap";

import BlockReklama2 from "../../components/reklama/BlockReklama2";
import SeoPage from "../../components/Seo";
import SpravkiItem from "../../components/uslugi/SpravkiItem";

export default function MedicalCertificates() {
  return (
    <Container id="medical-certificates" fluid>
      <SeoPage page="spravki" />
      <div className="page-h1">
        <Container>
          <h1>Медицинские справки ребенку</h1>
        </Container>
      </div>
      <Container>
        <BlockReklama2 />
        <p>
          Детская медицинская служба `Айболит` оказывает услуги по оформлению
          справок для детских садов, школ, санаторного лечения, бассейнов и др.
          Мы имеем соответствующую лицензию и выдаем подлинные документы,
          заверенные подписями и печатями. Пытаясь сэкономить время, не стоит
          доверять фирмам, предлагающим купить ребенку медицинскую справку без
          врачебного осмотра. Мы обеспечиваем сжатые сроки оформления карт и
          справок, выгодные цены и внимательное отношение к здоровью ваших
          детей.
        </p>
        <SpravkiItem />
      </Container>
    </Container>
  );
}
