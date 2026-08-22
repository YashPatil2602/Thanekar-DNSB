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
            title: "Luxury Bedroom",
            image: bedroom,
            description: "Elegant and comfortable bedrooms designed for peaceful living."
        },
        {
            title: "Car Parking",
            image: carParking,
            description: "Dedicated and convenient parking spaces for residents."
        },
        {
            title: "Kids Play Area",
            image: kidsPlayArea,
            description: "A safe and engaging space for children to play and enjoy."
        },
        {
            title: "Premium Living",
            image: living,
            description: "Beautifully designed spaces offering comfort and modern luxury."
        },
        {
            title: "Play Ground",
            image: playGround,
            description: "Open recreational spaces for an active and healthy lifestyle."
        },
        {
            title: "Solar Panel",
            image: solarPanel,
            description: "Energy-efficient solutions supporting sustainable living."
        },
        {
            title: "Warm Luxury Bedroom",
            image: luxuryBedroom,
            description: "Sophisticated interiors created for a premium living experience."
        }
    ];

    return ( <
        section className = "amenities-section"
        id = "amenities" >

        <
        div className = "amenities-header" >
        <
        span > THANEKAR DNSB < /span>

        <
        h2 >
        Premium < strong > Amenities < /strong> <
        /h2>

        <
        p >
        Experience thoughtfully designed amenities that bring comfort,
        convenience and luxury to your everyday lifestyle. <
        /p> <
        /div>

        <
        div className = "amenities-grid" >

        {
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
        }

        <
        /div>

        <
        /section>
    );
}

export default Amenities;