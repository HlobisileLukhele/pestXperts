import CalltoAction from '../components/CalltoAction.jsx';
import Hero from '../components/Hero.jsx';
import ServicesCards from '../components/ServicesCards.jsx';
import StepSection from '../components/StepSection.jsx'; // corrected import

function Home() {
  return (
    <div>
      <Hero />
      <ServicesCards />
      <CalltoAction />
      <StepSection />
    </div>
  );
}

export default Home;
