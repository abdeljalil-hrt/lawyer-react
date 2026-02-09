const PracticeAreas = () => {
    const practices = [
        { title: 'Authentification des Actes', desc: 'Le notaire reçoit, authentifie et conserve tous les actes juridiques pour leur donner une valeur légale incontestable.', icon: 'flaticon-case', img: '/img/practice/1.png' },
        { title: 'Droit Immobilier', desc: 'Le notaire conseille et rédige tous les actes liés à la vente, l’achat ou la location de biens immobiliers, garantissant leur conformité légale.', icon: 'flaticon-courthouse', img: '/img/practice/2.png' },
        { title: 'Conseil Patrimonial', desc: 'Il guide les particuliers et les familles dans la gestion, la transmission et la protection de leur patrimoine.', icon: 'flaticon-judge', img: '/img/practice/3.png' },
        { title: 'Gestion de l’Héritage', desc: 'Le notaire organise la transmission des biens, rédige les actes de partage et assure le respect des droits légaux des héritiers.', icon: 'flaticon-jury', img: '/img/practice/4.png' },
    ];

    return (
        <div className="practice_area">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title text-center mb-60">
                            <h3>Domaines de compétence</h3>
                            <p>Découvrez l’ensemble de nos services notariaux, couvrant tous les actes essentiels de la vie
                                personnelle et professionnelle, réalisés avec rigueur, expertise et confidentialité.</p>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    {practices.map((item, index) => (
                        <div className="col-xl-3 col-md-6" key={index}>
                            <div className="single_practice">
                                <div className="practice_image">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="practice_hover text-center">
                                    <div className="hover_inner">
                                        <i className={item.icon}></i>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <a href="#" className="lern_more">En savoir plus</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PracticeAreas;
