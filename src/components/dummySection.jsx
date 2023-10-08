import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"></div>
      </div>
    </section>
  );
}

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
