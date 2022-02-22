var React = require('react');
import {DropDown} from "./dropdown";


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
            <span id="text-header">Mesure, Informer pour une économie durable</span>
          </div>
          <hr className="hr-big-size"/>
          <div className="header-strip-item" id="header-text2">
            <p>Système d'Information&nbsp;</p><p>et de Comptabilité extra-financière</p>
          </div>
          <div className="header-actions">
            <button id="header-action-declaration" onClick={() => window.location="/publication"}>Publiez vos impacts</button>
            <button onClick={() => window.open("https://metriz.lasocietenouvelle.org/")}>Mesurez vos Impacts</button>
          </div>
        </div>

        <div id="menu">
          <DropDown
                title="Menu"
                href="##">
          <ul>
            <li className="menu-item"><a href="/">Accueil</a></li>
            <li className="menu-item"><a href="/portail">Données</a></li>
            <li className="menu-item">
              <DropDown
                title="Méthodologie et Indicateurs"
                href="/empreinte-societale">
                <div><a href="/empreinte-societale">Présentation générale</a></div>
                <div><a href="/indicateur/ghg">Emissions de gaz à effet de serre</a></div>
                <div><a href="/indicateur/eco">Production française</a></div>
                <div><a href="/indicateur/was">Déchets</a></div>
                <div><a href="/indicateur/geq">Inégalités Femmes/Hommes</a></div>
                <div><a href="/indicateur/nrg">Consommation d'énergie</a></div>
                <div><a href="/indicateur/wat">Consommation d'eau</a></div>
                <div><a href="/indicateur/dis">Répartition des rémunérations</a></div>
                <div><a href="/indicateur/soc">Acteurs d'intérêt social</a></div>
                <div><a href="/indicateur/mat">Ressources naturelles</a></div>
                <div><a href="/indicateur/knw">Compétences et Connaissances</a></div>
                <div><a href="/indicateur/art">Métiers d'Art et Savoir-Faire</a></div>
                <div><a href="/indicateur/haz">Produits dangereux</a></div>
              </DropDown>
            </li>
            <li className="menu-item"><a href="/a-propos">Services</a></li>
            <li className="menu-item"><a href="/a-propos">A Propos</a></li>
            <li className="menu-item"><a href="/a-propos">Professionnel</a></li>
            <li className="menu-item"><a href="/a-propos">Acteurs de la comptabilité</a></li>
          </ul>
          </DropDown>
        </div>

      </div>

    </div>

    );
  }
}
