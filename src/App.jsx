import Hero from "./components/Hero/Hero";
import Nav from "./components/Navigation/Nav";
import ShortenURL from "./components/ShortenURL/ShortenURL";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ShortenURL />
      </main>
    </>
  );
}

export default App;
