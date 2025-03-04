import { Form } from "react-bootstrap";

const FormField = ({ type, placeholder, name, register, error }) => (
  <>
    <Form.Group className="mb-3">
      <Form.Control
        type={type}
        placeholder={placeholder}
        isInvalid={error}
        {...register(name)}
      />
      <Form.Control.Feedback type="invalid">
        {error?.message}
      </Form.Control.Feedback>
    </Form.Group>
  </>
);
export default FormField;
