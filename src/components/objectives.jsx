import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

export default function Objectives() {
  const { t } = useTranslation();

  return (
    <section id="objectives">
      <div className="mx-auto mt-20 mb-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="text-center text-3xl">
            {t("objectivesSection.title")}
          </h1>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            <div className="flex flex-col-reverse gap-y-3 border-l border-slate-400 pl-6 justify-end">
              <dt className="text-base leading-7">
                {t("objectivesSection.item1")}
              </dt>
              <dd className="text-3xl text-slate-500 font-semibold tracking-tight">
                1
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 border-l border-slate-400 pl-6 justify-end">
              <dt className="text-base leading-7">
                {t("objectivesSection.item2")}
              </dt>
              <dd className="text-3xl text-slate-500 font-semibold tracking-tight">
                2
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 border-l border-slate-400 pl-6 justify-end">
              <dt className="text-base leading-7">
                {t("objectivesSection.item3")}
              </dt>
              <dd className="text-3xl text-slate-500 font-semibold tracking-tight">
                3
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 border-l border-slate-400 pl-6 justify-end">
              <dt className="text-base leading-7">
                {t("objectivesSection.item4")}
              </dt>
              <dd className="text-3xl text-slate-500 font-semibold tracking-tight">
                4
              </dd>
            </div>
          </dl>
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
