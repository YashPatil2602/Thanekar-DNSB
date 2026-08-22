function Configuration() {
    const configurations = [{
            type: "2 BHK",
            area: "688 sq.ft.",
            plan: "/floor-plans/2bhk-688.jpg",
        },
        {
            type: "2 BHK",
            area: "716 sq.ft.",
            plan: "/floor-plans/2bhk-716.jpg",
        },
        {
            type: "2 BHK",
            area: "800 sq.ft.",
            plan: "/floor-plans/2bhk-800.jpg",
        },
        {
            type: "3 BHK",
            area: "842 sq.ft.",
            plan: "/floor-plans/3bhk-842.jpg",
        },
        {
            type: "3 BHK",
            area: "1314 sq.ft.",
            plan: "/floor-plans/3bhk-1314.pdf",
        },
    ];

    return ( <
        section id = "configuration"
        className = "configuration-section" >
        <
        div className = "configuration-container" >

        <
        div className = "section-label" >
        CONFIGURATION <
        /div>

        <
        h2 > Choose Your Perfect Home < /h2>

        <
        p className = "configuration-intro" >
        Thoughtfully designed residences with spacious layouts and comfortable living spaces. <
        /p>

        <
        div className = "configuration-grid" >

        {
            configurations.map((item, index) => ( <
                div className = "configuration-card"
                key = { index } >

                <
                div className = "configuration-top" >
                <
                span > { item.type } < /span> <
                span > RESIDENCE < /span> <
                /div>

                <
                h3 > { item.area } < /h3>

                <
                p > Carpet Area < /p>

                <
                a href = { item.plan }
                target = "_blank"
                rel = "noreferrer"
                className = "configuration-button" >
                View Floor Plan <
                /a>

                <
                /div>
            ))
        }

        <
        /div>

        <
        /div> <
        /section>
    );
}

export default Configuration;