import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Configuration from "./components/Configuration";
import Pricing from "./components/Pricing";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";
import Footer from "./components/Footer";

function App() {
    return ( <
        >
        <
        Navbar / >

        <
        main > { /* Hero */ } <
        Hero / >

        { /* About */ } <
        About / >

        { /* Configuration */ } <
        Configuration / >

        { /* Pricing */ } <
        Pricing / >

        { /* Amenities */ } <
        Amenities / >

        { /* Floor Plans */ } <
        FloorPlans / >
        <
        /main>

        { /* Footer */ } <
        Footer / >
        <
        />
    );
}

export default App;