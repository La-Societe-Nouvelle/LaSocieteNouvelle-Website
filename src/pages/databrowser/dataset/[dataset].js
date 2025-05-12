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

function DatasetPage() 
{
  const router = useRouter();
  const { dataset, indic, aggregate, year, country } = router.query;

  // --------------------------------------------------

  const [data, setData] = useState(null);
  const [datasetMetadata, setDatasetMetadata] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [metadata, setMetadata] = useState();
  const [columns, setColumns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedValues, setSelectedValues] = useState({
    indic: 'GHG',
    country: 'FRA',
    aggregate: 'PRD'
  });

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
        setDatasetMetadata(results.meta);
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

    fetchData();
    fetchMetadata();
  }, [dataset]);

  useEffect(() => {
    // Apply pre-selected filters based on URL parameters
    if (indic) {
      setSelectedValues((prevSelectedValues) => ({
        ...prevSelectedValues,
        indic: indic,
      }));
    }
    if (country) {
      setSelectedValues((prevSelectedValues) => ({
        ...prevSelectedValues,
        country: country,
      }));
    }
    if (year) {
      setSelectedValues((prevSelectedValues) => ({
        ...prevSelectedValues,
        year: year,
      }));
    }
    if (aggregate) {
      setSelectedValues((prevSelectedValues) => ({
        ...prevSelectedValues,
        aggregate: aggregate,
      }));
    }
  }, [indic, aggregate, year, country]);
  // ...

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

  const generateOptions = (key) => {
    const values = [...metadata[key]];

    if(key == "branch" || key == "indic" || key == "division") {
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

  const handleCancel = () => {
    setSelectedValues({});
    setFilteredData(data);

    const { pathname } = router;
    const { dataset } = router.query;

    const newQuery = { dataset };

    router.push({
      pathname,
      query: newQuery,
    });
  };

  return (
    <section className="dataset-page bg-light">
      <Container fluid className="px-5 pt-3">
        <div className="p-4 border rounded bg-white ">
          <div className="d-flex justify-content-between align-items-center">
            <h2>
              <i className="bi bi-box me-2"/>{datasetMetadata.label || "Titre du jeu de données"}
            </h2>

            <div className="mb-3 text-end">
              <a
                href={datasetMetadata.doc}
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
              {Object.keys(metadata).map((key) => {
                if (metadata[key].length > 1) {
                  return (
                    <Col key={key} md={4}>
                      <Form.Group controlId={key} className="mb-2">
                        <Form.Label>{key}</Form.Label>
                        <Form.Control
                          as="select"
                          name={key}
                          value={selectedValues[key] || ""}
                          onChange={handleSelectChange}
                        >
                          <option value="">Toutes les valeurs</option>
                          {generateOptions(key)}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  );
                }
                return null;
              })}
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
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
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
                    {columns.map((column) => (
                      <td key={column}>
                        {column === "lastupdate" || column === "lastupload"
                          ? formatDate(entry[column])
                          : entry[column]}
                      </td>
                    ))}
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
      </Container>
    </section>
  );
}

export default DatasetPage;
