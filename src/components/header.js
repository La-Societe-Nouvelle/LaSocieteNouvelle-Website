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
         <div className="text-end pt-2">
           <h2>
              Initiative OpenData - OpenSource
             </h2> 
            <a className="btn btn-cta ms-2" href="http://metriz.lasocietenouvelle.org" target="_blank">
               Mesurer mes impacts  
            </a> 
            <a className="btn btn-publish" href="/publication">
              Publier mes données  
            </a> 
         </div>
         </Col>
        </Row>
        </Container>

        <CustomDropdown />


    </header>

    );
  }
}
