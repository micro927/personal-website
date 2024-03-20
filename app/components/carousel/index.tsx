'use client';

import React, { Children, ReactNode, useCallback } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './components/arrowButtons';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import './index.css';

type PropsType = {
  loop?: boolean;
  children: ReactNode;
};

const Carousel: React.FC<PropsType> = ({ children, loop = false }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop }, [Autoplay()]);
  const slides = Children.toArray(children);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    // const resetOrStop =
    //   autoplay.init === false
    //     ? autoplay.reset
    //     : autoplay.stop;

    // resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
