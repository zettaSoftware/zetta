import './App.css';
import Navigation from './components/Navigation';
import HeroBanner from './components/HeroBanner';
import Services from './components/Services';
import Product from './components/Product';
import HasilPekerjaan from './components/HasilPekerjaan';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroBanner />
      <Services />
      <Product />
      <HasilPekerjaan />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
