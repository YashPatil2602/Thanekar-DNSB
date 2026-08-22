import { useState } from "react";
import "./Amenities.css";

import bedroom from "../images/amenities/Bedroom.png";
import carParking from "../images/amenities/Car parking.png";
import kidsPlayArea from "../images/amenities/Kids Play Area.png";
import living from "../images/amenities/Living.png";
import playGround from "../images/amenities/Play Ground.png";
import solarPanel from "../images/amenities/Solar Panel.png";
import luxuryBedroom from "../images/amenities/Warm Luxury Bedroom at Dusk.png";

const amenities = [{
        name: "Luxury Bedroom",
        image: bedroom,
    },
    {
        name: "Car Parking",
        image: carParking,
    },
    {
        name: "Kids Play Area",
        image: kidsPlayArea,
    },
    {
        name: "Premium Living",
        image: living,
    },
    {
        name: "Play Ground",
        image: playGround,
    },
    {
        name: "Solar Panel",
        image: solarPanel,
    },
    {
        name: "Warm Luxury Bedroom",
        image: luxuryBedroom,
    },
];

function Amenities() {
    const [startIndex, setStartIndex] = useState(0);

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % amenities.length);
    };

    const prevSlide = () => {
        setStartIndex(
            (prev) => (prev - 1 + amenities.length) % amenities.length
        );
    };

    const visibleAmenities = [
        amenities[startIndex % amenities.length],
        amenities[(startIndex + 1) % amenities.length],
        amenities[(startIndex + 2) % amenities.length],
    ];

    return ( <
        section className = "amenities-section"
        id = "amenities" >

        <
        div className = "amenities-title" >
        <
        span > < /span> <
        h2 > Amenities < /h2> <
        span > < /span> <
        /div>

        <
        div className = "amenities-slider" >

        <
        button className = "amenities-arrow left"
        onClick = { prevSlide } >
        ‹
        <
        /button>

        <
        div className = "amenities-cards" >

        {
            visibleAmenities.map((item, index) => ( <
                div className = "amenity-card"
                key = { `${item.name}-${index}` } >

                <
                img src = { item.image }
                alt = { item.name }
                />

                <
                div className = "amenity-overlay" >
                <
                h3 > { item.name } < /h3> <
                /div>

                <
                /div>
            ))
        }

        <
        /div>

        <
        button className = "amenities-arrow right"
        onClick = { nextSlide } >
        ›
        <
        /button>

        <
        /div>

        <
        /section>
    );
}

export default Amenities;