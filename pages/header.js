var React = require('react');
import {DropDown} from "../src/lasocietenouvelle/component/dropdown.js";


export default class Header extends React.Component {
  render() {
    return (

    <div className="Header">

      <div id="header">

        <div id="header-strip">
          <a href="/">
          <img id="logo-header" src="/resources/logo_miniature.jpg" alt="logo"/>
          </a>
          <div id="header-name-company">
            <h1 id="company-name-header">La Société Nouvelle</h1>
            <p id="text-header">L'OpenData au service de l'économie</p>
          </div>
          <p className="header-strip-item" id="header-text2">
            Système d'Information extra-financière
          </p>
        </div>

        <div id="menu">
          <ul>
            <li className="menu-item"><a href="/a-propos">A Propos</a></li>
            <li className="menu-item">
              <DropDown
                title="Empreinte Societale"
                href="/empreinte-societale">
                <div><a href="/">ECO</a></div>
                <div><a href="/">MAT</a></div>
                <div><a href="/">WAS</a></div>
              </DropDown>
            </li>
            <li className="menu-item"><a href="/portail">Portail</a></li>
            <li className="menu-item"><a href="/services">Services</a></li>
            <li className="menu-item"><a href="/ressources">Ressources</a></li>
            <li className="menu-item"><a href="/contact">Contact</a></li>
          </ul>
        </div>

      </div>

    </div>

    );
  }
}
