import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import PracticeAreas from "../components/PracticeAreas";
import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials";
// import AppointmentForm from "../components/AppointmentForm";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <PracticeAreas />
      <TeamSection />
      <Testimonials />
      {/* <AppointmentForm /> */}
    </Layout>
  );
};

export default Home;
