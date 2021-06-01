import React, {useState, useEffect, useCallback} from 'react';
import { useEmblaCarousel } from 'embla-carousel/react'



const CarouselIndicators = ({indicators, empreinteSocietale,assessment, onIndicatorCommit}) => {
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

  return (
    <div id="indicators" className="strip">
      <h2>Indicateurs
          <IndicatorCounter counter={validIndicators.length} counted={indicators.length}/>
      </h2>
      <div className="menu" ref={thumbViewportRef}>
        <div className="menu-items">
            {indicators.map((indicator,index) => (
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
                  {indicators.map(indicator =>
                    (
                      <div className="embla__slide" key={indicator}>
                        <div className="embla__slide__inner">
                          <IndicatorView
                          indic={indicator}
                          indicData={empreinteSocietale[indicator.toUpperCase()]}
                          onCommit={
                            (indicator,value,uncertainty,skipped) => {
                              onIndicatorCommit(indicator,value,uncertainty,skipped);
                              scrollNext();
                            }
                          }/>
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
      Renseigné(s) : {counter}/{counted}
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

function IndicatorView({indic, indicData, onCommit}){
  let [value, setValue] = useState("");
  let [uncertainty, setUncertainty] = useState("");
  let [skipped, setSkipped] = useState("");
  const commitable = isCommitable(value,uncertainty,skipped);
  const message = commitable ? "Sauvegarder" : "Remplir les données de l'indicateur ou cocher la case";
  return (
      <div className="indicateur-form">
        <h3>{indicData.libelle}</h3>
        <div className="info-indicateur">
          <a href={"../indicateur/"+indic} target="_blank">Description de l'indicateur</a>
        </div>
        <div className="input">
          <label>Valeur :</label>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <span>&nbsp;{indicData.unit}</span>
        </div>
        <div className="input">
          <label>Incertitude :</label>
          <input type="text" value={uncertainty} onChange={(e) => setUncertainty(e.target.value)} />
          <span>&nbsp;%</span>
        </div>
        <div className="input">
          <input type="checkbox" id="skipped" name="skipped" checked={skipped} onChange={(e) => setSkipped(e.target.checked)}/>
          <label htmlFor="skipped">Je n'ai pas calculé cet indicateur</label>
        </div>
        <button className="form-btn commit" id="submit-indicator" type="submit" disabled={!commitable} 
          onClick={(e) => onCommit(indic,value,uncertainty,skipped)}>{message}
        </button>
      </div>    
  )
}

function isCommitable(value, uncertainty,skipped){
  return (skipped || (value!=="" && uncertainty!==""));
}

export default CarouselIndicators;