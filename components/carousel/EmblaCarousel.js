"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import CarouselDots from "./CarouselDots";

export default function EmblaCarousel({
  items = [],
  renderSlide,
  loop = true,
  autoplay = true,
  delay = 3000,
  className = "",
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align: "start", slidesToScroll: 1 },
    autoplay ? [Autoplay({ delay, stopOnInteraction: false })] : []
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={`carousel-wrapper ${className}`}>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {items.map((item, index) => (
              <div className="embla__slide" key={index}>
                {renderSlide(item, index)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {scrollSnaps.length > 1 && (
        <CarouselDots
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
          onSelect={scrollTo}
        />
      )}
    </div>
  );
}
