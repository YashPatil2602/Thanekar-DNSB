import "./Configuration.css";

function Configuration() {
    return ( <
        section className = "configuration-section"
        id = "configuration" >

        <
        div className = "configuration-container" >

        { /* Section Heading */ } <
        div className = "configuration-heading" >

        <
        p className = "configuration-label" >
        PROJECT CONFIGURATION <
        /p>

        <
        h2 >
        Designed For <
        span > Modern Living < /span> <
        /h2>

        <
        div className = "configuration-divider" > < /div>

        <
        p className = "configuration-intro" >
        Thoughtfully planned residences and premium commercial spaces designed to offer comfort, convenience and long - term value. <
        /p>

        <
        /div>


        { /* Configuration Cards */ } <
        div className = "configuration-grid" >

        { /* Residential */ } <
        div className = "configuration-card" >

        <
        div className = "configuration-icon" >
        01 <
        /div>

        <
        div className = "configuration-card-content" >

        <
        p > RESIDENTIAL < /p>

        <
        h3 >
        Premium <
        span > Residences < /span> <
        /h3>

        <
        div className = "configuration-line" > < /div>

        <
        p className = "configuration-description" >
        Well - planned homes created with modern architecture,
        quality construction and thoughtful spaces
        for comfortable everyday living. <
        /p>

        <
        /div>

        <
        /div>


        { /* Commercial */ } <
        div className = "configuration-card" >

        <
        div className = "configuration-icon" >
        02 <
        /div>

        <
        div className = "configuration-card-content" >

        <
        p > COMMERCIAL < /p>

        <
        h3 >
        Premium <
        span > Retail Shops < /span> <
        /h3>

        <
        div className = "configuration-line" > < /div>

        <
        p className = "configuration-description" >
        Strategically designed commercial spaces offering an excellent opportunity
        for businesses and smart long - term investment. <
        /p>

        <
        /div>

        <
        /div>


        { /* Lifestyle */ } <
        div className = "configuration-card" >

        <
        div className = "configuration-icon" >
        03 <
        /div>

        <
        div className = "configuration-card-content" >

        <
        p > LIFESTYLE < /p>

        <
        h3 >
        Modern <
        span > Amenities < /span> <
        /h3>

        <
        div className = "configuration-line" > < /div>

        <
        p className = "configuration-description" >
        Lifestyle - focused spaces, landscaped surroundings and thoughtfully planned amenities designed to elevate everyday living. <
        /p>

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /div>

        <
        /section>
    );
}

export default Configuration;