import { Container } from "react-bootstrap";

import BlockAdvantages from "../components/home/BlockAdvantages";
import BlockDoctors from "../components/home/BlockDoctors";
import BlockContacts from "../components/home/BlockContacts";
import BlockImg from "../components/home/BlockImg";
import BlockInfo from "../components/home/BlockInfo";
import SeoPage from "../components/Seo";
import Banner from "../components/home/Banner";
// import WorkOnHolidays from "../components/WorkOnHolidays";

export default function App() {
  return (
    <Container fluid id="home">
      <SeoPage page="home" />
      {/* <WorkOnHolidays /> */}
      <BlockImg />
      <Banner />
      <BlockInfo />
      <BlockAdvantages />
      <BlockDoctors />
      <BlockContacts />
    </Container>
  );
}
