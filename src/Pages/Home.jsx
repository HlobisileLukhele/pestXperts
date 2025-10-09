import CalltoAction from '../components/CalltoAction.jsx';
import Hero from '../components/Hero.jsx';
import ServicesCards from '../components/servicesCards.jsx';
import StepsSection from '../components/StepSection.jsx';

function Home() {
  return (
    <div>
      <Hero />
      <ServicesCards />
      <CalltoAction />
      <StepsSection />
    </div>
  );
}
export default Home;