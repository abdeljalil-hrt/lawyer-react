import Layout from "../components/Layout";
import Bradcam from "../components/Bradcam";
import PracticeAreas from "../components/PracticeAreas";
import AboutSection from "../components/AboutSection";
import Testimonials from "../components/Testimonials";

const PracticePage = () => {
  return (
    <Layout>
      <Bradcam
        title="Le Notaire de Référence au Maroc <br /> Excellence et Confiance"
        bgClass="bradcam_bg"
      />
      <PracticeAreas />
      <AboutSection />
      <Testimonials />
      {/* <AppointmentForm /> */}
    </Layout>
  );
};

export default PracticePage;
