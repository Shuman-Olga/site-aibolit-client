import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import imgHome from "../../assets/img/home.png";
import emailjs from "@emailjs/browser";

const ModalCalling = () => {
  const form = useRef();

  const listDoctor = [
    { title: "Врач" },
    { title: "Педиатр" },
    { title: "Отоларинголог" },
    { title: "Окулист" },
  ];
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [successful, setSuccessful] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setMessage("");
    setSuccessful(false);
    setShow(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    emailjs
      .sendForm(
        "service_3v0hnkn",
        "template_ooahi3b",
        form.current,
        "PhUOVu-NXcTpMJR7t"
      )
      .then((response) => {
        console.log(
          "Сообщение отправлено!",
          response.status,
          response.text,
          response
        );
        setMessage("Сообщение отправлено!");
        setSuccessful(true);
        setTimeout(() => {
          setMessage("");
          setSuccessful(false);
          setShow(false);
        }, 3000);
      })
      .catch((err) => {
        console.log("Упс! Ошибочка...", err);
      });
  };
  return (
    <div id="modalcalling">
      <Button className="btn-showmodal" onClick={handleShow}>
        <img src={imgHome} alt="home" className="img home" title="home" />
        Вызов врача на дом
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вызов врача</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={sendEmail}>
            {!successful && (
              <>
                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    id="name"
                    type="text"
                    placeholder="Имя*"
                    name="user_name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Введите имя!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    id="phone"
                    type="tel"
                    placeholder="Телефон*"
                    name="user_phone"
                  />
                  <Form.Control.Feedback type="invalid">
                    Введите ваш телефон!
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    required
                    id="address"
                    type="text"
                    placeholder="Адрес*"
                    name="user_address"
                  />
                  <Form.Control.Feedback type="invalid">
                    Введите адрес!
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Select id="doctor" name="doctor">
                    <option>Выберите врача...</option>
                    {listDoctor &&
                      listDoctor.map((item, index) => (
                        <option value={item.title} key={index}>
                          {item.title}{" "}
                        </option>
                      ))}
                  </Form.Select>
                </Form.Group>
                <FloatingLabel className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    id="message"
                    name="message"
                  />
                </FloatingLabel>
                <Form.Group className="mb-3" id="consent">
                  <Form.Check
                    required
                    type="checkbox"
                    label="Я согласен(на) на обработку персональных данных."
                    name="consent"
                    id="consent"
                    chdefaultCheckedecked={true}
                    feedback="Необходимо ваше согласие перед отправкой"
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Отправить
                </Button>
              </>
            )}
            {message && (
              <div className="form-group mt-2">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ModalCalling;
