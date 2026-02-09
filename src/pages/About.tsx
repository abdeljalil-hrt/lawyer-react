import Layout from '../components/Layout';
import Bradcam from '../components/Bradcam';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import Testimonials from '../components/Testimonials';
import AppointmentForm from '../components/AppointmentForm';

const AboutPage = () => {
    return (
        <Layout>
            <Bradcam
                title="Votre notaire de confiance <br /> dans votre ville"
                bgClass="bradcam_bg_2"
            />
            <AboutSection />
            <TeamSection />
            <Testimonials />
            <AppointmentForm />
        </Layout>
    );
};

export default AboutPage;
