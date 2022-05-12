import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
// import { mediaByIndex } from "../media";
// import "../css/embla.css";

const Slider2 = ({ slide2, options = { loop: false } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  // const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  const [viewportRef, embla, emblaRef, emblaApi] = useEmblaCarousel(
    { skipSnaps: false },
    [autoplay.current]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );
  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla mt-10 w-full z-10 absolute">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slide2.map((index) => (
              <div className="embla__slide key={index}">
                <div className="embla__slide__inner bg-[#D63031] md:h-[300px] items-center flex py-3.5">
                  {/* Content  */}
                  <div className="flex w-full gap-x-4 md:gap-x-8 items-center mx-3.5 md:mx-20">
                    {/* Image  */}
                    <div className="">
                      <img
                        className="-translate-y-16 -translate-x-3 md:-translate-y-32 lg:-translate-y-40 md:-translate-x-16 lg:-translate- w-60 md:w-8/12 lg:w-7/12 absolute z-20"
                        src="/static/images/slider-img.png"
                      />
                    </div>
                    {/* Text */}
                    <div className="flex-col z-30 translate-x-24 md:translate-x-36 lg:translate-x-44 w-52 md:w-7/12 lg:w-8/12">
                      <div className="text-[30px] md:text-[55px] lg:text-[80px] text-white fontbebas tracking-wide whitespace-nowrap">
                        COFFEE MACHINE
                      </div>
                      <div className="text-[8px] md:text-sm text-white leading-3 mb-5">
                        Lörem ipsum poskap epijivis såväl som decital därför att
                        nigen, då tamiligt. Trates heteroroligt etrement
                        smygflyga premani. Visat heterogähet. Förväntis
                        digitalbox psykogram per. Prelig nire att häbel, och
                        best.
                      </div>
                    </div>
                    {/* Button */}
                    <div>
                      <button className="z-40 translate-y-10 md:translate-x-28 md:-translate-y-5 absolute text-xs px-1 md:text-lg md:px-3 p-0.5 bg-white text-red-600 rounded-full whitespace-nowrap">
                        Belanja Sekarang
                      </button>
                    </div>
                  </div>
                  {/* EndContent  */}
                </div>
              </div>
            ))}
            {slide2.map((index) => (
              <div className="embla__slide key={index}">
                <div className="embla__slide__inner bg-[#D63031] md:h-[300px] items-center flex py-3.5">
                  {/* Content  */}
                  <div className="flex w-full gap-x-4 md:gap-x-8 items-center mx-3.5 md:mx-20">
                    {/* Image  */}
                    <div className="">
                      <img
                        className="-translate-y-16 -translate-x-3 md:-translate-y-32 lg:-translate-y-40 md:-translate-x-16 lg:-translate- w-60 md:w-8/12 lg:w-7/12 absolute z-20"
                        src="/static/images/slider-img.png"
                      />
                    </div>
                    {/* Text */}
                    <div className="flex-col z-30 translate-x-24 md:translate-x-36 lg:translate-x-44 w-52 md:w-7/12 lg:w-8/12">
                      <div className="text-[30px] md:text-[55px] lg:text-[80px] text-white fontbebas tracking-wide whitespace-nowrap">
                        COFFEE MACHINE
                      </div>
                      <div className="text-[8px] md:text-sm text-white leading-3 mb-5">
                        Lörem ipsum poskap epijivis såväl som decital därför att
                        nigen, då tamiligt. Trates heteroroligt etrement
                        smygflyga premani. Visat heterogähet. Förväntis
                        digitalbox psykogram per. Prelig nire att häbel, och
                        best.
                      </div>
                    </div>
                    {/* Button */}
                    <div>
                      <button className="z-40 translate-y-10 md:translate-x-28 md:-translate-y-5 absolute text-xs px-1 md:text-lg md:px-3 p-0.5 bg-white text-red-600 rounded-full whitespace-nowrap">
                        Belanja Sekarang
                      </button>
                    </div>
                  </div>
                  {/* EndContent  */}
                </div>
              </div>
            ))}
            {slide2.map((index) => (
              <div className="embla__slide key={index}">
                <div className="embla__slide__inner bg-[#D63031] md:h-[300px] items-center flex py-3.5">
                  {/* Content  */}
                  <div className="flex w-full gap-x-4 md:gap-x-8 items-center mx-3.5 md:mx-20">
                    {/* Image  */}
                    <div className="">
                      <img
                        className="-translate-y-16 -translate-x-3 md:-translate-y-32 lg:-translate-y-40 md:-translate-x-16 lg:-translate- w-60 md:w-8/12 lg:w-7/12 absolute z-20"
                        src="/static/images/slider-img.png"
                      />
                    </div>
                    {/* Text */}
                    <div className="flex-col z-30 translate-x-24 md:translate-x-36 lg:translate-x-44 w-52 md:w-7/12 lg:w-8/12">
                      <div className="text-[30px] md:text-[55px] lg:text-[80px] text-white fontbebas tracking-wide whitespace-nowrap">
                        COFFEE MACHINE
                      </div>
                      <div className="text-[8px] md:text-sm text-white leading-3 mb-5">
                        Lörem ipsum poskap epijivis såväl som decital därför att
                        nigen, då tamiligt. Trates heteroroligt etrement
                        smygflyga premani. Visat heterogähet. Förväntis
                        digitalbox psykogram per. Prelig nire att häbel, och
                        best.
                      </div>
                    </div>
                    {/* Button */}
                    <div>
                      <button className="z-40 translate-y-10 md:translate-x-28 md:-translate-y-5 absolute text-xs px-1 md:text-lg md:px-3 p-0.5 bg-white text-red-600 rounded-full whitespace-nowrap">
                        Belanja Sekarang
                      </button>
                    </div>
                  </div>
                  {/* EndContent  */}
                </div>
              </div>
            ))}
            {slide2.map((index) => (
              <div className="embla__slide key={index}">
                <div className="embla__slide__inner bg-[#D63031] md:h-[300px] items-center flex py-3.5">
                  {/* Content  */}
                  <div className="flex w-full gap-x-4 md:gap-x-8 items-center mx-3.5 md:mx-20">
                    {/* Image  */}
                    <div className="">
                      <img
                        className="-translate-y-16 -translate-x-3 md:-translate-y-32 lg:-translate-y-40 md:-translate-x-16 lg:-translate- w-60 md:w-8/12 lg:w-7/12 absolute z-20"
                        src="/static/images/slider-img.png"
                      />
                    </div>
                    {/* Text */}
                    <div className="flex-col z-30 translate-x-24 md:translate-x-36 lg:translate-x-44 w-52 md:w-7/12 lg:w-8/12">
                      <div className="text-[30px] md:text-[55px] lg:text-[80px] text-white fontbebas tracking-wide whitespace-nowrap">
                        COFFEE MACHINE
                      </div>
                      <div className="text-[8px] md:text-sm text-white leading-3 mb-5">
                        Lörem ipsum poskap epijivis såväl som decital därför att
                        nigen, då tamiligt. Trates heteroroligt etrement
                        smygflyga premani. Visat heterogähet. Förväntis
                        digitalbox psykogram per. Prelig nire att häbel, och
                        best.
                      </div>
                    </div>
                    {/* Button */}
                    <div>
                      <button className="z-40 translate-y-10 md:translate-x-28 md:-translate-y-5 absolute text-xs px-1 md:text-lg md:px-3 p-0.5 bg-white text-red-600 rounded-full whitespace-nowrap">
                        Belanja Sekarang
                      </button>
                    </div>
                  </div>
                  {/* EndContent  */}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
      </div>
      <div className="embla__dots -translate-y-8 md:-translate-y-12 lg:-translate-y-16">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);
export default Slider2;
