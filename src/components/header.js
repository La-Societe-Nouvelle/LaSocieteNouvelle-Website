var React = require('react');
import { Container, Row, Col} from "react-bootstrap";
import CustomDropdown from "./customDropdown";


export default class Header extends React.Component {

  render() 
  {
    return (

    <header>
      <Container>
        <Row className="align-items-center">
         <Col>
         <div className="banner">
         <img id="logo-header" className="fluid float-start" src="/images/logo-lsn-header.png" alt="logo-lsn-header"/>

          <h1 className="slogan">
              Mesurer, Informer pour une économie durable
          </h1>
           </div>
         </Col> 
         <Col>
           <h2>
              Initiative OpenData - OpenSource
             </h2> 
         </Col>
        </Row>

        <CustomDropdown />

      </Container>

    </header>

    );
  }
}
