import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import partnerImg from "../assets/partner.png";

export default function ContrastSection() {
  const { t } = useTranslation();

  return (
    <section id="contrast">
      <div className="relative isolate overflow-hidden bg-[#252525]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex flex-col lg:flex-row py-24 gap-24 justify-center items-center">
            <img src={partnerImg} width="130" />
            <h1 className="text-white tracking-wider text-justify text-2xl">
              {t("partnerSection.info1")}
            </h1>
          </div>
        </div>
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
