import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

export default function CookieNotice() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Согласен"
      cookieName="myWebsiteCookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      Наш сайт использует куки. Продолжая им пользоваться, вы соглашаетесь на
      обработку персональных данных в соотвествии с{" "}
      <a
        href={require(`../assets/docs/ПОЛИТИКА ОБРАБОТКИ И ЗАЩИТЫ ПДн.pdf`)}
        style={{ color: "#f5e042" }}
      >
        политикой конфиденциальности
      </a>
    </CookieConsent>
  );
}
