import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Pagina principal">
      <p>
        Esta es mi primer página usando Gatsby, con esta me permite hacer cosas
        como blogs de manera sencilla.
      </p>
      <StaticImage
        alt="Nazaré keyboard render"
        src="https://i.imgur.com/ZYJgL2G.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
