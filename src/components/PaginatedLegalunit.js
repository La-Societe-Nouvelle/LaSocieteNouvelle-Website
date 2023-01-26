import { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

const PaginatedLegalunit = (props) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [items, setItems] = useState(props.data);
  const [itemsPerPage, setItemsPerPage] = useState(props.itemsPerPage);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, props]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems && <Items currentItems={currentItems} />}
      <ReactPaginate
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextLabel="❯"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="❮"
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </>
  );
};

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((legalUnit, index) => (
          <Card className="legalUnitCard" key={index}>
            <Card.Header as="h3" className="h5">
              {legalUnit.denomination}
            </Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col lg={9}>
                  <Row className="align-content-center">
                    <Col>
                      <h4 className="h6">Siren</h4>
                      <p>{legalUnit.siren}</p>
                    </Col>
                    <Col>
                      <h3 className="h6">Activité</h3>
                      <p>
                        {legalUnit.activitePrincipaleLibelle}
                      </p>
                    </Col>
                    <Col>
                      <h3 className="h6">Domiciliation</h3>
                      <p>
                        {legalUnit.codePostalSiege}{" "}
                        {legalUnit.communeSiege}
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <div className="text-end">
                    <a
                      className="btn btn-primary btn-sm"
                      href={"portail/company/" + legalUnit.siren}
                    > Voir l'empreinte  
                    </a>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default PaginatedLegalunit;
