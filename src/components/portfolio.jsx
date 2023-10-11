import React, { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";

const TWEEN_FACTOR = 12;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const Carousel = () => {
  const [tweenValues, setTweenValues] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: "auto",
      containScroll: "trimSnaps",
    },
    [Autoplay()]
  );

  const slides = Array.from(Array(15).keys());

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide"
              key={index}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Image of metal"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Portoflio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio">
      <div className="relative isolate overflow-hidden bg-gradient-to-b bg-[#252525] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex-col">
          <div className="text-center mt-12">
            <h1 className="text-4xl uppercase text-white tracking-widest font-medium">
              {t("portfolioSection.title")}
            </h1>
            <h2 className="text-lg text-white mt-4 tracking-wide">
              {t("portfolioSection.subtitle")}
            </h2>
          </div>
          <Carousel />
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
