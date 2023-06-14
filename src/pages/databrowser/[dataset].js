import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Table, Pagination, Row, Col } from "react-bootstrap";

function DatasetPage() {
  const router = useRouter();
  const { dataset } = router.query;
  const [data, setData] = useState(null);
  const [meta, setMeta] = useState();
  const [columns, setColumns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
        setMeta(results.meta);
        setColumns(Object.keys(results.data[0]));
      }
    };

    fetchData();
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

  return (
    <section className="open-data-brower">
      <Container>
        <h2>Données {console.log(meta)}</h2>
        <Row>
          <Col lg={3}>
            <ul className="list-type-none">
              <li>Données macroéconomiques des branches</li>
              <li>
                Données macroéconomiques des branches pour les objectifs 2030
              </li>
            </ul>
          </Col>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DatasetPage;
