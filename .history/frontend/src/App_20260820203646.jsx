import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Configuration from "./components/Configuration";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";
import Location from "./components/Location";
import Footer from "./components/Footer";
import EnquiryForm from "./components/EnquiryForm";

import "./App.css";

function App() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(true);

    return ( <
        >
        <
        EnquiryForm isOpen = { isEnquiryOpen }
        onClose = {
            () => setIsEnquiryOpen(false) }
        /> <
        Navbar / >

        <
        main >
        <
        Hero onEnquire = {
            () => setIsEnquiryOpen(true) }
        />

        <
        About / >

        <
        Configuration / >

        <Features />

        <
        Pricing / >

        <
        Amenities / >

        <
        FloorPlans / >

        <
        Location / >
        <
        /main>

        <
        Footer onEnquire = {
            () => setIsEnquiryOpen(true) }
        /> <
        />
    );
}

export default App;