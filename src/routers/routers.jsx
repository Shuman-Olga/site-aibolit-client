import { createBrowserRouter } from "react-router-dom";
import React from "react";

import Home from "../pages/Home";
import Layout from "./Layout";

const About = React.lazy(() => import("../pages/About"));
const Programs = React.lazy(() => import("../pages/Programs"));
const Contacts = React.lazy(() => import("../pages/Сontacts"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const ControllingOrgan = React.lazy(() =>
  import("../pages/about/ControllingOrgan")
);
const Licenses = React.lazy(() => import("../pages/about/Licenses"));
const Documents = React.lazy(() => import("../pages/about/Documents"));
const OurPartners = React.lazy(() => import("../pages/about/OurPartners"));
const ProgramOne = React.lazy(() => import("../pages/programs/ProgramOne"));
const ProgramTwo = React.lazy(() => import("../pages/programs/ProgramTwo"));
const ProgramThree = React.lazy(() => import("../pages/programs/ProgramThree"));
const DoctorSadovnikova = React.lazy(() =>
  import("../pages/doctors/DoctorSadovnikova")
);
const DoctorPetuhova = React.lazy(() =>
  import("../pages/doctors/DoctorPetuhova")
);
const DoctorShevchenko = React.lazy(() =>
  import("../pages/doctors/DoctorShevchenko")
);
const DoctorOstrouhova = React.lazy(() =>
  import("../pages/doctors/DoctorOstrouhova")
);
const DoctorNaDom = React.lazy(() => import("../pages/uslugi/DoctorNaDom"));
const Pediatr = React.lazy(() => import("../pages/uslugi/Pediatr"));
const MedicalCertificates = React.lazy(() =>
  import("../pages/uslugi/MedicalCertificates")
);
const SanatornoKurortnayaKarta = React.lazy(() =>
  import("../pages/uslugi/medicalcertificates/SanatornoKurortnayaKarta")
);
const SpravkavShkolu = React.lazy(() =>
  import("../pages/uslugi/medicalcertificates/SpravkavShkolu")
);
const SpravkavDetskiiSad = React.lazy(() =>
  import("../pages/uslugi/medicalcertificates/SpravkavDetskiiSad")
);
const SpravkavBassein = React.lazy(() =>
  import("../pages/uslugi/medicalcertificates/SpravkavBassein")
);
const Blog = React.lazy(() => import("../pages/Blog"));
const Post1 = React.lazy(() => import("../pages/posts/Post1"));
const Post2 = React.lazy(() => import("../pages/posts/Post2"));
const Post3 = React.lazy(() => import("../pages/posts/Post3"));
const Post4 = React.lazy(() => import("../pages/posts/Post4"));
const SpravkavZdorove = React.lazy(() =>
  import("../pages/uslugi/medicalcertificates/SpravkaZdorove")
);
const SpravkaForma026u = React.lazy(() =>
  import("../pages/uslugi/medicalcertificates/SpravkaForma026u")
);
const MedicinskayaSpravka079u = React.lazy(() =>
  import("../pages/uslugi/medicalcertificates/MedicinskayaSpravka079u")
);
const Post5 = React.lazy(() => import("../pages/posts/Post5"));
const Doctors = React.lazy(() => import("../pages/Doctors"));

const ForPatients = React.lazy(() => import("../pages/ForPatients"));
const Uslugi = React.lazy(() => import("../pages/Uslugi"));
const PravovyInformations = React.lazy(() =>
  import("../pages/about/PravovyInformation")
);
const Vacancies = React.lazy(() => import("../pages/about/Vacancies"));
const LekarstvennoeObespechenie = React.lazy(() =>
  import("../pages/forPatients/LekarstvennoeObespechenie")
);
const PravilaPodgotovkiIssledovaniyam = React.lazy(() =>
  import("../pages/forPatients/PravilaPodgotovki")
);
const SvedeniyaSpecialistah = React.lazy(() =>
  import("../pages/forPatients/SvedeniyaSpecialistah")
);
const SposobyOplaty = React.lazy(() =>
  import("../pages/forPatients/SposobyOplaty")
);
const Otzyvy = React.lazy(() => import("../pages/forPatients/Otzyvy"));
const Prices = React.lazy(() => import("../pages/forPatients/Prices"));
const MapSite = React.lazy(() => import("../pages/about/MapSite"));
const Post6 = React.lazy(() => import("../pages/posts/Post6"));
const Post7 = React.lazy(() => import("../pages/posts/Post7"));
const Post8 = React.lazy(() => import("../pages/posts/Post8"));
const Post9 = React.lazy(() => import("../pages/posts/Post9"));
const SearchPage = React.lazy(() => import("../pages/SearchPage"));

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
            breadcrumb: "Малыш Хоум от 0 до 2 лет",
          },
          {
            path: "zdorovyj-rebenok-houm-standart-ot-2/",
            element: <ProgramTwo />,
            breadcrumb: "Здоровый ребенок с 2 до 5 лет",
          },
          {
            path: "zdorovyj-rebenok-houm-midi-ot-2-h-l/",
            element: <ProgramThree />,
            breadcrumb: "Педиатр рядом с 5лет",
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
