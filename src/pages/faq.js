import React, { useEffect, useState } from "react";
import {
  Accordion,
  Container,
  Tab,
  Tabs,
} from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../components/PageHeader";
import { useRouter } from "next/router";

const Faq = () => {
  const router = useRouter();
  const [activeKey, setActiveKey] = useState("qg");
  const [eventKey, setEventKey] = useState("qg-0");

  useEffect(() => {
    const key = router.asPath.split("#")[1];
    if (key) {
      setActiveKey(key.split("-")[0]);
      setEventKey(key);
    } else {
      setActiveKey("qg");
      setEventKey("qg-0");
    }
  }, [router.asPath]);
  

  const handleTabSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Helmet>
        <title>La Société Nouvelle | Foire aux questions </title>
      </Helmet>
      <PageHeader
        title={"Foire Aux Questions"}
        path={"faq"}
        hasBreadcrumbs={false}
      />
      <section>
        <Container>
          <p>
            Si vous avez des questions sur nos missions ou nos services, notre
            FAQ peut vous aider. Nous avons recensé les questions les plus
            fréquentes et leurs réponses pour vous offrir une assistance rapide.
            Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à
            nous contacter en utilisant{" "}
            <a href="/contact" title="Contact" className="text-secondary">
              le formulaire de contact
            </a>
            .
          </p>
          <Tabs
            activeKey={activeKey || "qg"}
            className="mt-5 panel-indicateurs"
            fill
            onSelect={handleTabSelect}
          >
            <Tab eventKey="qg" title="Questions générales"   >
              <div className="m-4">
                <Accordion activeKey={eventKey}>
                  <Accordion.Item eventKey="qg-0">
                    <Accordion.Header as="h4"  onClick={() => setEventKey("qg-0")}>
                      <span className="fw-bold">
                        Qu'est-ce que l'empreinte sociétale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      L'empreinte sociétale est un panel d'indicateurs exprimant
                      les impacts sociaux et environnementaux de la production
                      vendue d'une entreprise sur 12 dimensions sociales et
                      environnementales.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="qg-1"  onClick={() => setEventKey("qg-1")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Pourquoi mesurer l'empreinte sociétale de ses activités
                        ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      L'Empreinte Sociétale traduit la capacité de l'entreprise
                      à produire de la valeur, des biens/services, en limitant
                      ses impacts négatifs ou en maximisant ses impacts
                      positifs. Sur chacune des dimensions mesurées, elle permet
                      de comprendre l'origine de ses impacts, de se situer par
                      rapport à sa branche et d'aligner sa trajectoire avec les
                      objectifs nationaux à atteindre. Elle constitue ainsi un
                      outil de suivi, de pilotage et de valorisation de sa
                      performance extra-financière.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qg-2"  onClick={() => setEventKey("qg-2")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Pourquoi publier votre empreinte sociale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qg-3">
                    <Accordion.Header as="h4"  onClick={() => setEventKey("qg-3")}>
                      <span className="fw-bold">
                        Quels sont les indicateurs utilisés au sein de
                        l'empreinte sociétale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      L'empreinte sociétale se compose de 12 indicateurs, dont 6
                      socio-économiques et 6 environnementaux. (Accessibles ici)
                      Ils ont été choisis au regard de leur importance pour une
                      société soutenable, de leur pertinence pour l'entreprise
                      et de leur utilité pour le consommateur final. Chaque
                      indicateur est mis en lien avec les Objectifs de
                      Développement Durable (ODD) de l'ONU.
                      <br></br>
                      Le panel d'indicateurs actuel a été constitué par nos
                      soins. La création d'un comité de gouvernance est
                      souhaitée pour 2024 avec différents acteurs de l'économie
                      et du développement durable. Il sera en charge du choix
                      des indicateurs et de la méthodologie associée pour la
                      mesure des impacts directs.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qg-4">
                    <Accordion.Header as="h4"  onClick={() => setEventKey("qg-4")}>
                      <span className="fw-bold">
                        Quelle est la particularité de la méthodologie de mesure
                        des indicateurs ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="qg-5"  onClick={() => setEventKey("qg-5")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quels sont les tarifs lorsque l'on mesure notre
                        empreinte sociétale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        La mesure de l'empreinte de votre production est 100%
                        gratuite. Seule la publication (volontaire) de votre
                        empreinte au sein de la base de données ouverte sera
                        sousmise à un coût de formalité administrative à partir
                        du 1er janvier 2024.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qg-6"  onClick={() => setEventKey("qg-6")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quels sont les tarifs lorsque l'on publie notre
                        empreinte sociétale ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        La publication correspond à la mise à jour des valeurs
                        concernant votre unité légale au sein de la base de
                        données ouverte. La tarification vise à s'appliquer à
                        partir du 1er janvier 2024. Les tarifs actuellement
                        envisagés sont :
                      </p>
                      <ul>
                        <li> 50 € pour les sociétés</li>
                        <li>
                          25 € pour les sociétés unipersonnelles (EURL, etc.)
                        </li>
                        <li>
                          10 € pour les autres structures (associations, etc.)
                        </li>
                      </ul>
                      <p>
                        Ces coûts permettront d'assurer la maintenance et
                        l'administration de la base de données ouverte et de
                        l'API et les travaux statistiques nécessaires à
                        l'amélioration des données.
                      </p>
                      <p>
                        Ce mode de financement nous permet de garantir un accès
                        libre aux données et à l'outil de mesure de
                        l'application Metriz.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qg-7" id="qg-7"  onClick={() => setEventKey("qg-7")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quel est notre business model ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Le projet n'a pas été initié dans un but lucratif. Notre
                        première volonté est de déployer au maximum
                        l'information au sujet des impacts socioenvironnementaux
                        des entreprises, et de céder ce rôle aux pouvoirs
                        publics.
                      </p>
                      <p>
                        L'accès libre à nos outils et à nos travaux est un
                        engagement inflexible : la base de données est et
                        restera ouverte, l'outil est et restera libre et open
                        source. La pérennité de la structure vise à être assurer
                        par la mise en place des frais de publication. La
                        Société Nouvelle bénéficie actuellement de revenus issus
                        via des contrats de partenariats avec des cabinets
                        comptables, pour la mise en place du service pour leurs
                        clients.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qg-8"  onClick={() => setEventKey("qg-8")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Puis-je modifier les informations une fois publiées ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Une fois publiées, vos données sont parfaitement
                        modifiables. Il vous suffit de prendre contact avec
                        nous, via le formulaire de contact{" "}
                        <a
                          href="/contact"
                          title="Formulaire de contact"
                          className="text-secondary fw-bold"
                        >
                          ici{" "}
                        </a>{" "}
                        ou par mail via l'adresse :{" "}
                        <a
                          href="mailto:admin@lasocietenouvelle.org"
                          className="text-secondary fw-bold"
                        >
                          admin@lasocietenouvelle.org
                        </a>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="qg-9"  onClick={() => setEventKey("qg-9")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quand mesurer mon empreinte et à quelle fréquence ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Il convient de mesurer votre Empreinte Sociétale
                        annuellement, en fin d'exercice fiscal dès la
                        finalisation de votre Fichier d'Ecritures Comptables
                        (FEC). Chaque année, vous pourrez ainsi observer
                        l'évolution de votre performance dans le temps et vous
                        comparer aux trajectoires cibles définies par les
                        objectifs nationaux.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qg-10"  onClick={() => setEventKey("qg-10")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Me situer par rapport à ma branche est-il suffisant ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Les valeurs comparatives à l'échelle des divisions
                        économiques fournissent un bon élément de contexte mais
                        des écarts peuvent subsister en raison de la diversité
                        des activités au sein des branches. Il est convient donc
                        d'apprécier les résultats en prenant en compte la
                        réalité de l'entreprise et de ses activités.
                      </p>
                      <p>
                        Une entreprise peut être performante vis-à-vis de ses
                        activités et se situer au-dessus de la moyenne de sa
                        brance. La pertinence et la granularité des valeurs
                        comparatives s'améliorera au fur et à mesure des retours
                        statistiques obtenus.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="qg-11"  onClick={() => setEventKey("qg-11")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        J'ai réalisé un bilan carbone, puis-je utiliser les
                        résultats ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Tab>
            <Tab eventKey="qt" title="Questions techniques" >
              <div className="m-4">
                <Accordion activeKey={eventKey}>
                  <Accordion.Item eventKey="qt-0" id="open-source">
                    <Accordion.Header as="h4"  onClick={() => setEventKey("qt-0")}>
                      <span className="fw-bold">
                        Qu'est-ce que l'Open Source ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Le terme “Open Source” désigne un logiciel ou programme
                        informatique où le code source est ouvert au public,
                        peut-être modifié et redistribué par n'importe qui.C'est
                        le cas de notre application web METRIZ distribué sous
                        licence CeCILL.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="qt-1">
                    <Accordion.Header as="h4"  onClick={() => setEventKey("qt-1")}>
                      <span className="fw-bold">
                        Qu'est-ce que l'Open Data ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qt-2">
                    <Accordion.Header as="h4"  onClick={() => setEventKey("qt-2")}>
                      <span className="fw-bold">
                        Comment l'utilisation de Metriz est-elle sécurisée ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Metriz est une Application Web qui s'exécute en local,
                        coté utilisateur (dans votre navigateur), autrement dit,
                        aucune donnée traitée par nos serveurs. C'est d'ailleurs
                        pourquoi vous devez enregistrer votre session pour ne
                        pas perdre l'avancement de la mesure.
                      </p>
                      <p>
                        En complément, aucune donnée n'est collectée. Les seules
                        requêtes émises par l'application sont celles permettant
                        de récupérer les données des fournisseurs et les données
                        statistiques.
                      </p>
                      <p>
                        Pour une totale transparence sur le traitement des
                        données, le code source est public.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qt-3"  onClick={() => setEventKey("qt-3")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Où le code source de l'Application Web est-il disponible
                        ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Le Code Source est disponible sur le répertoire Github,
                        vous pouvez y accéder via le lien suivant :{" "}
                        <a
                          href="http://github.com/La-Societe-Nouvelle"
                          target="_blank"
                        >
                          répertoire GitHub
                        </a>
                        .
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qt-4"  onClick={() => setEventKey("qt-4")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Comment sont obtenues/calculées les valeurs par défaut ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Les valeurs par défaut sont produites à partir des
                        empreintes macroéconomiques des divisions économiques
                        françaises et des retours statistiques microéconomiques
                        obtenus.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="qt-5"  onClick={() => setEventKey("qt-5")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Qu'est-ce que les valeurs par défaut ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Les données par défaut correspondent aux données
                        proposées lorsque l'empreinte sociétale d'une entreprise
                        n'est pas publiée. Elles permettent d'estimer les
                        impacts indirects associés à une dépense en s'appuyant
                        sur les caractéristiques connues du fournisseur tel que
                        sa division économique ou sa localisation.
                      </p>
                      <p>
                        Pour en savoir plus, au sujet des méthodes de calcul{" "}
                        <a
                          href="https://docs.lasocietenouvelle.org"
                          target="_blank"
                        >
                          {" "}
                          consultez la documentation{" "}
                        </a>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qt-6"  onClick={() => setEventKey("qt-6")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        À quoi correspond l'incertitude ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Un taux d'incertitude apparaît lorsque certaines données
                        ne proviennent pas d'une valeur publiée. Pour en savoir
                        plus, au sujet des incertitudes{" "}
                        <a
                          href="https://docs.lasocietenouvelle.org"
                          target="_blank"
                        >
                          {" "}
                          consultez la documentation{" "}
                        </a>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Tab>
            <Tab eventKey="qc" title="Questions cabinets comptables">
              <div className="m-4">
                <Accordion activeKey={eventKey}>
                  <Accordion.Item eventKey="qc-0"  onClick={() => setEventKey("qc-0")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Pourquoi proposer la mesure à mes clients ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>Intégrer ce service pour vos clients permet de :</p>
                      <ul>
                        <li>
                          De sensibiliser et de mobiliser vos clients sur les
                          enjeux sociaux et environnementaux ;
                        </li>
                        <li>
                          De confirmer la maîtrise des impacts et d'anticiper
                          les transformations à mener ;
                        </li>
                        <li>
                          De valoriser leur performance extra-financière auprès
                          des acteurs de leur marché ;
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="qc-1">
                    <Accordion.Header as="h4"  onClick={() => setEventKey("qc-1")}>
                      <span className="fw-bold">
                        Puis-je développer une activité commerciale autour de
                        l'application ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Oui, il est tout à fait possible d'utiliser notre
                        application web dans le cadre de vos activités
                        commerciales. L'application est distribuée sous licence
                        libre : elle vous confère une liberté d'exploitation, y
                        compris à des fins commerciales.
                      </p>
                      <p>
                        Vous êtes également libre de copier, modifier et
                        redistribuer l'application web, sous condition de
                        préserver la licence associée (licence CeCILL 2.0).
                      </p>
                      <p>
                        Si besoin, nous établissons des partenariats vous
                        permettant de disposer d'une version adaptée à vos
                        besoins (charte graphique, lecture de fichiers
                        spécifiques, etc.) et de vous fournir une assistance
                        technique vis-à-vis de son utilisation.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qc-2"  onClick={() => setEventKey("qc-2")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Comment monter en compétences sur les enjeux RSE ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Actuellement, La Société Nouvelle ne propose pas de
                        formation sur la RSE. Nous vous conseillons de vous
                        rapprocher des{" "}
                        <a href="https://enoes.com/formations/" target="_blank">
                          {" "}
                          formations de L'ENOES{" "}
                        </a>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qc-3"  onClick={() => setEventKey("qc-3")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Puis-je intégrer le calcul des indicateurs à mon outil ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Oui, vous pouvez directement intégrer le calcul au sein
                        de vos produits.La méthodologie et l'API sont publiques.
                        N'hésitez pas à nous contacter pour faciliter au mieux
                        l'intégration.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qc-4"  onClick={() => setEventKey("qc-4")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Quels sont les livrables obtenus ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        À la fin de la mesure de l'empreinte sociétale, vous
                        pouvez télécharger pour chaque indicateur :
                      </p>
                      <ul>
                        <li>
                          Une plaquette récapitulative des résultats (PDF) ;
                        </li>
                        <li>Un rapport détaillant les résultats (PDF) ;</li>
                        <li>Les données (EXCEL) ;</li>
                      </ul>

                      <p>
                        Les graphiques disponibles au sein de l'interface
                        d'affichage des résultats sont également téléchargeables
                        au format image pour constituer vous même vos propres
                        livrables. N'hésitez pas à nous faire part de vos
                        livrables pour que nous puissions améliorer les exports
                        disponibles.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="qc-5"  onClick={() => setEventKey("qc-5")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        Puis-je tester l'application ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Oui, l'application est accessible librement.Vous pouvez
                        également télécharger les fichiers démo suivants pour
                        parcourir les différentes étapes : TODO
                      </p>
                      <p>
                        Enfin, un guide d'utilisation est disponible au sein du
                        centre de ressources :
                        <a
                          href="https://docs.lasocietenouvelle.org"
                          target="_blank"
                        >
                          https://docs.lasocietenouvelle.org
                        </a>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="qc-6"  onClick={() => setEventKey("qc-6")}>
                    <Accordion.Header as="h4">
                      <span className="fw-bold">
                        À quoi correspond l'incertitude ?
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Un taux d'incertitude apparaît lorsque certaines données
                        ne proviennent pas d'une valeur publiée. Pour en savoir
                        plus, au sujet des incertitudes{" "}
                        <a
                          href="https://docs.lasocietenouvelle.org"
                          target="_blank"
                        >
                          {" "}
                          consultez la documentation{" "}
                        </a>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Tab>
            <Tab eventKey="qe" title="Questions entreprises"></Tab>
          </Tabs>
        </Container>
      </section>
    </>
  );
};

export default Faq;
