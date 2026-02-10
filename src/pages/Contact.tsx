import Layout from "../components/Layout";
import Bradcam from "../components/Bradcam";
import { useState } from "react";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix for Leaflet marker icon issues in React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactPage = () => {
  let position: [number, number] = [35.5816217, -5.352729]; // [Lat, Lng]

  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Message envoyé !");
  };

  return (
    <Layout>
      <Bradcam title="Contactez-nous" bgClass="bradcam_bg_2" />

      <section className="contact-section py-20 bg-gray-50/50">
        <div
          className="map-iframe-wrapper mb-12 pb-4 container mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-gray-200"
          style={{ height: "450px" }}>
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Notaire Adil el Mandri <br /> Av. des FAR, Tétouan.
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="container mx-auto px-4">
          <div className="row justify-content-center mb-12">
            <div className="col-12 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
                Nous contacter
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour répondre à toutes vos
                questions et vous accompagner dans vos démarches.
              </p>
            </div>
          </div>
          <div className="row justify-content-center gap-12 lg:gap-0">
            <div className="col-lg-7 mb-4">
              <form
                className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
                onSubmit={handleSubmit}>
                <div className="mb-6">
                  <Textarea
                    placeholder="Entrez votre message ici..."
                    label="Message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    rows={6}
                  />
                </div>
                <div className="row mb-6">
                  <div className="col-sm-6 mb-6 sm:mb-0">
                    <Input
                      type="text"
                      label="Nom complet"
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-sm-6">
                    <Input
                      type="email"
                      label="Adresse email"
                      placeholder="jean@exemple.com"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <Input
                    type="text"
                    label="Sujet"
                    placeholder="Objet de votre message"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                  />
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px]">
                    Envoyer le message
                  </Button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="h-full flex flex-col justify-center space-y-8">
                <div className="media contact-info flex items-start p-6 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                  <span className="contact-info__icon mr-4 text-[#a70000] text-3xl mt-1">
                    <i className="ti-home"></i>
                  </span>
                  <div className="media-body">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Av. des FAR, Tétouan
                    </h3>
                    <p className="text-gray-600">Residence El Manzah, App A</p>
                  </div>
                </div>
                <div className="media contact-info flex items-start p-6 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
                  <span className="contact-info__icon mr-4 text-[#a70000] text-3xl mt-1">
                    <i className="ti-tablet"></i>
                  </span>
                  <div className="media-body">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      +212 5 39 99 69 56
                    </h3>
                    <p className="text-gray-600">Lun. à Ven. : 9h00 – 16h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
