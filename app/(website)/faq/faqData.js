/**
 * Données de la FAQ - La Société Nouvelle
 *
 * Pour ajouter une nouvelle question :
 * 1. Trouvez la catégorie appropriée
 * 2. Ajoutez un objet { question: "...", answer: (...) } dans le tableau questions
 *
 * Pour ajouter une nouvelle catégorie :
 * 1. Ajoutez un objet avec { id, title, questions: [] } dans faqCategories
 * 2. L'id doit être unique et en minuscules sans espaces (utilisé pour le scroll)
 */

export const faqCategories = [
  {
    id: "indicateurs",
    title: "L'Empreinte Sociétale",
    questions: [
      {
        question: "Qu'est-ce que l'empreinte sociétale ?",
        answer: (
          <p>
            L'empreinte sociétale est un panel d'indicateurs exprimant
            les impacts sociaux et environnementaux de la production
            vendue d'une entreprise sur 12 dimensions sociales et
            environnementales.
          </p>
        )
      },
      {
        question: "Quels sont les indicateurs utilisés au sein de l'empreinte sociétale ?",
        answer: (
          <>
            <p>
              L'empreinte sociétale se compose de 12 indicateurs, dont 6
              socio-économiques et 6 environnementaux. (Accessibles ici)
              Ils ont été choisis au regard de leur importance pour une
              société soutenable, de leur pertinence pour l'entreprise
              et de leur utilité pour le consommateur final. Chaque
              indicateur est mis en lien avec les Objectifs de
              Développement Durable (ODD) de l'ONU.
            </p>
            <p>
              Le panel d'indicateurs actuel a été constitué par nos
              soins. La création d'un comité de gouvernance est
              souhaitée pour 2024 avec différents acteurs de l'économie
              et du développement durable. Il sera en charge du choix
              des indicateurs et de la méthodologie associée pour la
              mesure des impacts directs.
            </p>
          </>
        )
      },
      {
        question: "Quelle est la méthodologie de mesure des indicateurs ?",
        answer: (
          <>
            <p>
              La méthodologie vise à rendre compte des impacts d'un
              euro de production vendue en s'appuyant sur une
              traçabilité des flux financiers. La production est
              décomposée en valeur ajoutée nette, consommations
              intermédiaires et consommations de capital fixe
              (dotations aux amortissements sur immobilisations).
            </p>
            <p>
              Les impacts des consommations sont obtenus à partir des
              empreintes de la production des fournisseurs et les
              impacts de la valeur ajoutée nette correspondent aux
              impacts directs de l'entreprise sur son périmètre
              opérationnel.
            </p>
            <p>
              Pour son application, l'outil reprend donc les écritures
              comptables pour récupérer les mouvements financiers
              nécessaires (production, consommations, etc.), récupère
              les empreintes de la production des fournisseurs
              (disponibles au sein de notre base de données ouverte)
              via leur numéro siren et permet l'évaluation et la
              déclaration des impacts directs, pour in fine produire
              les indicateurs de l'Empreinte Sociétale.
            </p>
          </>
        )
      },
      {
        question: "À quoi correspond l'incertitude ?",
        answer: (
          <p>
            Un taux d'incertitude apparaît lorsque certaines données
            ne proviennent pas d'une valeur publiée. Pour en savoir
            plus, au sujet des incertitudes{" "}
            <a
              href="https://docs.lasocietenouvelle.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              consultez la documentation
            </a>
          </p>
        )
      }
    ]
  },
  {
    id: "mesure",
    title: "Mesure de l'Empreinte Sociétale",
    questions: [
      {
        question: "Pourquoi mesurer l'empreinte sociétale de ses activités ?",
        answer: (
          <p>
            L'Empreinte Sociétale traduit la capacité de l'entreprise
            à produire de la valeur, des biens/services, en limitant
            ses impacts négatifs ou en maximisant ses impacts
            positifs. Sur chacune des dimensions mesurées, elle permet
            de comprendre l'origine de ses impacts, de se situer par
            rapport à sa branche et d'aligner sa trajectoire avec les
            objectifs nationaux à atteindre. Elle constitue ainsi un
            outil de suivi, de pilotage et de valorisation de sa
            performance extra-financière.
          </p>
        )
      },
      {
        question: "La mesure de l'empreinte sociétale est-elle payante ?",
        answer: (
          <>
            <p>
              La mesure de l'empreinte de votre production est
              gratuite. Seule la publication (volontaire) de votre
              empreinte au sein de la base de données ouverte sera
              sousmise à un coût de formalité administrative.
            </p>
            <p>
              Des frais peuvent s'appliquer si vous faites appel à un tiers
              (cabinet d'expertise comptables, etc.) pour effectuer la mesure.
            </p>
            <p>
              Si vous faites directement appel à nous, nous appliquons un forfait
              de 500 € pour la production des indicateurs et une présentation des
              résultats obtenus.
            </p>
          </>
        )
      },
      {
        question: "Quand mesurer mon empreinte et à quelle fréquence ?",
        answer: (
          <p>
            Il convient de mesurer votre Empreinte Sociétale
            annuellement, en fin d'exercice fiscal dès la
            finalisation de votre Fichier d'Ecritures Comptables
            (FEC). Chaque année, vous pourrez ainsi observer
            l'évolution de votre performance dans le temps et vous
            comparer aux trajectoires cibles définies par les
            objectifs nationaux.
          </p>
        )
      },
      {
        question: "J'ai réalisé un bilan carbone, puis-je utiliser les résultats ?",
        answer: (
          <>
            <p>
              Bien entendu, il est tout à fait possible d'exploiter
              ces éléments. Si votre bilan couvre les postes 1 à 13
              (postes liés au périmètre de la production) vous pouvez
              directement publier l'intensité de votre production en
              divisant le volume des émissions par celui de votre
              chiffre d'affaires, et avec l'incertitude associée à la
              mesure des émissions.
            </p>
            <p>
              Si votre bilan ne porte que sur les scopes 1 et 2, vous
              pouvez reprendre le volume des émissions directes (scope
              1) pour la déclaration des impacts directs (Etape 4 du
              processus de mesure de l'empreinte sociétale via Metriz)
            </p>
          </>
        )
      }
    ]
  },
  {
    id: "publication",
    title: "Publication de l'Empreinte Sociétale",
    questions: [
      {
        question: "Pourquoi publier votre empreinte sociale ?",
        answer: (
          <p>
            La publication de votre empreinte sociale vous permet de
            faire preuve de transparence sur l'empreinte de vos
            activités. Elle confirme votre engagement pour la
            construction d'une économie durable, justifie que vous
            agissez à la hauteur des objectifs et permet aux acteurs
            de votre marché de vous identifier parmi les entreprises
            porteuses de la transition. Auprès de vos clients, elle
            leur permet d'estimer leurs impacts amont en travaillant
            avec vous ; et renforce ainsi vos relations commerciales
            avec eux.
          </p>
        )
      },
      {
        question: "Quels sont les tarifs lorsque l'on publie notre empreinte sociétale ?",
        answer: (
          <>
            <p>
              La publication correspond à la mise à jour des valeurs
              concernant votre unité légale au sein de la base de
              données ouverte. La tarification vise à s'appliquer à
              partir du 1er janvier 2024. Les tarifs actuellement
              envisagés sont :
            </p>
            <ul>
              <li>50 € pour les sociétés</li>
              <li>25 € pour les sociétés unipersonnelles (EURL, etc.)</li>
              <li>10 € pour les autres structures (associations, etc.)</li>
            </ul>
          </>
        )
      },
      {
        question: "Pourquoi appliquons-nous des frais de publication ?",
        answer: (
          <>
            <p>
              Les frais de publication permettent d'assurer la maintenance et
              l'administration de la base de données ouverte et de
              l'API et les travaux statistiques nécessaires à
              l'amélioration des données.
            </p>
            <p>
              Ce mode de financement nous permet de garantir un accès
              libre aux données et à l'outil de mesure de
              l'application Metriz.
            </p>
          </>
        )
      },
      {
        question: "Puis-je modifier les informations une fois publiées ?",
        answer: (
          <p>
            Une fois publiées, vos données sont modifiables sans frais.
            Il vous suffit de prendre contact avec nous, via{" "}
            <a href="/contact" title="Formulaire de contact">
              le formulaire de contact
            </a>{" "}
            ou par mail à l'adresse{" "}
            <a href="mailto:admin@lasocietenouvelle.org">
              admin@lasocietenouvelle.org
            </a>
          </p>
        )
      }
    ]
  },
  {
    id: "licences",
    title: "Licences et propriétés intellectuelles",
    questions: [
      {
        question: "Qu'est-ce que l'Open Source ?",
        answer: (
          <p>
            Le terme "Open Source" désigne un logiciel ou programme
            informatique où le code source est ouvert au public,
            peut-être modifié et redistribué par n'importe qui. C'est
            le cas de notre application web METRIZ distribué sous
            licence CeCILL.
          </p>
        )
      },
      {
        question: "Qu'est-ce que l'Open Data ?",
        answer: (
          <>
            <p>
              L' "Open Data" défini des données publiquement
              accessibles, qui peuvent être librement exploitées et
              réutilisées ; par exemple pour la création
              d'applications, l'amélioration des produits et services.
            </p>
            <p>
              C'est le cas des données publiées au sein de notre base
              de données ouverte et des données statistiques que nous
              produisons.
            </p>
          </>
        )
      }
    ]
  },
  {
    id: "repertoire",
    title: "Répertoire SINESE",
    questions: [
      {
        question: "Qu'est-ce que les valeurs par défaut ?",
        answer: (
          <>
            <p>
              Les données par défaut correspondent aux données
              proposées lorsque l'empreinte sociétale d'une entreprise
              n'est pas publiée. Elles permettent d'estimer les
              impacts indirects associés à une dépense en s'appuyant
              sur les caractéristiques connues du fournisseur tel que
              sa division économique ou sa localisation.
            </p>
            <p>
              Les valeurs par défaut sont produites à partir des
              empreintes macroéconomiques des divisions économiques
              françaises et des retours statistiques microéconomiques
              obtenus.
            </p>
            <p>
              Pour en savoir plus, au sujet des méthodes de calcul{" "}
              <a
                href="https://docs.lasocietenouvelle.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                consultez la documentation
              </a>
            </p>
          </>
        )
      }
    ]
  }
];
