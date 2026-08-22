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
        title: "Luxury Bedroom",
        image: bedroom,
    },
    {
        title: "Car Parking",
        image: carParking,
    },
    {
        title: "Kids Play Area",
        image: kidsPlayArea,
    },
    {
        title: "Premium Living",
        image: living,
    },
    {
        title: "Play Ground",
        image: playGround,
    },
    {
        title: "Solar Panel",
        image: solarPanel,
    },
    {
        title: "Warm Luxury Bedroom",
        image: luxuryBedroom,
    },
];

export default function Amenities() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((current + 1) % amenities.length);
    };

    const previous = () => {
        setCurrent(
            (current - 1 + amenities.length) % amenities.length
        );
    };

    const cards = [
        amenities[current],
        amenities[(current + 1) % amenities.length],
        amenities[(current + 2) % amenities.length],
    ];

    return ( <
        section className = "amenities-section"
        id = "amenities" >

        <
        div className = "amenities-heading" >
        <
        div className = "gold-line" > < /div>

        <
        p > THANEKAR DNSB < /p>

        <
        h2 > Amenities < /h2>

        <
        div className = "gold-line" > < /div> <
        /div>

        <
        div className = "amenities-wrapper" >

        <
        button className = "amenities-arrow amenities-left"
        onClick = { previous } >
        ‹
        <
        /button>

        <
        div className = "amenities-grid" >

        {
            cards.map((item, index) => ( <
                div className = "amenity-card"
                key = { `${item.title}-${index}` } >

                <
                div className = "amenity-image" >
                <
                img src = { item.image }
                alt = { item.title }
                /> <
                /div>

                <
                div className = "amenity-name" >
                <
                h3 > { item.title } < /h3> <
                /div>

                <
                /div>
            ))
        }

        <
        /div>

        <
        button className = "amenities-arrow amenities-right"
        onClick = { next } >
        ›
        <
        /button>

        <
        /div>

        <
        /section>
    );
}