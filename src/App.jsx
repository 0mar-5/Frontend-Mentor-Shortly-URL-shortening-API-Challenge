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
      </main>
    </>
  );
}

export default App;
