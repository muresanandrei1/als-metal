import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cogs from "../assets/cogs.svg";

export default function YellowSection() {
  const { t } = useTranslation();

  return (
    <section id="yellow">
      <div className="relative isolate overflow-hidden mb-24 h-[500px] lg:h-[420px] relative flex">
        <div className="pointer-events-none absolute w-[150%] 2xl:w-[120%] bottom-[-200px] right-[-100px] bg-[#FFD600] h-[650px] lg:h-[440px] rotate-[350deg]" />
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row justify-end relative z-2 align-center lg:mt-auto lg:ml-auto lg:mr-[100px] gap-4 md:gap-6 lg:gap-10 mb-12">
          <img
            src={cogs}
            className="h-auto max-w-[140px] md:max-w-[200px] mx-auto"
            alt="Image of a cog"
          />
          <div className="max-w-[420px]">
            <p className="text-base">
              <span className="italic text-2xl">{t("infoSection.title")} </span>
              {t("infoSection.info1")}
            </p>
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
