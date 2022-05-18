import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";
import Image from "next/image";

import Slide2 from "../../public/static/images/slider-img.png";

const Slider2 = ({ slide2, options = { loop: false } }) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 5000, stopOnInteraction: false, draggable: true },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [viewportRef, embla, emblaRef, emblaApi] = useEmblaCarousel(
    { skipSnaps: false },
    [autoplay.current]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

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
      <div className="embla mt-10 w-full absolute">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slide2.map((index) => (
              <div className="embla__slide key={index}">
                <div className="embla__slide__inner bg-[#D63031] md:h-[300px] items-center flex py-3.5">
                  {/* Content  */}
                  <div className="flex w-full gap-x-4 md:gap-x-8 items-center mx-3.5 md:mx-20">
                    {/* Image  */}
                    <div className="">
                      {/* <Image
                        className="-translate-y-16 -translate-x-3 md:-translate-y-32 lg:-translate-y-40 md:-translate-x-16 lg:-translate- w-60 md:w-8/12 lg:w-7/12 absolute z-20"
                        src={Slide2}
                        layout={"responsive"}
                        objectFit={"cover"}
                      /> */}
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
                      <button className="z-40 -translate-x-3 translate-y-10 md:translate-x-28 md:-translate-y-5 absolute text-xs px-1 md:text-lg md:px-3 p-0.5 bg-white text-red-600 rounded-full whitespace-nowrap">
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
                      <button className="z-40 -translate-x-3 translate-y-10 md:translate-x-28 md:-translate-y-5 absolute text-xs px-1 md:text-lg md:px-3 p-0.5 bg-white text-red-600 rounded-full whitespace-nowrap">
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
                      <button className="z-40 -translate-x-3 translate-y-10 md:translate-x-28 md:-translate-y-5 absolute text-xs px-1 md:text-lg md:px-3 p-0.5 bg-white text-red-600 rounded-full whitespace-nowrap">
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
                      <button className="z-40 -translate-x-3 translate-y-10 md:translate-x-28 md:-translate-y-5 absolute text-xs px-1 md:text-lg md:px-3 p-0.5 bg-white text-red-600 rounded-full whitespace-nowrap">
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
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
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
    className="embla__button embla__button--prev hidden md:block w-15 h-15"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <rect
          width="33"
          height="33"
          rx="16.5"
          transform="matrix(-4.37114e-08 1 1 4.37114e-08 0.688232 0.0941162)"
          fill="white"
        />
        <path
          d="M20.7358 7.34756C21.0144 7.62029 21.1709 7.99014 21.1709 8.37578C21.1709 8.76141 21.0144 9.13126 20.7358 9.40399L13.379 16.6029L20.7358 23.8019C21.0065 24.0762 21.1563 24.4436 21.1529 24.8249C21.1495 25.2062 20.9932 25.571 20.7177 25.8406C20.4421 26.1103 20.0694 26.2632 19.6797 26.2665C19.29 26.2698 18.9146 26.1232 18.6343 25.8583L10.2268 17.6312C9.94815 17.3584 9.79163 16.9886 9.79163 16.6029C9.79163 16.2173 9.94815 15.8475 10.2268 15.5747L18.6343 7.34756C18.913 7.07492 19.2909 6.92175 19.685 6.92175C20.0791 6.92175 20.4571 7.07492 20.7358 7.34756Z"
          fill="#AEAEAE"
        />
      </g>
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next hidden md:block w-15 h-15"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <rect
          x="33.688"
          y="0.0941162"
          width="33"
          height="33"
          rx="16.5"
          transform="rotate(90 33.688 0.0941162)"
          fill="white"
        />
        <path
          d="M13.6405 7.34756C13.3619 7.62029 13.2054 7.99014 13.2054 8.37578C13.2054 8.76141 13.3619 9.13126 13.6405 9.40399L20.9973 16.6029L13.6406 23.8019C13.3698 24.0762 13.22 24.4436 13.2234 24.8249C13.2268 25.2062 13.3831 25.571 13.6587 25.8406C13.9342 26.1103 14.307 26.2632 14.6967 26.2665C15.0863 26.2698 15.4618 26.1233 15.7421 25.8583L24.1496 17.6312C24.4282 17.3584 24.5847 16.9886 24.5847 16.6029C24.5847 16.2173 24.4282 15.8475 24.1496 15.5747L15.7421 7.34756C15.4634 7.07492 15.0854 6.92175 14.6913 6.92175C14.2972 6.92175 13.9193 7.07492 13.6405 7.34756Z"
          fill="#AEAEAE"
        />
      </g>
    </svg>
  </button>
);
export default Slider2;
