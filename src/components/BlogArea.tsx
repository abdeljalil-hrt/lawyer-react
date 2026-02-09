import React from 'react';

const BlogArea: React.FC = () => {
    return (
        <section className="blog_area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 mx-auto mb-5 mb-lg-0">
                        <div className="blog_left_sidebar">
                            <article className="blog_item">
                                <div className="blog_item_img">
                                    <img className="card-img rounded-0" src="/img/banner/logonot-2.png" alt="" />
                                </div>
                                <div className="blog_details">
                                    <a className="d-inline-block" href="#">
                                        <h2>Bienvenue sur notre espace dédié à l’information juridique.</h2>
                                    </a>
                                    <p>Retrouvez ici des articles clairs, fiables et accessibles pour mieux comprendre les
                                        actes notariés, le droit immobilier, les successions, la famille et la gestion du
                                        patrimoine au Maroc.</p>
                                </div>
                            </article>

                            <article className="blog_item">
                                <div className="blog_details">
                                    <a className="d-inline-block" href="#">
                                        <h2>1. Comprendre le Rôle du Notaire au Maroc</h2>
                                    </a>
                                    <p>Le notaire occupe une position essentielle dans la sécurité juridique. En tant
                                        qu’officier public, il rédige, authentifie et conserve les actes afin de leur
                                        donner une force légale incontestable.
                                        Dans cet article, nous expliquons :<br />
                                        . Ce qu’est un acte authentique <br />
                                        . Les garanties offertes par le notaire <br />
                                        . Les principaux domaines d’intervention</p>
                                </div>
                            </article>

                            <article className="blog_item">
                                <div className="blog_details">
                                    <a className="d-inline-block" href="#">
                                        <h2>2. Acheter un Bien Immobilier : Les Étapes Clés avec le Notaire</h2>
                                    </a>
                                    <p>L’achat d’un appartement ou d’un terrain nécessite une vérification minutieuse :
                                        titre foncier, situation fiscale, légalisation, contrats…
                                        Dans cet article, nous détaillons : <br />
                                        . Les documents à fournir <br />
                                        . Les vérifications effectuées par le notaire <br />
                                        . Les risques à éviter <br />
                                        . Le déroulement de la signature de l’acte</p>
                                </div>
                            </article>

                            <article className="blog_item">
                                <div className="blog_details">
                                    <a className="d-inline-block" href="#">
                                        <h2>3. Successions & Héritage : Ce que Dit la Loi Marocaine</h2>
                                    </a>
                                    <p>Le règlement d’une succession peut être complexe. Le notaire vous accompagne pour
                                        simplifier chaque étape.
                                        Nous abordons : <br />
                                        . Comment se calcule un héritage <br />
                                        . Le rôle du testament <br />
                                        . Les droits des héritiers <br />
                                        . L’importance de la médiation familiale
                                    </p>
                                </div>
                            </article>

                            <article className="blog_item">
                                <div className="blog_details">
                                    <a className="d-inline-block" href="#">
                                        <h2>4. Actualités Juridiques au Maroc</h2>
                                    </a>
                                    <p>Nous publions régulièrement des mises à jour concernant : <br />
                                        . Les nouvelles lois <br />
                                        . Les réformes immobilières <br />
                                        . Les changements administratifs <br />
                                        . Les nouveautés concernant les successions ou les entreprises</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogArea;
