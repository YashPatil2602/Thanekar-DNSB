import "./FloorPlans.css";

function FloorPlans() {
    const floorPlans = [{
            title: "1st & 2nd Floor",
            file: "/images/floor-plans/01_1st-2nd-floor-plan.pdf",
        },
        {
            title: "3rd Floor",
            file: "/images/floor-plans/02_3rd-floor-plan.pdf",
        },
        {
            title: "4th Floor",
            file: "/images/floor-plans/03_4th-floor-plan.pdf",
        },
        {
            title: "5th Floor",
            file: "/images/floor-plans/04_5th-floor-plan.pdf",
        },
        {
            title: "6th Floor",
            file: "/images/floor-plans/05_6th-floor-plan.pdf",
        },
        {
            title: "7th Floor",
            file: "/images/floor-plans/06_7th-floor-plan.pdf",
        },
    ];

    return ( <
        section className = "floor-plans-section"
        id = "floor-plans" >
        <
        div className = "floor-plans-container" >

        { /* Heading */ } <
        div className = "floor-plans-heading" >
        <
        p className = "floor-plans-label" >
        FLOOR PLANS <
        /p>

        <
        h2 >
        Thoughtfully Planned <
        br / >
        <
        span > Floor Plans < /span> <
        /h2>

        <
        div className = "floor-gold-line" > < /div>

        <
        p className = "floor-plans-description" >
        Explore the thoughtfully designed floor plans of Thanekar DNSB. <
        /p> <
        /div>

        { /* Floor Plan Cards */ } <
        div className = "floor-plans-grid" > {
            floorPlans.map((plan, index) => ( <
                div className = "floor-plan-card"
                key = { index } >

                { /* PDF Preview */ } <
                div className = "floor-plan-image" >
                <
                object data = { plan.file }
                type = "application/pdf"
                title = { plan.title } >
                <
                a href = { plan.file }
                target = "_blank"
                rel = "noopener noreferrer" >
                Open PDF <
                /a> <
                /object> <
                /div>

                { /* Details */ } <
                div className = "floor-plan-info" >

                <
                p className = "floor-project-name" >
                THANEKAR DNSB <
                /p>

                <
                h3 > { plan.title } <
                /h3>

                <
                div className = "small-gold-line" > < /div>

                { /* View Plan */ } <
                a href = { plan.file }
                target = "_blank"
                rel = "noopener noreferrer"
                className = "view-plan-btn" >
                View Plan→ <
                /a>

                <
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

export default FloorPlans;