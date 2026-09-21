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
import "./ClientTheme.css";
import "./ProfessionalPolish.css";
import "./FinalPolish.css";

import "./ClientFinalFix.css";
import "./WalkthroughFix.css";
import "./ClientFinalReview.css";
import "./FinalClientCompletion.css";
import "./ClientFinalRequestedFixes.css";
function App() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(true);
    const [enquiryPurpose, setEnquiryPurpose] = useState("general");
    const [enquiryResource, setEnquiryResource] = useState(null);

    const openEnquiry = (purpose = "general", resource = null) => {
        setEnquiryPurpose(purpose);
        setEnquiryResource(resource);
        setIsEnquiryOpen(true);
    };

    const closeEnquiry = () => {
        setIsEnquiryOpen(false);
        setEnquiryPurpose("general");
        setEnquiryResource(null);
    };

    return (
        <>
            <EnquiryForm
                isOpen={isEnquiryOpen}
                onClose={closeEnquiry}
                purpose={enquiryPurpose}
                resourceUrl={enquiryResource?.url || ""}
                resourceLabel={enquiryResource?.label || ""}
            />

            <Navbar
                onBrochure={() => openEnquiry("brochure")}
            />

            <main>
                <Hero
                    onEnquire={() => openEnquiry("general")}
                />

                <About />

                <Configuration />

                <Features />

                <Pricing onEnquire={openEnquiry} />

                <Amenities />

                <FloorPlans
                    onFloorPlan={(plan) =>
                        openEnquiry("floor-plan", plan)
                    }
                />

                <Location />
            </main>

            <Footer
                onEnquire={() => openEnquiry("general")}
                onBrochure={() => openEnquiry("brochure")}
            />
        </>
    );
}

export default App;
