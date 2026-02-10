import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/practice", label: "Domaines de pratique" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <div className="header-area">
        <div
          id="sticky-header"
          className={`main-header-area ${isSticky ? "sticky" : ""}`}>
          <div className="container-fluid p-0">
            <div className="row align-items-center justify-content-between no-gutters">
              {/* Logo */}
              <div className="col-6 col-lg-2">
                <div className="logo-img">
                  <Link to="/">
                    <img
                      className="logoNotaire"
                      src="/img/logo.png"
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="col-lg-8 d-none d-lg-block">
                <div className="main-menu">
                  <nav>
                    <ul id="navigation">
                      {navLinks.map((link) => (
                        <li key={link.path}>
                          <Link
                            to={link.path}
                            className={
                              location.pathname === link.path ? "active" : ""
                            }>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Hamburger (Mobile) */}
              <div className="col-6 d-lg-none text-end">
                <button
                  className="mobile-menu-toggle"
                  onClick={() => setMobileOpen(!mobileOpen)}>
                  <i className="fa fa-bars"></i>
                </button>
              </div>

              {/* Mobile Menu */}
              <div
                className={`col-12 d-lg-none mobile_menu ${
                  mobileOpen ? "open" : ""
                }`}>
                <nav>
                  <ul>
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          onClick={() => {
                            setMobileOpen(false); // close mobile menu
                            window.scrollTo(0, 0); // scroll to top
                          }}
                          className={
                            location.pathname === link.path ? "active" : ""
                          }>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
