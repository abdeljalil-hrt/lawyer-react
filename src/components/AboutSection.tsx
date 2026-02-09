const AboutSection = () => {
    return (
        <div className="about_area">
            <div className="opacity_icon d-none d-lg-block">
                <i className="flaticon-balance"></i>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-6">
                        <div className="single_about_info text-center">
                            <div className="about_thumb">
                                <img src="/img/about/bannercercle.jpg" style={{ width: '100%' }} alt="About" />
                            </div>
                            <h3>Études <br /></h3>
                            <p>L’Étude de Maître El Mandri Adil exerce à Tétouan depuis 1992. Composée aujourd’hui de
                                expérience reconnue sur la place tétouanaise. La rigueur de son travail et la qualité
                                de ses services lui ont valu la confiance d’un grand nombre de professionnels et de
                                particuliers. </p>
                            <p>Pour toute opération relative à votre patrimoine, à votre logement ou à tout autre besoin
                                notarial, notre équipe vous accompagne avec sérieux et professionnalisme. </p>
                            <div className="signature">
                                <img src="/img/about/signature.png" alt="Signature" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <div className="single_about_info text-center">
                            <div className="about_thumb">
                                <div className="image_hover">
                                    <div className="hover_inner">
                                        <img src="/img/about/4.png" style={{ width: '100%' }} alt="Profession" />
                                    </div>
                                </div>
                            </div>
                            <h3>La profession</h3>
                            <p>Les actes et contrats n’acquièrent une valeur authentique qu’une fois établis devant un
                                notaire. Celui-ci est chargé de les authentifier, de les sécuriser et d’en assurer la
                                conservation. À la fois conseiller et expert juridique, le notaire reçoit tous les actes et
                                contrats auxquels les parties souhaitent donner une valeur officielle : soit par obligation
                                légale, soit par souci de sécurité et de transparence.</p>
                            <p>Il conserve l’ensemble de ces documents et en délivre des expéditions ou des copies
                                conformes.
                                Le notaire joue également un rôle essentiel dans tous les dossiers relatifs aux droits
                                immobiliers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
