import Head from 'next/head'
import { Helmet } from 'react-helmet';

// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

export default function Blog() {
    return (
        <div className="container">
            <Helmet>
                <title>La société Nouvelle | Blog</title>
            </Helmet>
            <Header page="blog" />
            <main className="main">

                <div className="section">
                    <div className="article">
                        <div className="h-group">
                            <div>
                                <h2 className="big-title">
                                    Mesurer, informer, pour une économie durable
                                </h2>
                            </div>
                            <div>
                                <img src="/images/sustainability.jpg" alt="" />
                            </div>
                        </div>

                        <h3 className="subtitle">
                            Notre histoire
                        </h3>
                        <h4>
                            Il était une fois la société nouvelle...
                        </h4>
                        <div className="post-content">
                            <img src="/images/Euratechnologies.jpg" alt="Euratechnologies" />
                            <p>
                                C’est avec la volonté de contribuer à la construction d’une société durable que La Société Nouvelle prit son premier souffle : un nom choisi par l’envie de faire bouger les choses, pour marquer son engagement au service de cette transition.
                            </p>
                            <p>
                                L’aventure commence en avril 2020, où Sylvain en dernière année à l’Ecole Centrale de Lille,
                                initie le projet avec comme conviction que la transition écologique et sociale ne pourra se faire sans une information fiable
                                et pertinente sur et pour les entreprises.
                                Durant les premiers mois, l’approche comptable se précise, le premier panel d’indicateurs est constitué,
                                la base de données ouverte est initialisée et le premier outil de calcul est élaboré.
                            </p>

                            <p>
                                En septembre, la Société Nouvelle rejoint l’incubateur Euratechnologies à Lille pour structurer son développement.
                                Depuis, elle n’a de cesse d’améliorer les ressources qu’elle met à disposition des entreprises et veille à rendre
                                tous ses travaux publics et accessibles.
                            </p>
                            <p>
                                En février 2022, l’équipe s’agrandit avec l’arrivée de Maëva, Laura et Joris.
                                Désormais, l’objectif est d’accéler le déploiement de la méthode et de la parachever.
                            </p>
                            <h5>
                                Aujourd’hui, qu’est-ce que La Société Nouvelle ?
                            </h5>
                            <p>C’est une initiative open data et open source dont la mission est de déployer un système d'information et de comptabilité et ainsi permettre aux entreprises de mesurer, sur des dimensions sociales et environnementales clefs, les impacts de la valeur qu’elles produisent.
                            </p>
                        </div>
                        <div>

                            <h3 className="subtitle">
                                Notre vision
                            </h3>
                            <h4>
                                Pourquoi mesurer ce panel d'indicateurs ?
                            </h4>
                            <p>
                                Dans le contexte social et écologique actuel, il est incontournable pour une entreprise de connaître,
                                a minima sur les enjeux clefs, ses impacts.
                            </p>
                            <p>
                                Au-delà de sa pérennité, il s’agit d’un maillon essentiel pour identifier les entreprises
                                les plus performantes sur les dimensions sociales et environnementales concernées.
                            </p>
                            <p >

                                Plus globalement, il s’agit de repenser la valeur économique, en associant à sa dimension quantitative (volume monétaire),
                                une approche qualitative et d’apprécier de manière plus juste et plus complète la valeur créée et produite d’une entreprise.
                            </p>
                            <p>
                                Les enjeux sont conséquents et nous devons construire dès à présent un monde économique ayant à coeur de mesurer ses impacts de production, pour les générations futures.
                            </p>
                        </div>
                        <div>

                            <h3 className="subtitle">
                                Nos missions
                            </h3>
                            <p>
                                <b>
                                    Administration d’une base de données ouverte :
                                </b>
                                &nbsp;Centraliser les données mesurées et publiées des entreprises pour permettre
                                à tous de les exploiter librement et facilement.

                            </p>
                            <p>
                                <b>
                                    Mise à disposition d’un outil de mesure open source :
                                </b>
                                &nbsp;Développer et maintenir une application web pour que chacun puisse calculer les indicateurs et
                                apprécier les résultats.
                            </p>
                            <p>
                                 <b>
                                    Support et Assistance :
                                </b>
                                &nbsp;Accompagner les acteurs qui souhaitent porter la méthodologie pour faciliter son application.
                            </p>

                        </div>
                        <div className="nos-valeurs">
                            <h3 className="subtitle">
                                Nos valeurs
                            </h3>
                            <div className="row">
                                <div>
                                    <p className="big-quote">
                                        "Enthousiasme"
                                    </p>
                                    <p className="quote">
                                        "Pragmatisme"
                                    </p>
                                    <p className="big-quote">
                                        "Transparence"
                                    </p>
                                    <p className="quote">
                                        "Exigence"
                                    </p>
                                    <p className="big-quote">
                                        "Accessibilité"
                                    </p>
             
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            Maitre mot de notre état d’esprit, le sujet est important, l’enthousiasme est donc de rigueur.
                                            Et sous les bons conseils de Voltaire : “Rien ne se fait sans un peu d’enthousiasme”.                                        </li>
                                        <li>
                                            Nous souhaitons mettre en oeuvre des solutions opérationnelles, avec le souci de l’efficacité.
                                        </li>
                                        <li>
                                            Nos travaux sont rendus publics : les ressources, données et méthodologies sont ainsi librement acessibles, vérifiables et réutilisables  par tous.
                                        </li>
                                        <li>
                                            Nous nous efforçons de fournir la meilleure qualité de service pour proposer une méthode crédible et rigoureuse et ambitionner sa large diffusion.
                                        </li>
                                    </ul>


                                </div>
                            </div>

                        </div>
                        <div className="">

                            <h3 className="subtitle">
                                Notre positionnement
                            </h3>
                            <p>
                            La Société Nouvelle oeuvre à la mise en place d’un service d’intérêt général. 
                            Nous avons à cœur de pousser le plus d’organisations possible à prendre conscience de leurs impacts à l’échelle 
                            de leurs activités.
                            Dans cette optique, notre ambition est de compléter les pratiques comptables pour insérer l’information extra-financière au coeur des tableaux de gestion et informer entreprises et particuliers des impacts de leurs consommations.
                            </p>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />

        </div>
    )
}


