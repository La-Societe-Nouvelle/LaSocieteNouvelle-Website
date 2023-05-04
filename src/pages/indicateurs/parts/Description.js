import React from "react";
import { Image } from "react-bootstrap";

const Description = ({ indic }) => {
  let description = "";

  switch (indic) {
    case "ART":
      description = (
        <div>
          <p>
            Indicateur de la part de la valeur produite par des entreprises
            artisanales, créatives ou reconnues pour leur savoir-faire (en %).
            Vise à valoriser les savoir-faire artisanaux auprès des
            consommateurs. ({" "}
            <a
              href={"/indicateurs/art"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
            height={60}
          />
          <Image
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-09.png"
            alt="logo odd"
            className="mb-3"
            height={60}
          />
        </div>
      );
      break;
    case "ECO":
      description = (
        <div>
          <p>
            Indicateur de la part de la valeur produite sur le territoire
            français (en %). Vise à informer sur la localisation des activités
            (France ou étranger). ({" "}
            <a
              href={"/indicateurs/eco"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <p></p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
            height={60}
          />
          <Image
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-09.png"
            alt="logo odd"
            className="mb-3"
            height={60}
          />
          <Image
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-12.png"
            alt="logo odd"
            className="mb-3"
            height={60}
          />
        </div>
      );
      break;
    case "GEQ":
      description = (
        <div>
          <p>
            Indicateur de l'écart de salaires entre les femmes et les hommes
            dans les entreprises ayant contribué à la production de la valeur.
            Vise à réduire l'écart de rémunération entre les hommes et les
            femmes. ({" "}
            <a
              href={"/indicateurs/geq"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-05.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-10.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    case "GHG":
      description = (
        <div>
          <p>
            Indicateur de la quantité de gaz à effet de serre émise par unité de
            valeur produite (gCO2e/€). Informe sur les émissions liées à la
            production de l'entreprise et vise à identifier les entreprises les
            plus performantes en matière d'émissions. ({" "}
            <a
              href={"/indicateurs/ghg"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-07.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-12.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-13.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-14.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-15.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    case "HAZ":
      description = (
        <div>
          <p>
            Indicateur de la quantité de produits dangereux pour la santé et
            l'environnement utilisée par unité de valeur produite (g/€). Ne
            prend pas en compte les dangers physiques. Basé sur les pictogrammes
            de danger sur les produits. Vise à réduire l'utilisation de ces
            produits nocifs pour la santé et l'environnement (pesticides, etc.).
            ({" "}
            <a
              href={"/indicateurs/haz"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-03.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-12.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-14.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-15.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    case "IDR":
      description = (
        <div>
          <p>
            Indicateur de l'écart des rémunérations au sein des entreprises
            ayant contribué à la production de la valeur. Vise à identifier les
            entreprises qui ont un partage plus équitable de la valeur produite
            et encourager ces pratiques. ({" "}
            <a
              href={"/indicateurs/idr"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-10.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    case "KNW":
      description = (
        <div>
          <p>
            Indicateur de la part de la valeur produite allouée à la recherche,
            la formation et l'enseignement (en %). Informe sur la part des
            revenus de l'entreprise consacrés à ces activités. ({" "}
            <a
              href={"/indicateurs/knw"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-04.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-09.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    case "MAT":
      description = (
        <div>
          <p>
            Indicateur de la quantité de matières premières extraites (minerais,
            fossiles, biomasse) par unité de valeur produite (g/€). Informe sur
            le recours à l'extraction de ressources naturelles, la réutilisation
            de matières premières est exclue de la mesure. ({" "}
            <a
              href={"/indicateurs/mat"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-12.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-14.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-15.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    case "NRG":
      description = (
        <div>
          <p>
            Indicateur de la consommation d'énergie primaire par unité de valeur
            produite (kJ/€). De nombreux enjeux sont liés à l'énergie tels que
            la consommation de ressources naturelles ou les émissions de gaz à
            effet de serre. L'indicateur informe sur la pression exercée sur
            l'environnement. ({" "}
            <a
              href={"/indicateurs/nrg"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-07.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-12.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-13.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    case "SOC":
      description = (
        <div>
          <p>
            Indicateur de la part de la valeur produite en lien avec une mission
            ou une raison d'être socialement responsable (en %). Vise à mesurer
            l'engagement de l'entreprise en termes d'enjeux environnementaux et
            sociétaux et donner un sens à ses activités en dehors de la
            recherche de profit. ({" "}
            <a
              href={"/indicateurs/soc"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-12.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    case "WAS":
      description = (
        <div>
          <p>
            Indicateur de la quantité de déchets produite par unité de valeur
            produite (g/€). Vise à réduire la quantité de déchets générés et
            informe sur les efforts de l'entreprise en termes de gestion des
            déchets. ({" "}
            <a
              href={"/indicateurs/was"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>{" "}
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-03.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-06.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-11.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-12.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-14.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-15.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    case "WAT":
      description = (
        <div>
          <p>
            Indicateur de la quantité d'eau consommée par unité de valeur
            produite (L/€). Vise à informer sur l'utilisation de la ressource
            eau et s'inscrit dans une volonté de gestion globale des ressources
            naturelles, en particulier dans le contexte de la diminution des
            quantités d'eau disponibles lié au changement climatique. ({" "}
            <a
              href={"/indicateurs/wat"}
              target="_blank"
              className="text-decoration-underline"
              title="En savoir plus sur l'indicateur"
            >
              En savoir plus &raquo;
            </a>
            )
          </p>
          <h6>Objectifs de développement durable associés</h6>
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-03.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-06.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-08.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-12.png"
            alt="logo odd"
            className="mb-3"
          />
          <Image
            height={60}
            id="logo-odd"
            src="/images/odd/F-WEB-Goal-15.png"
            alt="logo odd"
            className="mb-3"
          />
        </div>
      );
      break;
    default:
      break;
  }

  return description;
};

export default Description;
