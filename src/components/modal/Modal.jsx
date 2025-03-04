import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";

import { ModalContext } from "../../context/ModelContext";

export default function ModalWindows(props) {
  const { modal, open, close } = useContext(ModalContext);
  return (
    <div id={`modalcalling${props.name}`}>
      <Button className="btn-showmodal" onClick={open}>
        <img
          src={require("../../assets/img/home.png")}
          alt="home"
          className="img home"
          title="home"
        />
        {props.title}
      </Button>

      <Modal show={modal} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </div>
  );
}
