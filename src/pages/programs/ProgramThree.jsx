import { Container } from "react-bootstrap";

import BlockReklama from "../../components/reklama/BlockReklama1";
import SeoPage from "../../components/Seo";

export default function ProgramThree() {
  return (
    <Container id="programthree" fluid>
      <SeoPage page="programthree" />

      <div className="page-h1">
        <Container>
          <h1>Здоровый ребенок Педиатр рядом ( c 2-х лет)</h1>
        </Container>
      </div>
      <Container className="my-4 text-center">
        <div>
          <img
            src={require(`../../assets/img/detskii_vrach_rebenok.jpg`)}
            alt="img-program-three"
            className="progthree-img"
            title="Здоровый ребенок Педиатр рядом ( c 2-х лет)"
          />
          <div className="lh-lg py-4">
            <p>
              Данная программа предназначена для наблюдения ребенка возрастом от
              2-х лет. <br />В нее входит только наблюдение педиатра один раз в
              месяц и связь с педиатром.
              <br />В пакет не входит: наблюдение узкими специалистами, УЗИ и
              анализы. <br />
              Программа назначается только после консультации с педиатром.
            </p>
          </div>
        </div>
        <div className="block-table">
          <h2 className="py-5">Состав программы</h2>
          <table className="table table-light table-striped text-start ">
            <tbody>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">Ведущий врач педиатр</p>
                  <p className="ms-5">Наблюдение на дому</p>
                </td>
                <td>
                  <p>.</p>
                  <p className="fw-bold">ежемесячно(1 раз в мес)</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">
                    Мобильная связь с ведущим врачом-педиатром в рабочее время с
                    08:00 до 20:00
                  </p>
                </td>
                <td>
                  <p className="fw-bold">+</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="fw-bold">
                    Выдача медицинской документации (справка в бассейн, справка
                    по месту требования)
                  </p>
                </td>
                <td>
                  <p className="fw-bold">+</p>
                </td>
              </tr>
              <tr className="fs-5 table-group-divider table-info">
                <td className="px-3">
                  <p className="fw-bold">Стоимость в месяц</p>
                  <p className="fw-bold">- за двух детей</p>
                </td>
                <td>
                  <p className="fw-bold">5 500 руб.**</p>
                  <p className="fw-bold">7 000 руб.**</p>
                </td>
              </tr>
              <tr className="table-group-divider font-text ">
                <td colSpan={2} className="px-3">
                  <p>
                    * стоимость вакцины не входит в программу и оплачивается
                    отдельно
                  </p>
                  <p>
                    ** для отдельных районов города и Томского района
                    предусмотрено повышение стоимости услуг в зависимости от
                    дальности расстояния
                  </p>
                  <p>МИНИМАЛЬНЫЙ СРОК заключения ДОГОВОРА 3 МЕСЯЦА</p>
                  <p>Первый платеж – за 3 месяца, оплачивается сразу.</p>
                  <p className="font-size-min">
                    Информация и цены, представленные на сайте, являются
                    справочными и не являются публичной офертой.
                  </p>
                  <p className="font-size-min">
                    Просим Вас уточнять актуальные цены у менеджеров по телефону
                    60-92-43
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
      <BlockReklama />
    </Container>
  );
}
