import "./Amenities.css";

import bedroom from "../images/amenities/Bedroom.png";
import carParking from "../images/amenities/Car parking.png";
import kidsPlayArea from "../images/amenities/Kids Play Area.png";
import living from "../images/amenities/Living.png";
import playGround from "../images/amenities/Play Ground.png";
import solarPanel from "../images/amenities/Solar Panel.png";
import luxuryBedroom from "../images/amenities/Warm Luxury Bedroom at Dusk.png";

function Amenities() {
    const amenities = [{
            title: "Car Parking",
            image: carParking,
            description: "Secure and convenient parking space for residents and visitors.",
        },
        {
            title: "Premium Bedroom",
            image: bedroom,
            description: "Thoughtfully designed bedrooms offering comfort and privacy.",
        },
        {
            title: "Kids Play Area",
            image: kidsPlayArea,
            description: "A safe and enjoyable space for children to play and explore.",
        },
        {
            title: "Solar Panel",
            image: solarPanel,
            description: "Energy-efficient solutions designed for a sustainable lifestyle.",
        },
        {
            title: "Play Ground",
            image: playGround,
            description: "Open recreational space for outdoor activities and leisure.",
        },
        {
            title: "Luxury Living",
            image: living,
            description: "Elegant living spaces designed for modern and comfortable living.",
        },
        {
            title: "Luxury Bedroom",
            image: luxuryBedroom,
            description: "Warm and sophisticated interiors created for peaceful living.",
        },
    ];

    return ( <
        section className = "amenities-section"
        id = "amenities" >

        <
        div className = "amenities-heading" >
        <
        span > AMENITIES < /span>

        <
        h2 >
        Designed For A <
        br / >
        <
        strong > Better Lifestyle < /strong> <
        /h2>

        <
        p >
        Experience thoughtfully planned amenities designed to make everyday living comfortable, convenient and enjoyable. <
        /p> <
        /div>

        <
        div className = "amenities-grid" > {
            amenities.map((amenity, index) => ( <
                div className = "amenity-card"
                key = { index } >

                <
                div className = "amenity-image" >
                <
                img src = { amenity.image }
                alt = { amenity.title }
                /> <
                /div>

                <
                div className = "amenity-content" >
                <
                h3 > { amenity.title } < /h3>

                <
                p > { amenity.description } < /p> <
                /div>

                <
                /div>
            ))
        } <
        /div>

        <
        /section>
    );
}

export default Amenities;