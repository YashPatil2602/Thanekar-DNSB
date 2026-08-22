import "./Pricing.css";

function Pricing() {
    return ( <
        section className = "pricing-section"
        id = "pricing" >
        <
        div className = "pricing-container" >

        <
        div className = "pricing-heading" >
        <
        p className = "pricing-subtitle" >
        THANEKAR DNSB <
        /p>

        <
        h2 >
        Premium Living, <
        br / >
        <
        span > Exceptional Value < /span> <
        /h2>

        <
        div className = "pricing-line" > < /div>

        <
        p >
        Discover thoughtfully designed residences at attractive prices with a limited - time special offer. <
        /p> <
        /div>

        <
        div className = "offer-banner" >
        <
        span > LIMITED PERIOD OFFER < /span> <
        strong > ₹8 Lakh Discount * < /strong> <
        small > Terms & Conditions Apply < /small> <
        /div>

        <
        div className = "pricing-grid" >

        { /* 2 BHK */ } <
        div className = "pricing-card" >
        <
        div className = "pricing-card-top" >
        <
        span > RESIDENTIAL < /span> <
        span > 01 < /span> <
        /div>

        <
        h3 > 2 BHK < /h3>

        <
        div className = "pricing-card-line" > < /div>

        <
        p > Premium 2 BHK residences < /p>

        <
        div className = "price" >
        <
        small > Starting From < /small> <
        strong > ₹70 Lakh * < /strong> <
        /div>

        <
        button type = "button"
        onClick = {
            () =>
            window.location.href = "#contact"
        } >
        Enquire Now <
        span > → < /span> <
        /button> <
        /div>

        { /* 3 BHK */ } <
        div className = "pricing-card featured" >
        <
        div className = "pricing-card-top" >
        <
        span > RESIDENTIAL < /span> <
        span > 02 < /span> <
        /div>

        <
        h3 > 3 BHK < /h3>

        <
        div className = "pricing-card-line" > < /div>

        <
        p > Spacious premium 3 BHK residences < /p>

        <
        div className = "price" >
        <
        small > Starting From < /small> <
        strong > ₹86 Lakh * < /strong> <
        /div>

        <
        button type = "button"
        onClick = {
            () =>
            window.location.href = "#contact"
        } >
        Enquire Now <
        span > → < /span> <
        /button> <
        /div>

        <
        /div>

        <
        /div> <
        /section>
    );
}

export default Pricing;