{ `import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Configuration from "./components/Configuration";
import Pricing from "./components/Pricing";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Configuration />
        <Pricing />

        <Amenities />

        <FloorPlans />
      </main>
    </>
  );
}

export default App;` }