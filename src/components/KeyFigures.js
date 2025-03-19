import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, Carousel } from "react-bootstrap";
import axios from "axios";

const refYear = "2024";

export const KeyFigures = () => 
{
  const [index, setIndex] = useState(0);
  const [keyFigures, setKeyFigures] = useState([]);

  useEffect(() => {
    fetchKeyFiguresData();
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [keyFigures])

  const fetchKeyFiguresData = async () => 
  {
    const urls = [
      `${process.env.NEXT_PUBLIC_API_URL}/macrodata/na_cpeb?classification=NNTOTAL&aggregate=B1N&unit=CPMEUR&year=`+refYear,
      `${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt_trd?industry=TOTAL&country=FRA&aggregate=NVA&indic=GHG&year=`+refYear,
      `${process.env.NEXT_PUBLIC_API_URL}/macrodata/macro_fpt_trd?industry=TOTAL&country=FRA&aggregate=NVA&indic=GEQ&year=`+refYear,
    ];

    const requests = urls.map((url) => axios.get(url));

    try {
      const responses = await axios.all(requests);
      
      const data_pin = responses[0].data.header.code === 200 ? (responses[0].data.data[0].value / 1000).toFixed(2) : "";
      const data_ghg = responses[1].data.header.code === 200 ? responses[1].data.data[0].value.toFixed(0) : "";
      const data_geq = responses[2].data.header.code === 200 ? responses[2].data.data[0].value.toFixed(1) : "";

      setKeyFigures([{
        period: '2024',
        value: data_pin,
        unit: 'Mds €',
        title: 'Production intérieure nette',
        illustration: 'ESE/icon-ese-bleues/eco.svg'
      },{
        period: '2024',
        value: data_ghg,
        unit: 'gCO₂e/€',
        title: 'Intensité d\'émission de gaz à effet de serre',
        illustration: 'ESE/icon-ese-bleues/ghg.svg'
      },{
        period: '2025-01',
        value: 35.7,
        unit: 'MtCO₂e',
        title: 'Emission intérieures de gaz à effet de serre',
        illustration: 'ESE/icon-ese-bleues/ghg.svg'
      },{
        period: '2024',
        value: data_geq,
        unit: '%',
        title: 'Ecart de rémunération F/H',
        illustration: 'ESE/icon-ese-bleues/geq.svg'
      }])

    } catch (error) {
      console.log(error);
    }
  };

  const index_start = (index>0 ? index : keyFigures.length-index) % keyFigures.length;
  const keyFiguresShowed = [...keyFigures, ...keyFigures].slice(index_start, index_start+4);

  return (
    <section className="">
      <Container className="">
        <h2 className="mb-5">Nos dernières données sur l'empreinte de la production intérieure française</h2>
        <Row className="slide">
          {/* <Col lg={1} className="button-carousel" onClick={() => setIndex(index-1)}>
            <i className="bi bi-chevron-compact-left"/>
          </Col> */}
          {keyFiguresShowed.map((keyFigureData) => 
            <Col className="statistic-item mx-4 p-0 shadow-sm">
              <Row className="w-100 py-4 mx-auto bg-light-blue" style={{height: "200px", position: "relative"}}>
                <p>{keyFigureData.period}</p>
                <Image
                  src={keyFigureData.illustration}
                  height="125px"
                  className=""
                  alt=""
                  style={{position: "absolute", top:  "25%", left: "0%", opacity: "10%"}}
                />
                <p className="text-center my-4">
                  <span className="h1">
                    <data value={keyFigureData.value}>{keyFigureData.value} </data>
                  </span>
                  <sup> {keyFigureData.unit}</sup>
                </p>
              </Row>
              <Row className="w-100 m-auto">
                <p className="text-center my-3 text-primary">{keyFigureData.title}</p>
              </Row>
            </Col> 
          )}
          {/* <Col lg={1} className="button-carousel" onClick={() => setIndex(index+1)}>
            <i className="bi bi-chevron-compact-right"/>
          </Col> */}
        </Row>
        <Row className="align-items-end mt-2">
          <Col className="text-end">
            <Button
              title="En savoir plus sur Metriz"
              className=" mx-2 mt-4 rounded-0"
              href="https://sinese.fr/macro"
            >
              Panorama de l'empreinte sociétale des activités économiques <i className="bi bi-chevron-double-right ms-2"/>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
