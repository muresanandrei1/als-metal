import React, { Fragment, useState, useEffect } from "react";
import { graphql } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useTranslation, Link, useI18next } from "gatsby-plugin-react-i18next";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import RoIcon from "../assets/ro.svg";
import UkIcon from "../assets/uk.svg";
import logo from "../assets/logo.svg";

const languages = [
  {
    name: "ro",
    icon: RoIcon,
    href: "#",
    lng: "ro",
  },
  {
    name: "en",
    icon: UkIcon,
    href: "#",
    lng: "en",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { t } = useTranslation();
  const { originalPath, language } = useI18next();

  useEffect(() => {
    const selectedLng = languages.find((el) => el.lng === language);
    setSelectedLanguage(selectedLng);
  }, [language]);

  return (
    <header className="bg-[#252525] fixed w-full z-10">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <AnchorLink stripHash to="/" className="-m-1.5">
            <img className="h-16 w-auto saturate-0" src={logo} alt="ALS logo" />
          </AnchorLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end bg-[#252525]">
          <Popover.Group className="hidden lg:flex lg:gap-x-12 bg-[#252525]">
            <AnchorLink
              stripHash
              to={language === "en" ? "/en/#services" : "/#services"}
              className="text-sm font-semibold leading-6 text-white"
              // gatsbyLinkProps
            >
              <p>{t("menu.services")}</p>
            </AnchorLink>
            <AnchorLink
              stripHash
              to={language === "en" ? "/en/#about" : "/#about"}
              className="text-sm font-semibold leading-6 text-white"
            >
              <p>{t("menu.about")}</p>
            </AnchorLink>
            <AnchorLink
              stripHash
              to={language === "en" ? "/en/#portfolio" : "/#portfolio"}
              className="text-sm font-semibold leading-6 text-white"
            >
              <p>{t("menu.portfolio")}</p>
            </AnchorLink>
            <AnchorLink
              stripHash
              to={language === "en" ? "/en/#contact" : "/#contact"}
              className="text-sm font-semibold leading-6 text-white"
            >
              <p>{t("menu.contact")}</p>
            </AnchorLink>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                {selectedLanguage && (
                  <img
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                    src={selectedLanguage.icon}
                    alt="Language icon"
                  />
                )}
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute top-full z-10 mt-3 overflow-hidden rounded-3xl bg-[#252525] shadow-lg ring-1 ring-gray-900/5">
                  <div>
                    {languages
                      .filter((el) => el.lng !== language)
                      .map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#252525]"
                        >
                          <Link to={originalPath} language={item.lng}>
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#252525] group-hover:bg-[#252525]">
                              <img
                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                aria-hidden="true"
                                src={item.icon}
                                alt="Language icon"
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#252525] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5">
              <span className="sr-only">ALS Metal-Innovation</span>
              <img
                className="h-16 w-auto saturate-0"
                src={logo}
                alt="ALS logo"
                width="300"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <AnchorLink
                  stripHash
                  to={language === "en" ? "/en/#services" : "/#services"}
                  className="text-xl leading-6 text-white py-1 block"
                  onAnchorLinkClick={() => setMobileMenuOpen(false)}
                >
                  <p>{t("menu.services")}</p>
                </AnchorLink>
                <AnchorLink
                  stripHash
                  to={language === "en" ? "/en/#about" : "/#about"}
                  className="text-xl leading-6 text-white py-1 block"
                  onAnchorLinkClick={() => setMobileMenuOpen(false)}
                >
                  <p>{t("menu.about")}</p>
                </AnchorLink>
                <AnchorLink
                  stripHash
                  to={language === "en" ? "/en/#portfolio" : "/#portfolio"}
                  className="text-xl leading-6 text-white py-1 block"
                  onAnchorLinkClick={() => setMobileMenuOpen(false)}
                >
                  <p>{t("menu.portfolio")}</p>
                </AnchorLink>
                <AnchorLink
                  stripHash
                  to={language === "en" ? "/en/#contact" : "/#contact"}
                  className="text-xl leading-6 text-white py-1 block"
                  onAnchorLinkClick={() => setMobileMenuOpen(false)}
                >
                  <p>{t("menu.contact")}</p>
                </AnchorLink>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white bg-[#252525]">
                        {selectedLanguage && (
                          <img
                            className="h-6 w-6 text-gray-600 mr-2"
                            aria-hidden="true"
                            src={selectedLanguage.icon}
                            alt="Selected language icon"
                          />
                        )}
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {languages
                          .filter((el) => el.lng !== language)
                          .map((item) => (
                            <Link
                              to={originalPath}
                              language={item.lng}
                              key={item.lng}
                            >
                              <Disclosure.Button
                                key={item.name}
                                className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#252525] group-hover:bg-[#252525]"
                              >
                                <img
                                  className="h-6 w-6 text-gray-600"
                                  aria-hidden="true"
                                  src={item.icon}
                                  alt="Language icon"
                                />
                              </Disclosure.Button>
                            </Link>
                          ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
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
