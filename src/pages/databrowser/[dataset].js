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

function DatasetPage() {
  const router = useRouter();
  const { dataset } = router.query;
  const [data, setData] = useState(null);
  const [metadata, setMetadata] = useState();
  const [columns, setColumns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedValues, setSelectedValues] = useState({});

  const itemsPerPage = 100;
  const maxPaginationLinks = 20; // Maximum number of pagination links to display

  useEffect(() => {
    const fetchData = async () => {
      if (dataset) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/macrodata/${dataset}`
        );
        const results = await response.json();

        setData(results.data);
        setColumns(Object.keys(results.data[0]));
      }
    };
    const fetchDataMeta = async () => {
      if (dataset) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/macrodata/metadata/${dataset}`
        );
        const results = await response.json();
        console.log(results);
        setMetadata(results.metadata);
      }
    };

    fetchData();
    fetchDataMeta();
  }, [dataset]);

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
  const currentData = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    const fileName = dataset + ".xlsx";

    XLSX.writeFile(workbook, fileName);
  };

  const generateOptions = (key) => {
    const values = metadata[key];
    return values.map((value) => (
      <option key={value.code} value={value.code}>
        {value.label}
      </option>
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Apply filtering based on selected values
    const selectedFilters = getFilters(selectedValues);
    console.log(selectedFilters);
    console.log(selectedValues)
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [name]: value,
    }));
  };

  const getFilters = (filters) => {

    const selectedFilters = {}; 
    Object.keys(filters).forEach((key) => {
      selectedFilters[key] = metadata[key].find(
        (item) => item.code === filters[key]
      );
    });
    return selectedFilters;
  };


  return (
    <section className="open-data-brower">
      <Container>
        <Row>
          <Col lg={3} className="bg-light rounded">
            <div className="px-1 py-4">
              <h2>Jeux de données</h2>
              <h3 className="h5">Empreintes des activités économiques</h3>
              <ul className="list-unstyled datasets-list">
                <li>
                  <a href="/databrowser/macro_fpt_a38">
                    <i className="bi bi-chevron-right"></i> Empreintes des
                    branches d'activité - données historiques
                  </a>
                </li>
                <li>
                  <a href="/databrowser/macro_fpt_a88">
                    <i className="bi bi-chevron-right"></i> Empreintes des
                    divisions économiques - données historiques
                  </a>
                </li>
                <li>
                  <a href="/databrowser/macro_fpt_trd_a38">
                    <i className="bi bi-chevron-right"></i> Empreintes des
                    branches d'activité - tendances
                  </a>
                </li>
                <li>
                  <a href="/databrowser/macro_fpt_trd_a88">
                    <i className="bi bi-chevron-right"></i> Empreintes des
                    divisions économiques - tendances
                  </a>
                </li>
                <li>
                  <a href="/databrowser/macro_fpt_tgt_a38">
                    <i className="bi bi-chevron-right"></i> Objectifs annuels
                    par branches d'activité
                  </a>
                </li>
                <li>
                  <a href="/databrowser/macro_fpt_tgt_a88">
                    <i className="bi bi-chevron-right"></i> Objectifs annuels
                    des divisions économiques
                  </a>
                </li>
              </ul>
              <hr></hr>
              <h4>Données des comptes nationaux</h4>
              <ul className="list-unstyled datasets-list">
                <li>
                  <a href="/databrowser/na_cpeb">
                    <i className="bi bi-chevron-right"></i> Comptes de
                    production et d'exploitation par branche
                  </a>
                </li>
                <li>
                  <a href="/databrowser/na_ere">
                    <i className="bi bi-chevron-right"></i> Tableau des entrées
                    ressources emplois
                  </a>
                </li>
                <li>
                  <a href="/databrowser/na_pat_nf">
                    <i className="bi bi-chevron-right"></i> Comptes de
                    patrimoine non-financier
                  </a>
                </li>
                <li>
                  <a href="/databrowser/na_tei">
                    <i className="bi bi-chevron-right"></i> Tableau des entrées
                    intermédiaires
                  </a>
                </li>
                <li>
                  <a href="/databrowser/na_tess">
                    <i className="bi bi-chevron-right"></i> Tableau des
                    entrées-sorties symétrique
                  </a>
                </li>
              </ul>
              <hr></hr>

              <h4>Données sociales</h4>
              <ul className="list-unstyled datasets-list">
                <li>
                  <a href="/databrowser/bts_data">
                    <i className="bi bi-chevron-right"></i> Indicateurs issus de
                    la base tous salariés
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="ps-4 py-4">
              <h2>Données</h2>
       

              <Form className={"filter-form"} onSubmit={handleSubmit}>
                <Row>
                  {Object.keys(metadata).map((key) => (
                    <Col key={key} md={4}>
                      <Form.Group controlId={key} className="mb-2">
                        <Form.Label>{key}</Form.Label>
                     <Form.Control
                  as="select"
                  name={key}
                  value={selectedValues[key] || ''}
                  onChange={handleSelectChange}
                >
                  <option value="">Sélectionnez une valeur</option>
                  {generateOptions(key)}
                </Form.Control>
                      </Form.Group>
                    </Col>
                  ))}
                </Row>
                <div className="text-end">
                  <Button type="submit" size="sm">
                    Filtrer les données
                  </Button>
                </div>
              </Form>
              <div className="my-3">
                <Button variant="secondary" size="sm" onClick={exportToExcel}>
                  <i className="bi bi-download"></i> Télécharger
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
                  {currentData.map((entry, index) => (
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DatasetPage;
