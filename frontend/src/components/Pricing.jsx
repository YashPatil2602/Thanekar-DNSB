import "./Pricing.css";

function Pricing() {
    return ( <
        section className = "pricing-section"
        id = "pricing" >
        <
        div className = "pricing-container" >

        { /* Heading */ } <
        div className = "pricing-heading" >

        <
        p className = "pricing-label" >
        PRICING & OFFERS <
        /p>

        <
        h2 >
        Your Dream Home, <
        br / >
        <
        span > At The Right Value < /span> <
        /h2>

        <
        div className = "pricing-line" > < /div>

        <
        p className = "pricing-intro" >
        Discover premium residences at Thanekar DNSB with attractive pricing and a special limited - time offer. <
        /p>

        <
        /div>


        { /* Pricing Cards */ } <
        div className = "pricing-grid" >

        { /* 2 BHK */ } <
        div className = "pricing-card" >

        <
        p className = "pricing-type" >
        RESIDENTIAL <
        /p>

        <
        h3 >
        2 BHK <
        /h3>

        <
        div className = "price" > ₹70 < span > L * < /span> <
        /div>

        <
        div className = "pricing-divider" > < /div>

        <
        p className = "pricing-description" >
        Spacious and thoughtfully designed 2 BHK homes offering comfort, convenience and modern living. <
        /p>

        <
        a href = "#contact"
        className = "pricing-button" >
        Enquire Now→ <
        /a>

        <
        /div>


        { /* 3 BHK */ } <
        div className = "pricing-card pricing-featured" >

        <
        div className = "offer-badge" >
        SPECIAL OFFER <
        /div>

        <
        p className = "pricing-type" >
        RESIDENTIAL <
        /p>

        <
        h3 >
        3 BHK <
        /h3>

        <
        div className = "price" > ₹86 < span > L * < /span> <
        /div>

        <
        div className = "pricing-divider" > < /div>

        <
        p className = "pricing-description" >
        Premium and spacious 3 BHK residences designed
        for an elevated family lifestyle. <
        /p>

        <
        a href = "#contact"
        className = "pricing-button" >
        Enquire Now→ <
        /a>

        <
        /div>

        <
        /div>


        { /* Offer */ } <
        div className = "pricing-offer" >

        <
        div className = "offer-content" >

        <
        p >
        LIMITED TIME OFFER <
        /p>

        <
        h3 >
        Get up to < span > ₹8 Lakh Discount * < /span> <
        /h3>

        <
        small >
        *
        Terms & conditions apply. <
        /small>

        <
        /div>

        <
        a href = "#contact"
        className = "offer-button" >
        Know More→ <
        /a>

        <
        /div>

        <
        /div> <
        /section>
    );
}

export default Pricing;