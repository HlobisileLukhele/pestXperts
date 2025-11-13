import CalltoAction from '../components/CalltoAction.jsx';
import Hero from '../components/Hero.jsx';
import ServicesCards from '../components/ServicesCards.jsx';
import StepSection from '../components/StepSection.jsx'; // corrected import

function Home() {
  const [currentReview, setCurrentReview] = useState(0);

  // Auto-slide reviews every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
