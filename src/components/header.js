var React = require('react');
import {DropDown} from "./dropdown";


export default class Header extends React.Component {

  render() 
  {
    return (

    <div className="Header">

      <div id="header">

        <div id="header-strip">
          <a href="/">
            <img id="logo-header" src="/images/logo-lsn-header.png" alt="logo-lsn-header"/>
          </a>
          <p id="slogan">Mesure, Informer pour une économie durable</p>
          <svg id="slogan-line_container" viewBox="0 0 100 10">
            <line id="slogan-line" x1="0" y1="0" x2="100" y2="0"/>
          </svg>
          <p id="slogan-2">Initiative OpenData - OpenSource</p>
          <hr className="hr-big-size"/>
        </div>

        <div id="menu">
          <DropDown
                title="Menu"
                href="##">
          <ul>
            <li id="home" className="menu-item"><a href="/"><img id="icon-home" src="/images/icon-home.png" alt="icon-home"/></a></li>
            <li className="menu-item">
              <DropDown
                title="Approche"
                href="/approche">
                <div><a href="/approche">Principe / Présentation</a></div>
                <div><a href="/liste-indicateurs">Indicateurs</a></div>
                <div><a href="/approche">Base de données</a></div>
                <div><a href="https://metriz.lasocietenouvelle.org" target="_blank">Application Web</a></div>
                <div><a href="/approche">Accès à la documentation</a></div>
              </DropDown>
            </li>
            <li className={"menu-item"+(this.props.page=="portail" ? " selected" : "")}><a href="/portail">Données</a></li>
            <li className={"menu-item"+(this.props.page=="cabinets-comptables" ? " selected" : "")}><a href="/cabinets-comptables">Cabinets comptables</a></li>
            <li className={"menu-item"+(this.props.page=="entreprises" ? " selected" : "")}><a href="/entreprises">Entreprises</a></li>
            <li className={"menu-item"+(this.props.page=="a-propos" ? " selected" : "")}><a href="/a-propos">La Société Nouvelle</a></li>
          </ul>
          </DropDown>
        </div>

      </div>

    </div>

    );
  }
}
