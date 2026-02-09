import { useState, useEffect } from 'react';

const Testimonials = () => {
    const testimonials = [
        { name: 'Fatima S.', text: 'Professionnalisme et confiance. Le notaire a pris le temps de m’expliquer chaque étape et de répondre à toutes mes questions. Je suis très satisfaite du service.', img: '/img/testmonial/smaill_thumb.png' },
        { name: 'Youssef K.', text: 'Je recommande cet office pour tous vos besoins notariaux. Une équipe sérieuse, compétente et toujours disponible pour répondre aux questions.', img: '/img/testmonial/smaill_thumb.png' },
        { name: 'Ahmed L.', text: 'Une équipe compétente et sérieuse. Ils m’ont accompagné dans l’achat de mon appartement avec clarté et efficacité. Tout s’est déroulé parfaitement.', img: '/img/testmonial/smaill_thumb.png' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="testmonial_area testmonial_bg_1 overlay2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testmonial_active" style={{ position: 'relative', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {testimonials.map((item, index) => (
                                <div
                                    className={`single_testmonial text-center ${index === activeIndex ? 'active' : ''}`}
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        opacity: index === activeIndex ? 1 : 0,
                                        transition: 'opacity 1s ease-in-out',
                                        visibility: index === activeIndex ? 'visible' : 'hidden',
                                        width: '100%'
                                    }}
                                >
                                    <i className="flaticon-straight-quotes"></i>
                                    <p style={{ fontSize: '20px', fontStyle: 'italic', color: '#fff' }}>{item.text}</p>
                                    <div className="author_info d-flex justify-content-center align-items-center">
                                        <div className="thumb">
                                            <img src={item.img} alt={item.name} style={{ borderRadius: '50%', border: '3px solid #fff' }} />
                                        </div>
                                        <span style={{ color: '#fff', marginLeft: '15px', fontWeight: 'bold' }}>- {item.name}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="slider-dots" style={{ position: 'absolute', bottom: '10px', display: 'flex' }}>
                                {testimonials.map((_, index) => (
                                    <span
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        style={{
                                            width: '12px',
                                            height: '12px',
                                            borderRadius: '50%',
                                            background: index === activeIndex ? '#f91942' : 'rgba(255,255,255,0.5)',
                                            margin: '0 5px',
                                            cursor: 'pointer'
                                        }}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
