import React from "react"
import { Col, Image, Row } from "react-bootstrap"

function LatestPosts() {
    return (
        <div id="latest-posts">
            <Row>
                <Col>
                    <div className="last">
                        <div className="image-post">
                            <Image
                                alt="Photo d'équipe de la Societé Nouvelle"
                                src="/images/equipe-la-societe-nouvelle.jpg"
                                fluid />
                        </div>
                        <div className="post-title">
                            <h2> Il était une fois La Société Nouvelle... </h2>
                        </div>
                        <div className="post-meta">
                            <p>Publié le 4 mars 2022</p>
                        </div>
                        <div className="post-content">
                            <p>
                                C’est avec la volonté de contribuer à la construction d’une société durable que La Société Nouvelle prit son premier souffle :
                                un nom choisi par l’envie de faire bouger les choses, pour marquer son engagement au service de cette transition.
                            </p>

                        </div>
                        <div className="post-footer">
                            <a href="/">Lire la suite</a>
                        </div>
                    </div>

                </Col>
                <Col>
                    <div className="post">

                        <Row>
                            <Col lg={4}>
                                <div className="image-post">
                                    <Image
                                        alt="Photo d'équipe de la Societé Nouvelle"
                                        src="/images/equipe-la-societe-nouvelle.jpg"
                                        fluid />
                                </div>
                            </Col>
                            <Col>
                                <div className="post-title">
                                    <h2> Il était une fois La Société Nouvelle... </h2>
                                </div>
                                <div className="post-meta">
                                    <p>Publié le 4 mars 2022</p>
                                </div>
                                <div className="post-content">
                                    <p>
                                        C’est avec la volonté de contribuer à la construction d’une société durable que La Société Nouvelle prit son premier souffle :
                                        un nom choisi par l’envie de faire bouger les choses, pour marquer son engagement au service de cette transition.
                                    </p>
                                </div>
                                <div className="post-footer">
                                    <a href="/">Lire la suite</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="post">

                        <Row>
                            <Col lg={4}>
                                <div className="image-post">
                                    <Image
                                        alt="Photo d'équipe de la Societé Nouvelle"
                                        src="/images/equipe-la-societe-nouvelle.jpg"
                                        fluid />
                                </div>
                            </Col>
                            <Col>
                                <div className="post-title">
                                    <h2> Il était une fois La Société Nouvelle... </h2>
                                </div>
                                <div className="post-meta">
                                    <p>Publié le 4 mars 2022</p>
                                </div>
                                <div className="post-content">
                                    <p>
                                        C’est avec la volonté de contribuer à la construction d’une société durable que La Société Nouvelle prit son premier souffle :
                                        un nom choisi par l’envie de faire bouger les choses, pour marquer son engagement au service de cette transition.
                                    </p>
                                </div>
                                <div className="post-footer">
                                    <a href="/">Lire la suite</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="post">

                        <Row>
                            <Col lg={4}>
                                <div className="image-post">
                                    <Image
                                        alt="Photo d'équipe de la Societé Nouvelle"
                                        src="/images/equipe-la-societe-nouvelle.jpg"
                                        fluid />
                                </div>
                            </Col>
                            <Col>
                                <div className="post-title">
                                    <h2> Il était une fois La Société Nouvelle... </h2>
                                </div>
                                <div className="post-meta">
                                    <p>Publié le 4 mars 2022</p>
                                </div>
                                <div className="post-content">
                                    <p>
                                        C’est avec la volonté de contribuer à la construction d’une société durable que La Société Nouvelle prit son premier souffle :
                                        un nom choisi par l’envie de faire bouger les choses, pour marquer son engagement au service de cette transition.
                                    </p>
                                </div>
                                <div className="post-footer">
                                    <a href="/">Lire la suite</a>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>

        </div>
    )
}

export default LatestPosts