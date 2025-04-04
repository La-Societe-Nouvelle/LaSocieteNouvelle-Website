// La Société Nouvelle

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Table,
  Pagination,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

import * as XLSX from "xlsx";

const metadata = {
  env_impact: {
    libelle: "Impact environnemental",
    values: [{
      code: "GHG",
      label: "Emission de GES"
    }],
    mandatory: true
  },
  area: {
    libelle: "Espace économique",
    values: [{
      code: "FRA",
      label: "France"
    }],
    mandatory: true
  }
}

function DatasetPage() 
{
  const router = useRouter();
  const { dataset } = router.query;
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [columns, setColumns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedValues, setSelectedValues] = useState({year: "2024"});

  const itemsPerPage = 100;
  const maxPaginationLinks = 20;

  const applyFilters = () => {
    const filteredData = data.filter((item) => {
      return Object.keys(selectedValues).every((key) => {
        return selectedValues[key] === "" || item[key] === selectedValues[key];
      });
    });

    setFilteredData(filteredData);
  };

  const fetchData = async () => 
  {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/env_impact_factors?env_impact=GHG&area=FRA`
    );
    const results = await response.json();
    setData(results.data);
    setColumns(Object.keys(results.data[0]));
  };

  useEffect(() => {
    fetchData();
  }, [dataset]);

  useEffect(() => 
  {
    // Apply pre-selected filters based on URL parameters
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      env_impact: "GHG",
    }));
  }, []);

  useEffect(() => {
    if (data) {
      applyFilters();
    }
  }, [selectedValues, data]);

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

  // Pagination
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = filteredData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageRange = () => {
    let startPage = Math.max(
      currentPage - Math.floor(maxPaginationLinks / 2),
      1
    );
    const endPage = Math.min(startPage + maxPaginationLinks - 1, totalPages);

    let pageRange = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );

    // Add ellipsis (...) for intermediate pages
    if (startPage > 1) {
      pageRange = [1, "...", ...pageRange];
    }
    if (endPage < totalPages) {
      pageRange = [...pageRange, "...", totalPages];
    }

    return pageRange;
  };

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
    let dataToExport;
    filteredData ? (dataToExport = filteredData) : (dataToExport = data);

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    const fileName = "LSN-" + dataset + ".xlsx";

    XLSX.writeFile(workbook, fileName);
  };

  const generateOptions = (key) => 
  {
    const values = [...metadata[key].values];

    if(key == "activity" || key == "area") {
      values.sort((a, b) => a.code.localeCompare(b.code)); 
    }
    else {
      values.sort((a, b) => {
        if (a.label === null || b.label === null) {
          return 0; // Ignore the sorting if label is null
        } else {
          return a.label.localeCompare(b.label);
        }
      }); 
    }
   
    return values.map(({ code, label }) => (
      <option key={code} value={code}>{label}</option>
    ));
  };
  
  const handleSelectChange = (event) => 
    {
    const { name, value } = event.target;
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setSelectedValues({});
    setFilteredData(data);
  };

  return (
    <section className="dataset-page bg-light">
      <Container fluid>
        <Row>
          <Col lg={3}>
            <div className="bg-white rounded p-4">
              <h2>Jeux de données</h2>
              <h3 className="h5">Empreintes des activités économiques</h3>
              <ul className="list-unstyled datasets-list">
              <li>
                  <a href="/databrowser/dataset/macro_fpt">
                    <i className="bi bi-chevron-right"></i> Empreintes des
                    activités économiques - données historiques
                  </a>
                </li>
                <li>
                  <a href="/databrowser/dataset/macro_fpt_trd">
                    <i className="bi bi-chevron-right"></i> Empreintes des
                    activités économiques - tendances
                  </a>
                </li>
                <li>
                  <a href="/databrowser/dataset/macro_fpt_tgt">
                    <i className="bi bi-chevron-right"></i> Objectifs annuels
                    par activité économique
                  </a>
                </li>
              </ul>
              <hr></hr>
              <h4>Données des comptes nationaux</h4>
              <ul className="list-unstyled datasets-list">
                <li>
                  <a href="/databrowser/dataset/na_cpeb">
                    <i className="bi bi-chevron-right"></i> Comptes de
                    production et d'exploitation par branche
                  </a>
                </li>
                <li>
                  <a href="/databrowser/dataset/na_ere">
                    <i className="bi bi-chevron-right"></i> Tableau des entrées
                    ressources emplois
                  </a>
                </li>
                <li>
                  <a href="/databrowser/dataset/na_pat_nf">
                    <i className="bi bi-chevron-right"></i> Comptes de
                    patrimoine non-financier
                  </a>
                </li>
                <li>
                  <a href="/databrowser/dataset/na_tei">
                    <i className="bi bi-chevron-right"></i> Tableau des entrées
                    intermédiaires
                  </a>
                </li>
                <li>
                  <a href="/databrowser/dataset/na_tess">
                    <i className="bi bi-chevron-right"></i> Tableau des
                    entrées-sorties symétrique
                  </a>
                </li>
              </ul>
              <hr></hr>

              <h4>Données sociales</h4>
              <ul className="list-unstyled datasets-list">
                <li>
                  <a href="/databrowser/dataset/bts_data">
                    <i className="bi bi-chevron-right me-1"/>Indicateurs issus de la base tous salariés
                  </a>
                </li>
                <li>
                  <a href="/databrowser/env_impact_factors">
                    <i className="bi bi-chevron-right me-1"/>Facteurs d'impact monétaires
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col>
            <div className="p-4 border rounded bg-white ">
              <div className="d-flex justify-content-between align-items-center">
                <h2>
                  <i className="bi bi-box me-3"/>Facteurs d'impacts monétaires
                </h2>
                <div className="mb-3 text-end">
                  <a
                    href="empty"
                    target="_blank"
                    className="bg-light btn btn-sm rounded  me-2"
                  >
                    <i className="bi bi-info-circle-fill"></i> Note explicative
                  </a>
                </div>
              </div>
              <hr></hr>

              <Form className={"filter-form"}>
                <Row>
                  {Object.keys(metadata).map((key) => 
                      <Col key={key} md={4}>
                        <Form.Group controlId={key} className="mb-2">
                          <Form.Label>{metadata[key].libelle}</Form.Label>
                          <Form.Control
                            as="select"
                            name={key}
                            value={selectedValues[key] || ""}
                            onChange={handleSelectChange}
                          >
                            {!metadata[key].mandatory &&
                              <option value="">Toutes les valeurs</option>}
                            {generateOptions(key)}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    )}
                </Row>
                <div className=" my-3">
                  <Button variant="info" size="sm" onClick={handleCancel}>
                    Effacer les filtres
                  </Button>
                </div>
              </Form>
              <hr></hr>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <p className="small mb-0">
                  <b>{filteredData.length}</b> valeurs affichées
                </p>
                <Button variant="secondary" size="sm" onClick={exportToExcel}>
                  <i className="bi bi-download"></i> Télécharger les données
                  affichées
                </Button>
              </div>

              <Table className="data-table" responsive>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Facteur</th>
                    <th>Unité</th>
                    <th>Incertitude</th>
                    <th>Source</th>
                    <th>Dernière mise à jour</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData
                    .sort((a, b) => {
                      const firstCellValueA = a[columns[0]];
                      const firstCellValueB = b[columns[0]];
                      if (firstCellValueA < firstCellValueB) {
                        return -1;
                      }
                      if (firstCellValueA > firstCellValueB) {
                        return 1;
                      }
                      return 0;
                    })
                    .map((entry, index) => (
                      <tr key={index}>
                        <td>{entry.description}</td>
                        <td className="text-end">{entry.value}</td>
                        <td className="text-end">{"gCO2e/€"}</td>
                        <td className="text-end">{entry.uncertainty+' %'}</td>
                        <td>{entry.source}</td>
                        <td className="text-center">{formatDate(entry.lastupdate)}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <Pagination className="justify-content-end">
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {getPageRange().map((page, index) => {
                  if (page === "...") {
                    return <Pagination.Ellipsis key={index} disabled />;
                  } else {
                    return (
                      <Pagination.Item
                        key={index}
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Pagination.Item>
                    );
                  }
                })}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DatasetPage;
