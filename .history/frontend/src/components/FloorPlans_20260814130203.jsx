function FloorPlans() {
    const floorPlans = [{
            type: "2 BHK",
            area: "688 Sq. Ft.",
            image: "/floor-plans/2bhk-688.jpg",
        },
        {
            type: "2 BHK",
            area: "716 Sq. Ft.",
            image: "/floor-plans/2bhk-716.jpg",
        },
        {
            type: "2 BHK",
            area: "800 Sq. Ft.",
            image: "/floor-plans/2bhk-800.jpg",
        },
        {
            type: "3 BHK",
            area: "842 Sq. Ft.",
            image: "/floor-plans/3bhk-842.jpg",
        },
    ];

    return ( <
        section id = "floor-plans"
        className = "floor-plans-section" >
        <
        div className = "floor-plans-container" >

        <
        div className = "section-label" >
        FLOOR PLANS <
        /div>

        <
        h2 >
        Designed Around <
        br / >
        Your Lifestyle <
        /h2>

        <
        p className = "floor-plans-intro" >
        Explore thoughtfully planned 2 BHK and 3 BHK residences designed
        for comfortable and modern living. <
        /p>

        <
        div className = "floor-plans-grid" >

        {
            floorPlans.map((plan, index) => ( <
                div className = "floor-plan-card"
                key = { index } >

                <
                div className = "floor-plan-image" >
                <
                img src = { plan.image }
                alt = { `${plan.type} floor plan` }
                /> <
                /div>

                <
                div className = "floor-plan-content" >

                <
                span className = "floor-plan-type" > { plan.type } <
                /span>

                <
                h3 > { plan.area } < /h3>

                <
                a href = { plan.image }
                target = "_blank"
                rel = "noreferrer"
                className = "floor-plan-button" >
                View Floor Plan <
                /a>

                <
                /div>

                <
                /div>
            ))
        }

        <
        /div>

        <
        div className = "floor-plan-pdf" >

        <
        div >
        <
        span className = "pdf-label" >
        DETAILED FLOOR PLAN <
        /span>

        <
        h3 >
        3 BHK– 1314 Sq.Ft. <
        /h3>

        <
        p >
        View the detailed floor plan in PDF format. <
        /p> <
        /div>

        <
        a href = "/floor-plans/3bhk-1314.pdf"
        target = "_blank"
        rel = "noreferrer"
        className = "pdf-button" >
        View PDF <
        /a>

        <
        /div>

        <
        /div> <
        /section>
    );
}

export default FloorPlans;