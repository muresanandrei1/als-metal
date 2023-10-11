import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import otel from "../assets/otel.png";
import alama from "../assets/alama.png";
import aluminiu from "../assets/aluminiu.png";
import plastic from "../assets/plastic.png";
import cupru from "../assets/cupru.png";

export default function Services() {
  const { t } = useTranslation();
  const items = [
    {
      name: t("servicesSection.item1"),
      img: otel,
      extraClasses: "md:mt-0",
    },
    {
      name: t("servicesSection.item2"),
      img: aluminiu,
      extraClasses: "md:mt-0",
    },
    {
      name: t("servicesSection.item3"),
      img: alama,
      extraClasses: "md:mt-0",
    },
    {
      name: t("servicesSection.item4"),
      img: cupru,
      extraClasses: "sm:col-start-2 lg:col-span-1 lg:mt-0",
    },
    {
      name: t("servicesSection.item5"),
      img: plastic,
      extraClasses: "sm:col-start-auto col-start-2 lg:col-span-1 lg:mt-0",
    },
  ];

  return (
    <section id="services" className="scroll-m-[120px]">
      <div className="isolate mb-40 mt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="uppercase text-center text-4xl leading-8 text-gray-900 font-uppercase mb-4 tracking-widest">
            <span className="font-bold">{t("servicesSection.titleBold")} </span>
            <span className="italic">{t("servicesSection.titleRest")}</span>
          </h2>
          <p className="text-xl text-center mt-10 block max-w-3xl mx-auto tracking-wide">
            {t("servicesSection.info1")}
          </p>
          <div className="mx-auto md:mt-40 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {items.map((item) => (
              <div
                key={item.name}
                className={`col-span-2 max-h-12 w-full object-contain lg:col-span-1 ${item.extraClasses} flex flex-col items-center justify-center mt-32`}
              >
                <img
                  className="w-full object-contain"
                  src={item.img}
                  alt={item.name}
                  width={158}
                  height={48}
                />
                <p className="mt-4">{item.name}</p>
              </div>
            ))}
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
