import { Helmet } from "react-helmet";
import { dataSeo } from "../data/Seo/dataSeoPage";

export default function SeoPage(props) {
  const data = dataSeo.find((item) => item.namePage === `${props.page}`);
  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <link rel="canonical" href={data.urlname} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://aibolit.tom.ru/assets/img/fc19d652d9d38333b5f8.jpg"
      ></meta>
      <meta
        property="og:logo"
        content="https://aibolit.tom.ru/assets/img/fc19d652d9d38333b5f8.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="350" />
      <meta property="og:image:height" content="350" />
      <meta property="og:site_name" content="Айболит" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={data.urlname} />
    </Helmet>
  );
}
