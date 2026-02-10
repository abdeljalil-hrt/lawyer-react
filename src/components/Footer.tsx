import { Link } from "react-router-dom";
import Input from "./ui/Input";
import Button from "./ui/Button";

// ... (imports are top of file usually, but replace_file_content might need context. I'll just change the import block and the form block separately if needed, but here I can probably do it in one go if they are close, but they are not (imports at line 1, form at line 73).
// I will split this into two tools or just user replace_file_content for the form and add imports manually?
// No, I can't do multiple replace chunks with replace_file_content.
// I will use multi_replace_file_content.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-3">
              <div className="footer_widget">
                <div className="footer_logo">
                  <Link to="/">
                    <img
                      className="logoNotaire"
                      src="/img/logo.png"
                      alt="Logo"
                    />
                  </Link>
                </div>
                <p className="footer_text">
                  Av. des FAR, Tétouan <br />
                  Residence El Manzah, App A<br />
                  +212 5399-96956 <br />
                </p>
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">Domaines d’Intervention</h3>
                <ul>
                  <li>
                    <a href="#">Conseil Patrimonial</a>
                  </li>
                  <li>
                    <a href="#">Successions et héritages</a>
                  </li>
                  <li>
                    <a href="#">Actes immobiliers</a>
                  </li>
                  <li>
                    <a href="#">Contrats et actes authentiques</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">Liens utiles</h3>
                <ul>
                  <li>
                    <Link to="/about">À propos</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-xl-4 col-md-6 col-lg-4"> */}
            {/* <div className="footer_widget">
                                <h3 className="footer_title">
                                    Subscribe
                                </h3>
                                <form action="#" className="newsletter_form flex items-start gap-2">
                                    <div className="flex-grow">
                                        <Input
                                            type="email"
                                            placeholder="Entrez votre mail"
                                            className="bg-transparent/10 text-white border-gray-700 placeholder-gray-400 focus:border-[#a70000] focus:ring-[#a70000]/20"
                                        />
                                    </div>
                                    <Button type="submit" className="whitespace-nowrap">S’inscrire</Button>
                                </form>
                                <p className="newsletter_text">Abonnez-vous à notre newsletter pour recevoir nos actualités.</p>
                            </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border"></div>
          <div className="row">
            <div className="col-xl-12">
              <p className="copy_right text-center">
                Copyright &copy; {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
