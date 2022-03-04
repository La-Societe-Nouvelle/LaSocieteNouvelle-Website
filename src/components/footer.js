var React = require('react');

export default class Footer extends React.Component {
  render() {
    return (

    <div className="Footer">

        <div id="links">
            <a className="link-footer" href="/mentions-legales">Mentions légales</a>
            <a className="link-footer" href="/company-data?siren=889182770">Empreinte Sociétale</a>
            <a className="link-footer" href="https://github.com/La-Societe-Nouvelle/LaSocieteNouvelle-Website" target="_blank">Repertoire GitHub</a>
            <a className="link-footer" href="https://www.linkedin.com/company/la-societe-nouvelle/" target="_blank">LinkedIn</a>
            <a className="link-footer" href="https://twitter.com/SHumiliere" target="_blank">Twitter</a>
            {/*<a className="link-footer" href="/contact">Contact</a>*/}
        </div>

    </div>
      
    );
  }
}