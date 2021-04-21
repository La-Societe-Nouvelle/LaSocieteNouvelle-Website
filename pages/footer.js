var React = require('react');

export default class Footer extends React.Component {
  render() {
    return (

    <div className="Footer">

        <div id="links">
            <a className="link-footer first" href="https://www.linkedin.com/company/la-societe-nouvelle/" target="_blanck">Page LinkedIn</a>
            <a className="link-footer" href="https://github.com/SylvainH-LSN/LaSocieteNouvelle-Website" target="_blanck">Repertoire GitHub</a>
            <a className="link-footer" href="https://github.com/SylvainH-LSN/LaSocieteNouvelle-Website/issues" target="_blanck">Signaler un problème</a>
            <a className="link-footer" href="/company-data?siren=889182770">Empreinte Sociétale</a>
            <a className="link-footer" href="/mentions-legales">Mentions légales</a>
            <a className="link-footer last" href="/contact">Contact</a>
        </div>

    </div>
      
    );
  }
}