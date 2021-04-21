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
            <span id="text-header">L'OpenData au service de l'économie</span>
          </div>
          <hr/>
          <div className="header-strip-item" id="header-text2">
            Système d'Information extra-financière
          </div>
        </div>

        <div id="menu">
          <ul>
            <li className="menu-item first"><a href="/a-propos">A Propos</a></li>
            <li className="menu-item">
              <DropDown
                title="Empreinte Societale"
                href="/empreinte-societale">
                <div><a href="/empreinte-societale">Général</a></div>
                <div><a href="/">ECO</a></div>
                <div><a href="/">MAT</a></div>
                <div><a href="/">WAS</a></div>
                <div><a href="/">Empreinte Sociale avec plusieurs mots toujours plus de mots</a></div>
              </DropDown>
            </li>
            <li className="menu-item"><a href="/portail">Portail</a></li>
            <li className="menu-item"><a href="/services">Services</a></li>
            <li className="menu-item"><a href="/ressources">Ressources</a></li>
            <li className="menu-item last"><a href="/contact">Contact</a></li>
          </ul>
        </div>

      </div>

    </div>

    );
  }
}
