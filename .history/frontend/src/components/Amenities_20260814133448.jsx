function Amenities() {
    const amenities = [{
            image: "/images/amenities/rooftop-solar.jpg",
            title: "Rooftop Solar",
            description: "Energy-efficient rooftop solar facility."
        },
        {
            image: "/images/amenities/rooftop-gym.jpg",
            title: "Rooftop Gym",
            description: "Stay active with a dedicated fitness space."
        },
        {
            image: "/images/amenities/play-area.jpg",
            title: "Rooftop Play Area",
            description: "A fun and safe space for children."
        },
        {
            image: "/images/amenities/parking.jpg",
            title: "Spacious Parking",
            description: "Convenient parking facility for residents."
        }
    ];

    return ( <
        section id = "amenities"
        className = "amenities-section" >
        <
        div className = "amenities-container" >

        <
        div className = "section-label" >
        LIFESTYLE <
        /div>

        <
        h2 > Premium Amenities < /h2>

        <
        div className = "amenities-grid" > {
            amenities.map((amenity, index) => ( <
                div className = "amenity-card"
                key = { index } >

                <
                img src = { amenity.image }
                alt = { amenity.title }
                className = "amenity-image" /
                >

                <
                div className = "amenity-content" >
                <
                h3 > { amenity.title } < /h3> <
                p > { amenity.description } < /p> <
                /div>

                <
                /div>
            ))
        } <
        /div>

        <
        /div> <
        /section>
    );
}

export default Amenities;