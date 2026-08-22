import "./FloorPlans.css";

function FloorPlans() {
    return ( <
        section className = "floor-plans-section"
        id = "floor-plans" >
        <
        div className = "floor-plans-container" >

        <
        div className = "floor-plans-heading" >
        <
        p className = "floor-plans-subtitle" >
        THANEKAR DNSB <
        /p>

        <
        h2 >
        Thoughtfully Planned <
        br / >
        <
        span > Floor Plans < /span> <
        /h2>

        <
        div className = "floor-plans-line" > < /div>

        <
        p >
        Explore intelligently designed layouts created to provide spacious, comfortable and functional living spaces. <
        /p> <
        /div>

        <
        div className = "floor-plans-grid" >

        { /* 2 BHK */ } <
        div className = "floor-plan-card" >

        <
        div className = "floor-plan-image" >
        <
        div className = "floor-plan-placeholder" >
        <
        span > 2 BHK < /span> <
        strong > FLOOR PLAN < /strong> <
        /div> <
        /div>

        <
        div className = "floor-plan-content" >
        <
        p > RESIDENTIAL < /p>

        <
        h3 > 2 BHK < /h3>

        <
        span >
        Multiple thoughtfully planned configurations <
        /span>

        <
        button type = "button" >
        View Floor Plan <
        span > → < /span> <
        /button> <
        /div>

        <
        /div>


        { /* 3 BHK */ } <
        div className = "floor-plan-card" >

        <
        div className = "floor-plan-image" >
        <
        div className = "floor-plan-placeholder" >
        <
        span > 3 BHK < /span> <
        strong > FLOOR PLAN < /strong> <
        /div> <
        /div>

        <
        div className = "floor-plan-content" >
        <
        p > RESIDENTIAL < /p>

        <
        h3 > 3 BHK < /h3>

        <
        span >
        Spacious layouts designed
        for modern families <
        /span>

        <
        button type = "button" >
        View Floor Plan <
        span > → < /span> <
        /button> <
        /div>

        <
        /div>

        <
        /div>

        <
        /div> <
        /section>
    );
}

export default FloorPlans;