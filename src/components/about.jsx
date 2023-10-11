import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import aboutImg from "../assets/about-img.png";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="mb-12 mt-14">
      <div className="relative isolate pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex lg:flex-row flex-col gap-2">
            <div className="relative mx-auto">
              <img
                src={aboutImg}
                alt="Humans working"
                className="mt-10 aspect-[1/1] w-full max-w-md rounded-2xl object-cover shadow-[-2.5rem_-2.5rem_#C1C8CE]"
              />
            </div>
            <div className="mx-auto mt-4 lg:mt-0">
              <h1 className="max-w-2xl text-4xl mb-4 tracking-tight text-gray-900 lg:col-span-2 xl:col-auto after:content-[' '] after:w-[13%] after:h-[12px] after:bg-[#FFCC17] after:block after:mt-3 after:rounded-2xl">
                <span className="font-bold tracking-wide">
                  {t("aboutSection.titleBold")}{" "}
                </span>
                <span className="italic tracking-wide">
                  {t("aboutSection.titleRest")}
                </span>
                <span className="font-medium tracking-wider">
                  {t("aboutSection.questionMark")}
                </span>
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  {t("aboutSection.info1")}
                </p>
                <p className="text-lg leading-8 text-gray-600 mt-5">
                  {t("aboutSection.info2")}
                </p>
              </div>
            </div>
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
