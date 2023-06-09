import { Accordion, Row } from "react-bootstrap";
import { IndicatorDetails } from "./IndicatorDetails";
import { AdditionnalIndicatorDetails } from "./AdditionnalIndicatorDetails";

/* Body of the page : Viewing the "EmpreinteSocietale" aka "ESE" */
export const ContentSocialFootprint = ({
  footprint,
  meta,
  divisionFootprint,
  historicalDivisionFootprint,
  additionnalData,
}) => {

  //  INDICATORS CATEGORIES
  const valueCreation = ["ECO", "ART", "SOC"];
  const socialFootprint = ["IDR", "GEQ", "KNW"];
  const environmentalFootprint = ["GHG", "NRG", "WAT", "MAT", "WAS", "HAZ"];
  const additionnalIndicators = ["IEP"];

  const valueCreationList = Object.fromEntries(
    Object.entries(footprint).filter(([key]) => valueCreation.includes(key))
  );
  const socialFootprintList = Object.fromEntries(
    Object.entries(footprint).filter(([key]) => socialFootprint.includes(key))
  );
  const environmentalFootprintList = Object.fromEntries(
    Object.entries(footprint).filter(([key]) =>
      environmentalFootprint.includes(key)
    )
  );
  const additionnalIndicatorsList = Object.fromEntries(
    Object.entries(additionnalData).filter(([key]) =>
      additionnalIndicators.includes(key)
    )
  );

  const valueCreationComponents = Object.entries(valueCreationList).map(
    ([key, data]) => (
      <IndicatorDetails
        key={key}
        code={key}
        unitSymbol={meta[key].unitSymbol}
        indicatorLabel={meta[key].indicatorLabel}
        source={meta[key].source}
        divisionFootprint={divisionFootprint}
        historicalDivisionFootprint={historicalDivisionFootprint}
        {...data}
      />
    )
  );

  const socialFootprintComponents = Object.entries(socialFootprintList).map(
    ([key, data]) => (
      <IndicatorDetails
        key={key}
        code={key}
        unitSymbol={meta[key].unitSymbol}
        indicatorLabel={meta[key].indicatorLabel}
        source={meta[key].source}
        divisionFootprint={divisionFootprint}
        historicalDivisionFootprint={historicalDivisionFootprint}
        {...data}
      />
    )
  );
  const environmentalFootprintComponents = Object.entries(
    environmentalFootprintList
  ).map(([key, data]) => (
    <IndicatorDetails
      key={key}
      code={key}
      unitSymbol={meta[key].unitSymbol}
      indicatorLabel={meta[key].indicatorLabel}
      source={meta[key].source}
      divisionFootprint={divisionFootprint}
      historicalDivisionFootprint={historicalDivisionFootprint}
      {...data}
    />
  ));

  const additionnalIndicatorsComponents = Object.entries(
    additionnalIndicatorsList
  ).map(([key, data]) => (
    <AdditionnalIndicatorDetails
      key={key}
      code={key}
      unitSymbol={meta[key].unitSymbol}
      indicatorLabel={meta[key].indicatorLabel}
      source={meta[key].source}
      divisionFootprint={divisionFootprint}
      {...data}
    />
  ));

  return (
    <Row className="indic-details">
      <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header as={"h3"}>Création de la valeur</Accordion.Header>
          <Accordion.Body>
            <Row>{valueCreationComponents}</Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Empreinte sociale</Accordion.Header>
          <Accordion.Body>
            <Row> {socialFootprintComponents}</Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Empreinte environnementale</Accordion.Header>
          <Accordion.Body>
            <Row>{environmentalFootprintComponents}</Row>
          </Accordion.Body>
        </Accordion.Item>
        {additionnalIndicatorsComponents.length > 0 && (
          <Accordion.Item eventKey="3">
            <Accordion.Header>Autres indicateurs disponibles</Accordion.Header>
            <Accordion.Body>
              <Row>{additionnalIndicatorsComponents}</Row>
            </Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>
    </Row>
  );
};
