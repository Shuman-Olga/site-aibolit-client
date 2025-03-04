import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import { ModalState } from "../context/ModelContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CookieNotice from "../components/CookieNotice";
import ModalCallback from "../components/modal/ModalCallback";
import BtnScrollTop from "../components/button/BtnScrollTop";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Layout() {
  return (
    <ModalState>
      <Container fluid>
        <CookieNotice />
        <Header />
        <Breadcrumbs />
        <Outlet />
        <ModalCallback />
        <BtnScrollTop />
        <Footer />
      </Container>
    </ModalState>
  );
}
