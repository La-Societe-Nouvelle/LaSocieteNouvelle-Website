import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Select from "react-select";

import TrendChart from "../charts/TrendChart";
import branchList from "../../lib/branches";
import { Col, Container, Row } from "react-bootstrap";

const TrendsChartBox = (props) => {
  const [branchs, setBranchs] = useState([]);
  const [aggregates, setAggregates] = useState([]);

  /* ---------- Display trend graph by branch and aggregate ---------- */

  const [selectedBranch, setSelectedBranch] = useState({
    label: "Toutes activités",
    value: "TOTAL",
  });
  const [selectedAggregate, setSelectedAggregate] = useState({
    label: "Production",
    value: "PRD",
  });

  const changeAggregate = (option) => {
    setSelectedAggregate(option);
  };

  const changeBranch = (option) => {
    setSelectedBranch(option);
  };

  useEffect(() => {
    let branchsOptions = [];
    //Divisions select options
    Object.entries(branchList)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map(([value, label]) => {
        branchsOptions.push({ value: value, label: label });
      });

    setBranchs(branchsOptions);

    const aggregatesOptions = [
      { value: "PRD", label: "Production" },
      { value: "IC", label: "Consommations intermédiaires" },
      { value: "CFC", label: "Consommation de capital fixe" },
      { value: "NVA", label: "Valeur ajoutée nette" },
    ];

    setAggregates(aggregatesOptions);
  }, []);

  return (
    <section className="bg-light">
      <Container>
        <h3 className="mb-5 text-center ">Courbes d'évolution</h3>
   
        <Row>
        <Col md={{ span: 10, offset: 1 }}>
        <Row className="mb-3">
          <Col>
              <Select
                className="mb-3 small-text"
                id="branchs-select"
                instanceId="branchs-select"
                placeholder={"Choisissez une branche d'activité"}
                defaultValue={{
                  value: selectedBranch.value,
                  label: selectedBranch.label,
                }}
                options={branchs}
                onChange={changeBranch}
              />
            </Col>
            <Col>
              <Select
                defaultValue={{
                  value: selectedAggregate.value,
                  label: selectedAggregate.label,
                }}
                className="mb-3 small-text"
                id="aggregates-select"
                instanceId="aggregates-select"
                placeholder={"Choisissez un aggrégat"}
                options={aggregates}
                onChange={changeAggregate}
              />
            </Col>
        </Row>
        <TrendChart
          indic={props.indic}
          aggregate={selectedAggregate.value}
          code={selectedBranch.value}
          branch={selectedBranch.label}
        />

        </Col>
      </Row>

      </Container>
    </section>
  );
};

export default TrendsChartBox;
