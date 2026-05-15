import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <Hero />
      <About />
      <Work />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
