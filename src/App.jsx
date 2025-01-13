import Cta from "./components/Cta/Cta";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Navigation/Nav";
import ShortenURL from "./components/ShortenURL/ShortenURL";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ShortenURL />
        <Statistics />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
