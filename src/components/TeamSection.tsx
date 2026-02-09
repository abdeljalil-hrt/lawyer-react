const TeamSection = () => {
  const team = [
    {
      name: "Amal",
      role: "Secrétaire notarial",
      img: "/img/lawyers/my_pic2.png",
    },
    { name: "Amin", role: "Assistant juridique", img: "/img/lawyers/2.png" },
    { name: "Walid", role: "Clerc de notaire", img: "/img/lawyers/3.png" },
  ];

  return (
    <div className="our_loyers">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-60">
              <h3>Notre Équipe</h3>
              <p>
                Nos assistants et collaborateurs expérimentés accompagnent le
                notaire dans la préparation, la rédaction et le suivi de tous
                les actes juridiques, assurant des transactions fiables et
                sécurisées pour nos clients.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {team.map((member, index) => (
            <div className="col-xl-4 col-md-6 col-lg-4" key={index}>
              <div className="single_loyers text-center">
                <div className="thumb">
                  <img src={member.img} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                {/* <div className="social_links">
                                    <ul>
                                        <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                        <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                        <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                                    </ul>
                                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
