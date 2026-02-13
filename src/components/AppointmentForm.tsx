import { useState } from "react";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Button from "./ui/Button";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    tel: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Rendez-vous envoyé !");

    setFormData({
      nom: "",
      email: "",
      tel: "",
      date: "",
      message: "",
    });
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="appointment_area py-20 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mx-auto mb-5">
            <div className="appointment_info bg-gray-50/50 p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-x-hidden">
              <div className="opacity_icon d-none d-lg-block mb-6 text-[#a70000]">
                <i className="flaticon-balance text-4xl"></i>
              </div>
              <h3 className="mb-4 text-3xl font-bold font-serif text-gray-900">
                Prendre Rendez-vous
              </h3>
              <p className="mb-8 text-gray-600">
                De nombreuses possibilités s’offrent à vous pour prendre
                rendez-vous avec notre étude, et notre équipe se tient à votre
                disposition pour vous accompagner à chaque étape.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-6 col-md-6 mb-4">
                    <Input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange("nom", e.target.value)}
                    />
                  </div>
                  <div className="col-xl-6 col-md-6 mb-4">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-xl-6 col-md-6 mb-4">
                    <Input
                      type="tel"
                      placeholder="Numéro de téléphone"
                      value={formData.tel}
                      onChange={(e) => handleInputChange("tel", e.target.value)}
                    />
                  </div>
                  <div className="col-xl-6 col-md-6 col-12 mb-4 min-w-0">
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        handleInputChange("date", e.target.value)
                      }
                      required
                      className="w-full max-w-full min-w-0 block"
                      style={{ WebkitAppearance: "none" }}
                    />
                  </div>
                  <div className="col-xl-12 mb-6">
                    <Textarea
                      placeholder="Votre message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={4}
                    />
                  </div>
                  <div className="col-xl-12">
                    <div className="appoinment_button">
                      <Button type="submit" className="w-full">
                        Envoyer
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
