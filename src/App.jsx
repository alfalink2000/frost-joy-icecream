import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Flavors from "./components/Flavors/Flavors";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Order from "./components/Order/Order";
import Footer from "./components/Footer/Footer";
import "./global.css";

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Header />
      <Hero />
      <Flavors />
      <Gallery />
      <Testimonials />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
