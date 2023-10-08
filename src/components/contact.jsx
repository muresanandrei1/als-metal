import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import locationImage from "../assets/gruia.svg";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div className="relative isolate bg-[#FFCC17] py-20 px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-[-2rem_2rem_#92858F]">
          <form
            netlify
            name="contact"
            className="px-8 py-6 lg:py-10 lg:order-1 bg-[#181818] lg:rounded-tl-2xl rounded-bl-2xl rounded-br-2xl lg:rounded-br-none"
          >
            <div className="mx-auto lg:mr-0">
              <h2 className="text-5xl font-bold tracking-tight text-white after:content-[' '] after:w-[13%] after:h-[12px] after:bg-[#FFCC17] after:block after:mt-3 after:rounded-2xl mb-4">
                {t("contactSection.title")}
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    {t("contactSection.fields.name")}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="nume"
                      id="nume"
                      autoComplete="nume"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 bg-[#242424] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    {t("contactSection.fields.email")}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 bg-[#242424] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    {t("contactSection.fields.message")}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 bg-[#242424] ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-[#FFCC17] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t("contactSection.fields.send")}
                </button>
              </div>
            </div>
          </form>
          <div className="relative py-4 px-8 lg:static lg:py-10 order-first lg:order-2">
            <div className="mx-auto lg:mx-0">
              <p className="text-md text-gray-600 mb-4">
                {t("contactSection.info.description")}
              </p>
              <img src={locationImage} className="w-full" />
              <div className="flex flex-col">
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-2">
                    <dt className="flex-none font-medium">
                      <span className="sr-only">Address: </span>
                      {t("contactSection.info.addressLabel")}:
                    </dt>
                    <dd>
                      400220, Gruia, str. Romulus Vuia , nr.163, Cluj-Napoca,
                      Romania
                    </dd>
                  </div>
                  <div className="flex gap-x-2">
                    <dt className="flex-none font-medium">
                      <span className="sr-only">Phone: </span>
                      {t("contactSection.info.phoneLabel")}:
                    </dt>
                    <dd>
                      <a
                        className="hover:text-amber-400"
                        href="tel:+40754922231"
                      >
                        +40 754922231
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-2">
                    <dt className="flex-none font-medium">
                      <span className="sr-only">Email: </span>
                      {t("contactSection.info.emailLabel")}:
                    </dt>
                    <dd>
                      <a
                        className="hover:text-amber-400"
                        href="mailto:alsmetalinnovation@gmail.com"
                      >
                        alsmetalinnovation@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-gray-600 font-medium">
                  {t("contactSection.info.juridicInfo")}:
                </p>
                <dl className="mt-4 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-2">
                    <dt className="flex-none font-medium">
                      <span className="sr-only">Name: </span>
                      {t("contactSection.info.nameLabel")}:
                    </dt>
                    <dd>ALS Metal-Innovation S.R.L.</dd>
                  </div>
                  <div className="flex gap-x-2">
                    <dt className="flex-none font-medium">
                      <span className="sr-only">Tax Id Number:</span>
                      {t("contactSection.info.taxIdNumberLabel")}:
                    </dt>
                    <dd>RO 44656792</dd>
                  </div>
                </dl>
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
