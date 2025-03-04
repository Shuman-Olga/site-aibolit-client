import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Contacts from "../pages/Сontacts";
import ErrorPage from "../pages/ErrorPage";
import ControllingOrgan from "../pages/about/ControllingOrgan";
import Licenses from "../pages/about/Licenses";
import Documents from "../pages/about/Documents";
import OurPartners from "../pages/about/OurPartners";
import ProgramOne from "../pages/programs/ProgramOne";
import ProgramTwo from "../pages/programs/ProgramTwo";
import ProgramThree from "../pages/programs/ProgramThree";
import DoctorSadovnikova from "../pages/doctors/DoctorSadovnikova";
import DoctorPetuhova from "../pages/doctors/DoctorPetuhova";
import DoctorShevchenko from "../pages/doctors/DoctorShevchenko";
import DoctorOstrouhova from "../pages/doctors/DoctorOstrouhova";
import DoctorNaDom from "../pages/uslugi/DoctorNaDom";
import Pediatr from "../pages/uslugi/Pediatr";
import MedicalCertificates from "../pages/uslugi/MedicalCertificates";
import SanatornoKurortnayaKarta from "../pages/uslugi/medicalcertificates/SanatornoKurortnayaKarta";
import SpravkavShkolu from "../pages/uslugi/medicalcertificates/SpravkavShkolu";
import SpravkavDetskiiSad from "../pages/uslugi/medicalcertificates/SpravkavDetskiiSad";
import SpravkavBassein from "../pages/uslugi/medicalcertificates/SpravkavBassein";
import Blog from "../pages/Blog";
import Post1 from "../pages/posts/Post1";
import Post2 from "../pages/posts/Post2";
import Post3 from "../pages/posts/Post3";
import Post4 from "../pages/posts/Post4";
import SpravkavZdorove from "../pages/uslugi/medicalcertificates/SpravkaZdorove";
import SpravkaForma026u from "../pages/uslugi/medicalcertificates/SpravkaForma026u";
import MedicinskayaSpravka079u from "../pages/uslugi/medicalcertificates/MedicinskayaSpravka079u";
import Post5 from "../pages/posts/Post5";
import Doctors from "../pages/Doctors";
import Layout from "./Layout";
import ForPatients from "../pages/ForPatients";
import Uslugi from "../pages/Uslugi";
import PravovyInformations from "../pages/about/PravovyInformation";
import Vacancies from "../pages/about/Vacancies";
import LekarstvennoeObespechenie from "../pages/forPatients/LekarstvennoeObespechenie";
import PravilaPodgotovkiIssledovaniyam from "../pages/forPatients/PravilaPodgotovki";
import SvedeniyaSpecialistah from "../pages/forPatients/SvedeniyaSpecialistah";
import SposobyOplaty from "../pages/forPatients/SposobyOplaty";
import Otzyvy from "../pages/forPatients/Otzyvy";
import Prices from "../pages/forPatients/Prices";
import MapSite from "../pages/about/MapSite";
import Post6 from "../pages/posts/Post6";
import Post7 from "../pages/posts/Post7";
import Post8 from "../pages/posts/Post8";
import Post9 from "../pages/posts/Post9";
// import Search from "../components/Search";
import SearchPage from "../pages/SearchPage";

export const routesMain = [
  {
    path: "/",
    breadcrumb: "Главная",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "o-nas/",
        breadcrumb: "О нас",
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: "kontroliruyushie-organizacii/",
            element: <ControllingOrgan />,
            breadcrumb: "Контролирующие организации",
          },
          { path: "licenzii/", element: <Licenses />, breadcrumb: "Лицензии" },
          {
            path: "documents/",
            element: <Documents />,
            breadcrumb: "Документы",
          },
          {
            path: "nashi-partnery/",
            element: <OurPartners />,
            breadcrumb: "Наши партнеры",
          },
          {
            path: "pravovaya-informaciya/",
            element: <PravovyInformations />,
            breadcrumb: "Правовая информация",
          },
          {
            path: "vacancies/",
            element: <Vacancies />,
            breadcrumb: "Вакансии",
          },
          {
            path: "map-site/",
            element: <MapSite />,
            breadcrumb: "Карта сайта",
          },
        ],
      },
      {
        path: "doctors/",
        breadcrumb: "Педиатры",
        children: [
          {
            index: true,
            element: <Doctors />,
          },
          {
            path: "sadovnikova-elena-gennadevna/",
            element: <DoctorSadovnikova />,
            breadcrumb: "Садовникова Елена Геннадьевна",
          },
          {
            path: "petuhova-olga-viktorovna/",
            element: <DoctorPetuhova />,
            breadcrumb: "Петухова Ольга Викторовна",
          },
          {
            path: "shevchenko-anastasiya-nikolaevna/",
            element: <DoctorShevchenko />,
            breadcrumb: "Шевченко Анастасия Николаевна",
          },
          {
            path: "ostrouhova-natalya-petrovna/",
            element: <DoctorOstrouhova />,
            breadcrumb: "Остроухова Наталья Петровна",
          },
        ],
      },
      {
        path: "programmy-nablyudeniya-za-zdorovem/",
        breadcrumb: "Программы",
        children: [
          {
            index: true,
            element: <Programs />,
          },
          {
            path: "malysh-houm-standart-ot-0-do-2-h-le/",
            element: <ProgramOne />,
            breadcrumb: "Малыш Хоум стандарт",
          },
          {
            path: "zdorovyj-rebenok-houm-standart-ot-2/",
            element: <ProgramTwo />,
            breadcrumb: "Здоровый ребенок",
          },
          {
            path: "zdorovyj-rebenok-houm-midi-ot-2-h-l/",
            element: <ProgramThree />,
            breadcrumb: "Педиатр рядом",
          },
        ],
      },
      {
        path: "uslugi-i-ceny/",
        breadcrumb: "Услуги",
        children: [
          { index: true, element: <Uslugi /> },
          {
            path: "vyzov-pediatra-na-dom/",
            element: <DoctorNaDom />,
            breadcrumb: "Врач на дом",
          },
          { path: "pediatr/", element: <Pediatr />, breadcrumb: "Педиатр" },
          {
            path: "medicinskie-spravki-rebenku/",
            breadcrumb: "Справки",
            children: [
              {
                index: true,
                element: <MedicalCertificates />,
                breadcrumb: "Справки",
              },
              {
                path: "sanatorno-kurortnaya-karta-dlya-det/",
                element: <SanatornoKurortnayaKarta />,
                breadcrumb: "Санаторно-куротная карта",
              },
              {
                path: "spravka-v-shkolu/",
                element: <SpravkavShkolu />,
                breadcrumb: "Справка в школу",
              },
              {
                path: "spravka-v-detskii-sad/",
                element: <SpravkavDetskiiSad />,
                breadcrumb: "Справка в сад",
              },
              {
                path: "spravka-v-bassein/",
                element: <SpravkavBassein />,
                breadcrumb: "Справка в бассейн",
              },
              {
                path: "spravka-o-sostoyanii-zdorovya-reben/",
                element: <SpravkavZdorove />,
                breadcrumb: "Справка о состоянии здоровья",
              },
              {
                path: "spravka-poforme-026-u/",
                element: <SpravkaForma026u />,
                breadcrumb: "Справка - 029у",
              },
              {
                path: "spravka-po-forme-079-u/",
                element: <MedicinskayaSpravka079u />,
                breadcrumb: "Справка в лагерь - 079у",
              },
            ],
          },
        ],
      },
      {
        path: "pacientam/",
        breadcrumb: "Пациентам",
        children: [
          { index: true, element: <ForPatients /> },
          { path: "prices/", element: <Prices />, breadcrumb: "Цены" },
          {
            path: "sposoby-oplaty/",
            element: <SposobyOplaty />,
            breadcrumb: "Способы оплаты",
          },
          {
            path: "lekarstvennoe-obespechenie/",
            element: <LekarstvennoeObespechenie />,
            breadcrumb: "Лекарственное обеспечение",
          },
          {
            path: "pravila-podgotovki/",
            element: <PravilaPodgotovkiIssledovaniyam />,
            breadcrumb: "Правила подготовки к исследованиям",
          },
          {
            path: "svedeniya-o-specialistah/",
            element: <SvedeniyaSpecialistah />,
            breadcrumb: "Сведения о специалистах",
          },
          {
            path: "otzyvy/",
            element: <Otzyvy />,
            breadcrumb: "Отзывы",
          },
        ],
      },
      {
        path: "blog/",
        breadcrumb: "Блог",
        children: [
          { index: true, element: <Blog /> },
          {
            path: "detskij-nevrolog-na-dom/",
            element: <Post1 />,
            breadcrumb: "Детский невролог",
          },
          {
            path: "kalendar-vakcinacija/",
            element: <Post2 />,
            breadcrumb: "Календарь вакцинаций",
          },
          {
            path: "detskij-hirurg-na-dom/",
            element: <Post3 />,
            breadcrumb: "Детский хирург",
          },
          {
            path: "patronaj_novorojdennogo/",
            element: <Post4 />,
            breadcrumb: "Патронаж новорожденного",
          },
          {
            path: "adaptaciya_k_detskomu_sadu/",
            element: <Post5 />,
            breadcrumb: "Адаптация в детском саду",
          },
          {
            path: "kak_pomoch_rebenku_perenesti_jaru/",
            element: <Post6 />,
            breadcrumb: "Как помочь ребенку перенести жару",
          },
          {
            path: "detskii_lor_vrach_na_dom/",
            element: <Post7 />,
            breadcrumb: "Детский ЛОР врач на дом",
          },
          {
            path: "vizov_pediatra_na_dom/",
            element: <Post8 />,
            breadcrumb: "Вызов педиатра на дом",
          },
          {
            path: "pentaksim/",
            element: <Post9 />,
            breadcrumb: "Пентаксим",
          },
        ],
      },
      { path: "kontakty/", element: <Contacts />, breadcrumb: "Контакты" },
      { path: "search/", element: <SearchPage /> },
    ],
  },
];

const routes = createBrowserRouter(routesMain);
export default routes;
