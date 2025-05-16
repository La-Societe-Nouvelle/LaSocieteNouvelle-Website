// La Société Nouvelle

//-- React
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

//-- Bootstrap
import {
  Container,
  Table,
  Pagination,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

//-- Packages
import * as XLSX from "xlsx";
import _ from "lodash";

//-- Metadata
import metaDatasets from "../../../lib/datasets.json";

function DatasetPage() 
{
  const router = useRouter();
  const { 
    dataset, 
    indic, 
    aggregate, 
    year, 
    country 
  } = router.query;

  // --------------------------------------------------

  const [settings, setSettings] = useState({});

  const [data, setData] = useState(null);
  const [metadata, setMetadata] = useState(null);

  const [columns, setColumns] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});

  // --------------------------------------------------

  useEffect(() => 
  {
    if (dataset) 
    {
      const {
        parameters
      } = metaDatasets[dataset];
    
      const defaultFilters = _.chain(parameters)
        .filter(parameter => parameter.defaultValue)
        .keyBy('code')
        .mapValues('defaultValue')
        .value();
      
      setSettings({
        ...metaDatasets[dataset],
        defaultFilters
      });
      setSelectedValues(defaultFilters);
    }
  }, [dataset]);

  // --------------------------------------------------

  const {
    label,
    docs,
    parameters,
    columnsParameter,
    rowsParameter,
    defaultFilters
  } = settings;

  // --------------------------------------------------

  useEffect(() => 
  {
    const filters = Object.entries(selectedValues)
      .map(([key,value]) => key+"="+value)
      .join("&")

    const fetchData = async () => {
      if (dataset) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/macrodata/${dataset}?`+filters
        );
        const results = await response.json();
        setData(results.data);
        setColumns(Object.keys(results.data[0]));
      }
    };

    const fetchMetadata = async () => {
      if (dataset) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/macrodata/metadata/${dataset}`
        );
        const results = await response.json();
        setMetadata(results.metadata);
      }
    };

    if (filters) {
      fetchData();
      fetchMetadata();
    }
    
  }, [dataset,selectedValues]);

  // useEffect(() => {
  //   // Apply pre-selected filters based on URL parameters
  //   if (indic) {
  //     setSelectedValues((prevSelectedValues) => ({
  //       ...prevSelectedValues,
  //       indic: indic,
  //     }));
  //   }
  //   if (country) {
  //     setSelectedValues((prevSelectedValues) => ({
  //       ...prevSelectedValues,
  //       country: country,
  //     }));
  //   }
  //   if (year) {
  //     setSelectedValues((prevSelectedValues) => ({
  //       ...prevSelectedValues,
  //       year: year,
  //     }));
  //   }
  //   if (aggregate) {
  //     setSelectedValues((prevSelectedValues) => ({
  //       ...prevSelectedValues,
  //       aggregate: aggregate,
  //     }));
  //   }
  // }, [indic, aggregate, year, country]);

  // ...

  if (!columns.length || !data) {
    return (
      <div className="bg-white p-5 rounded-3">
        <div className="text-center">
          <p>Chargement des données... </p>
          <div className="dot-pulse m-auto"></div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    const fileName = "LSN-" + dataset + ".xlsx";

    XLSX.writeFile(workbook, fileName);
  };

  const generateOptions = (paramCode) => {
    const values = [...metadata[paramCode]];
    if(paramCode == "branch" || paramCode == "indic" || paramCode == "division") {
      values.sort((a, b) => {
        return a.code.localeCompare(b.code);
      }); 
    }
    else {
      values.sort((a, b) => {
        if (a.label === null || b.label === null) {
          return 0; // Ignore the sorting if label is null
        }
        return a.label.localeCompare(b.label);
      }); 
    }
   
    return values.map(({ code, label }) => (
      <option key={code} value={code}>
        {code !== label ? `${code} - ${label}` : label}
      </option>
    ));
  };
  
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [name]: value,
    }));
  };

  const handleResetFilters = () => {
    setSelectedValues(defaultFilters);
  };

  // --------------------------------------------------

  return (
    <section className="dataset-page bg-light">
      <Container fluid className="px-5 pt-3">
        <div className="p-4 border rounded bg-white ">
          <div className="d-flex justify-content-between align-items-center">
            <h2>
              <i className="bi bi-box me-2"/>{label || "Titre du jeu de données"}
            </h2>
            <div className="mb-3 text-end">
              <a
                href={docs}
                target="_blank"
                className="bg-light btn btn-sm rounded  me-2"
              >
                <i className="bi bi-info-circle-fill me-2"/> Documentation
              </a>
            </div>
          </div>
          <div>
            <p>Nom de la table : <b>{dataset}</b></p>
          </div>
          <hr/>

          {/* Filtres */}
          <Form className={"filter-form"}>
            <Row>
              {parameters.map((parameter) =>
                <Col key={parameter.code} md={4}>
                  <Form.Group controlId={parameter.code} className="mb-2">
                    <Form.Label>{parameter.label}</Form.Label>
                    <Form.Control
                      as="select"
                      name={parameter.code}
                      value={selectedValues[parameter.code] || ""}
                      onChange={handleSelectChange}
                    >
                      {generateOptions(parameter.code)}
                    </Form.Control>
                  </Form.Group>
                </Col>
              )}
            </Row>
            <div className=" my-3">
              <Button variant="info" size="sm" onClick={handleResetFilters}>
                Réinitialiser les filtres
              </Button>
            </div>
          </Form>
          <hr></hr>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <p className="small mb-0">
              <b>{data.length}</b> valeurs affichées
            </p>
            <Button 
              variant="outline"
              size="sm" 
              onClick={exportToExcel}
            >
              <i className="bi bi-download"></i> Télécharger les données
              affichées
            </Button>
          </div>

          <div className="table-responsive mb-5">
            <Table className="data-table">
              <thead>
                <tr>
                  <th className="">
                    Industries
                  </th>
                  {metadata[columnsParameter]
                    .filter((columnParam) => parseInt(columnParam.code) >= 2010)
                    .sort((a,b) => parseInt(a.code) - parseInt(b.code))
                    .map((metadataParam) => (
                      <th key={metadataParam.code}>
                        {metadataParam.label}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {metadata[rowsParameter]
                  .map((rowParam) => (
                    <tr key={rowParam.code}>
                      <td className="first-column">
                        {rowParam.label}
                      </td>
                      {metadata[columnsParameter]
                        .filter((columnParam) => parseInt(columnParam.code) >= 2010)
                        .sort((a,b) => parseInt(a.code) - parseInt(b.code))
                        .map((columnParam) => (
                          <td key={columnParam.code} className="data-cell">
                            {data.find((item) => item[rowsParameter] == rowParam.code && item[columnsParameter] == columnParam.code)?.value ?? ':'}
                          </td>
                        ))}
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DatasetPage;
