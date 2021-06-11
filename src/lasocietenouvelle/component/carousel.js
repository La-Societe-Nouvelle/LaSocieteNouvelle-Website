import React, {useState, useEffect, useCallback} from 'react';
import { useEmblaCarousel } from 'embla-carousel/react'

import {IndicatorSimplifiedAssessmentView} from './indicatorSimplifiedAssessmentView'
import {IndicatorAssessmentView} from './indicatorAssessmentView'

/* Metadata for indicators */
import {indics} from '../../../public/indic-data/data.js'

const CarouselIndicators = ({assessment, assessmentType, indicatorViewProps, onIndicatorCommit}) => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    draggable: false,
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);
  
  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const isValid = ({value,uncertainty}) => (value!== undefined && uncertainty !== undefined);
  let tickedIndicators = Object.values(assessment);
  let validIndicators = tickedIndicators.filter(isValid);

  const getAssessmentView = (assessmentType,indicator,indicatorViewProps,onIndicatorCommit) => {
    switch(assessmentType) {
      case "simplified": return(
        <IndicatorSimplifiedAssessmentView indic={indicator} {...indicatorViewProps}
        onCommit={(indicator,value,uncertainty,skipped) => {
          onIndicatorCommit(indicator,value,uncertainty,skipped);
          scrollNext();}
        }
        onUpdate={(indicator,value,uncertainty,skipped) => {
          onIndicatorCommit(indicator,value,uncertainty,skipped);}
        }/>)
      default: return (
        <IndicatorAssessmentView indic={indicator} {...indicatorViewProps}
        onCommit={(indicator,value,uncertainty,skipped) => {
          onIndicatorCommit(indicator,value,uncertainty,skipped);
          scrollNext();}
        }/>)
    }
  }

  return (
    <div id="indicators" className="strip">
      <h2>Indicateurs
          <IndicatorCounter counter={validIndicators.length} counted={indics.length}/>
      </h2>
      <div className="menu" ref={thumbViewportRef}>
        <div className="menu-items">
            {indics.map((indicator,index) => (
              <Thumb
                key={index}
                onClick={() => scrollTo(index)}
                selected={index === selectedIndex}
                indic={indicator.toUpperCase()}
                ticked={assessment[indicator]!== undefined}
              />
            ))}
        </div>
      </div>

      <div id="indicator-view">
        <PrevButton onClick={scrollPrev}/>
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                  {indics.map(indicator =>
                    (
                      <div className="embla__slide" key={indicator}>
                        <div className="embla__slide__inner">
                          {getAssessmentView(assessmentType,indicator,indicatorViewProps,onIndicatorCommit)}
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        <NextButton onClick={scrollNext}/>
      </div>
    </div>
  )
}

const Thumb = ({selected, onClick, indic, ticked }) => (
  <button
    onClick={onClick}
    className={`menu-button ${selected ? "selected" : ""}`}
    type="button"
  >
      <span></span>
      {indic}
      <span className={ticked ? "ticked" :""}></span>
  </button>
);

/* ----- Counter Indicator ----- */
function IndicatorCounter({counter, counted}){
  return (
    <div className="counter">
      renseigné(s) : {counter}/{counted}
    </div>
  )
}

/* --- Carroussel indicator --- */

const PrevButton = ({onClick}) => (
  <button className="prev-btn" onClick={onClick}><span className="prev-arrow"></span></button>
);

const NextButton = ({onClick}) => (
  <button className="next-btn" onClick={onClick}><span className="next-arrow"></span></button>
);

export default CarouselIndicators;