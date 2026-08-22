function Pricing() {
    return ( <
        section id = "pricing"
        className = "pricing-section" >
        <
        div className = "pricing-container" >

        <
        div className = "section-label" >
        PRICING <
        /div>

        <
        h2 > Find Your Perfect Space < /h2>

        <
        div className = "pricing-grid" >

        { /* 2 BHK */ } <
        div className = "price-card" >
        <
        span > 2 BHK < /span> <
        h3 > ₹70 Lakh * < /h3> <
        p > Starting Price < /p> <
        /div>

        { /* 3 BHK */ } <
        div className = "price-card featured" >
        <
        span > 3 BHK < /span> <
        h3 > ₹86 Lakh * < /h3> <
        p > Starting Price < /p> <
        /div>

        { /* Commercial */ } <
        div className = "price-card" >
        <
        span > COMMERCIAL < /span> <
        h3 > ₹60 Lakh * < /h3> <
        p > Starting Price < /p> <
        /div>

        <
        /div>

        { /* Current Offer */ } <
        div className = "offer-box" > 🎁Current Offer: { " " } <
        strong > ₹8 Lakh Discount * < /strong> <
        /div>

        <
        /div> <
        /section>
    );
}

export default Pricing;