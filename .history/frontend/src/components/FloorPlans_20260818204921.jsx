< section className = "floor-plans-section"
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
            div className = "floor-plan-image-box" >
            <
            img src = { plan.image }
            alt = { plan.title }
            className = "floor-plan-image" /
            >
            <
            /div>

            <
            div className = "floor-plan-content" >

            <
            p className = "floor-plan-project" >
            THANekAR DNSB <
            /p>

            <
            h3 > { plan.title } <
            /h3>

            <
            div className = "gold-line" >
            <
            span > < /span> <
            /div>

            <
            button type = "button"
            className = "view-plan-btn" >
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
/div>

<
/section>