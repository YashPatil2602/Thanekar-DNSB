import "./Configuration.css";

function Configuration() {
    return ( <
        section className = "configuration-section"
        id = "configuration" >
        <
        div className = "configuration-container" >

        { /* SECTION HEADING */ } <
        div className = "configuration-heading" >
        <
        p className = "configuration-label" >
        CONFIGURATION <
        /p>

        <
        h2 >
        Designed
        for <
        br / >
        <
        span > Modern Living < /span> <
        /h2>

        <
        div className = "configuration-line" > < /div>

        <
        p className = "configuration-intro" >
        Discover thoughtfully planned residences with spacious layouts, premium features and modern lifestyle comforts. <
        /p> <
        /div>


        { /* CONFIGURATION CARDS */ } <
        div className = "configuration-grid" >

        { /* 2 BHK */ } <
        div className = "configuration-card" >
        <
        div className = "card-number" > 01 < /div>

        <
        h3 > 2 BHK < /h3>

        <
        p className = "card-subtitle" >
        Spacious & Comfortable Homes <
        /p>

        <
        div className = "card-divider" > < /div>

        <
        div className = "area-title" >
        Build - up Area <
        /div>

        <
        div className = "area-list" >
        <
        div >
        <
        strong > 1058 < /strong> <
        span > [688] sq.ft. < /span> <
        /div>

        <
        div >
        <
        strong > 1210 < /strong> <
        span > [716] sq.ft. < /span> <
        /div>

        <
        div >
        <
        strong > 1228 < /strong> <
        span > [800] sq.ft. < /span> <
        /div>

        <
        div >
        <
        strong > 1280 < /strong> <
        span > [842] sq.ft. < /span> <
        /div> <
        /div> <
        /div>


        { /* 3 BHK */ } <
        div className = "configuration-card featured-card" >
        <
        div className = "card-number" > 02 < /div>

        <
        h3 > 3 BHK < /h3>

        <
        p className = "card-subtitle" >
        Premium & Spacious Living <
        /p>

        <
        div className = "card-divider" > < /div>

        <
        div className = "area-title" >
        Build - up Area <
        /div>

        <
        div className = "area-list" >
        <
        div >
        <
        strong > 2022 < /strong> <
        span > [1314] sq.ft. < /span> <
        /div> <
        /div> <
        /div>

        <
        /div>


        { /* FEATURES */ } <
        div className = "configuration-features" >

        <
        div className = "feature-item" >
        <
        span className = "feature-icon" > 01 < /span> <
        div >
        <
        h4 > Premium 2 & 3 BHK < /h4> <
        p > Thoughtfully designed homes < /p> <
        /div> <
        /div>

        <
        div className = "feature-item" >
        <
        span className = "feature-icon" > 02 < /span> <
        div >
        <
        h4 > Rooftop Solar < /h4> <
        p > Smart and sustainable living < /p> <
        /div> <
        /div>

        <
        div className = "feature-item" >
        <
        span className = "feature-icon" > 03 < /span> <
        div >
        <
        h4 > Rooftop Gym & Play Area < /h4> <
        p > Lifestyle spaces
        for everyone < /p> <
        /div> <
        /div>

        <
        div className = "feature-item" >
        <
        span className = "feature-icon" > 04 < /span> <
        div >
        <
        h4 > Spacious Homes < /h4> <
        p > Comfortable layouts
        for modern families < /p> <
        /div> <
        /div>

        <
        /div>

        <
        /div> <
        /section>
    );
}

export default Configuration;