import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="mb-12 mt-14">
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flex lg:flex-row flex-col gap-24">
            <div className="relative mx-auto">
              <img
                src="static/grey.png"
                alt=""
                className="mt-10 aspect-[1/1] w-full max-w-md rounded-2xl object-cover"
              />
              <img
                src="static/about-img.png"
                alt=""
                className="mt-10 aspect-[1/1] w-full max-w-md rounded-2xl object-cover absolute top-0 translate-x-10 translate-y-14"
              />
            </div>
            <div className="mx-auto">
              <h1 className="max-w-2xl text-4xl mb-4 tracking-tight text-gray-900 lg:col-span-2 xl:col-auto after:content-[' '] after:w-[13%] after:h-[12px] after:bg-amber-300 after:block after:mt-3 after:rounded-2xl">
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
