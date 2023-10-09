import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import Header from "../components/header";
import Section1 from "../components/section1";
import About from "../components/about";
import ContrastSection from "../components/contrastSection";
import Services from "../components/services";
import YellowSection from "../components/yellowSection";
import Objectives from "../components/objectives";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import favicon from "../assets/favicon-32x32.png";

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Section1 />
      <Services />
      <ContrastSection />
      <About />
      <YellowSection />
      <Objectives />
      <Portfolio />
      <Contact />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>ALS Metal-Innovation</title>
    <link rel="icon" type="image/png" sizes="32x32" href={favicon}></link>
  </>
);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
