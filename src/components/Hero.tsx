import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="slider_area ">
            <div className="slider_area_inner slider_bg_1 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="single_slider">
                                <div className="slider_text">
                                    <h3>Conseils et accompagnement <br /> de haute qualité</h3>
                                    <p>Votre notaire de confiance, expert et à votre service</p>
                                    <Link to="/practice" className="boxed-btn4 ">En savoir plus</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
