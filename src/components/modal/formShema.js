import * as Yup from "yup";

const phoneRegex = new RegExp(
  // eslint-disable-next-line no-useless-escape
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,10}$/
);

export const validationSchema = Yup.object().shape({
  user_name: Yup.string().required("Укажите ваше имя"),
  user_phone: Yup.string()
    .required("Укажите ваш номер телефона")
    .matches(phoneRegex, "Укажите ваш номер телефона"),
  user_address: Yup.string().nullable().notRequired(),
  doctor: Yup.string().nullable().notRequired(),
  message: Yup.string().nullable().notRequired(),
  accept: Yup.bool().oneOf([true], "Необходимо ваше согласие перед отправкой"),
});
