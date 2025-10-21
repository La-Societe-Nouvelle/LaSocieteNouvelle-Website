const Description = ({ indic }) => 
{
  let description = "";

  switch (indic) {
    case "ART":
      description = (
        <div>
          <p>
            L'indicateur vise à valoriser les savoir-faire artisanaux auprès des
            consommateurs.
          </p>
        </div>
      );
      break;
    case "ECO":
      description = (
        <div>
          <p>
            L'indicateur vise à informer sur la localisation des activités
            (France ou étranger).
          </p>
        </div>
      );
      break;
    case "GEQ":
      description = (
        <div>
          <p>
            L'indicateur vise à réduire l'écart de rémunération entre les hommes et les
            femmes.
          </p>
        </div>
      );
      break;
    case "GHG":
      description = (
        <div>
          <p>
            L'indicateur informe sur les émissions liées à la
            production de l'entreprise et vise à identifier les entreprises les
            plus performantes en matière d'émissions.
          </p>
        </div>
      );
      break;
    case "HAZ":
      description = (
        <div>
          <p>
            L'indicateur vise à réduire l'utilisation de ces
            produits nocifs pour la santé et l'environnement (pesticides, etc.).
          </p>
        </div>
      );
      break;
    case "IDR":
      description = (
        <div>
          <p>
            L'indicateur vise à identifier les
            entreprises qui ont un partage plus équitable de la valeur produite
            et encourager ces pratiques.
          </p>
        </div>
      );
      break;
    case "KNW":
      description = (
        <div>
          <p>
            Indicateur de la part de la valeur produite allouée à la recherche,
            la formation et l'enseignement (en %). Informe sur la part des
            revenus de l'entreprise consacrés à ces activités.
          </p>
        </div>
      );
      break;
    case "MAT":
      description = (
        <div>
          <p>
            L'indicateur informe sur
            le recours à l'extraction de ressources naturelles, la réutilisation
            de matières premières est exclue de la mesure.
          </p>
        </div>
      );
      break;
    case "NRG":
      description = (
        <div>
          <p>
            L'indicateur informe sur la pression exercée sur
            l'environnement.
          </p>
        </div>
      );
      break;
    case "SOC":
      description = (
        <div>
          <p>
            L'indicateur vise à mesurer
            l'engagement de l'entreprise en termes d'enjeux environnementaux et
            sociétaux et donner un sens à ses activités en dehors de la
            recherche de profit.
          </p>
        </div>
      );
      break;
    case "WAS":
      description = (
        <div>
          <p>
            L'indicateur vise à réduire la quantité de déchets générés et
            informe sur les efforts de l'entreprise en termes de gestion des
            déchets.
          </p>
        </div>
      );
      break;
    case "WAT":
      description = (
        <div>
          <p>
            L'indicateur vise à informer sur l'utilisation de la ressource
            eau et s'inscrit dans une volonté de gestion globale des ressources
            naturelles, en particulier dans le contexte de la diminution des
            quantités d'eau disponibles lié au changement climatique.
          </p>
        </div>
      );
      break;
    default:
      break;
  }

  return description;
};

export default Description;