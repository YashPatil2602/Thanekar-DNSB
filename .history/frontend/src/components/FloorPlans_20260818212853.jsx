import "./FloorPlans.css";

const floorPlans = [{
        title: "1st & 2nd Floor",
        image: "/images/floorplans/1st-2nd-floor.png",
    },
    {
        title: "3rd Floor",
        image: "/images/floorplans/3rd-floor.png",
    },
    {
        title: "4th Floor",
        image: "/images/floorplans/4th-floor.png",
    },
    {
        title: "5th Floor",
        image: "/images/floorplans/5th-floor.png",
    },
];

function FloorPlans() {
    return ( <
        section className = "floor-plans-section"
        id = "floor-plans" >
        <
        div className = "floor-plans-container" >

        <
        h2 className = "floor-plans-title" >
        Floor Plans <
        /h2>

        <
        p className = "floor-plans-subtitle" >
        Explore the thoughtfully designed floor plans of Thanekar DNSB. <
        /p>

        <
        div className = "floor-plans-grid" >

        {
            floorPlans.map((plan, index) => ( <
                div className = "floor-plan-card"
                key = { index } >

                <
                div className = "floor-plan-image-container" >
                <
                img src = { plan.image }
                alt = { plan.title }
                className = "floor-plan-image" /
                >
                <
                /div>

                <
                div className = "floor-plan-details" >

                <
                p className = "floor-plan-project" >
                THANekAR DNSB <
                /p>

                <
                h3 className = "floor-plan-title" > { plan.title } <
                /h3>

                <
                div className = "gold-divider" >
                <
                span > < /span> <
                /div>

                <
                button className = "view-plan-btn"
                type = "button" >
                View Plan→ <
                /button>

                <
                /div>

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

export default FloorPlans;