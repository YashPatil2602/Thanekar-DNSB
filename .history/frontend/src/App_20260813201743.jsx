import { useEffect, useState } from "react";
import "./App.css";

const heroImages = [
    `/images/hero/dnsb-hero-1.png`,
    "/images/gallery/dnsb-building-2.png",
    "/images/gallery/dnsb-building-3.png",
];

const galleryImages = [{
        src: "/images/hero/dnsb-hero-1.png",
        title: "Thanekar DNSB Tower",
    },
    {
        src: "/images/gallery/dnsb-building-2.png",
        title: "Project Exterior",
    },
    {
        src: "/images/gallery/dnsb-building-3.png",
        title: "Tower Elevation",
    },
    {
        src: "/images/gallery/dnsb-building-4.png",
        title: "Project View",
    },
    {
        src: "/images/interiors/dnsb-lobby.png",
        title: "Luxury Lobby",
    },
    {
        src: "/images/interiors/dnsb-reception.png",
        title: "Project Reception",
    },
];

const floorPlans = [{
        title: "1st & 2nd Floor Plan",
        file: "/images/floor-plans/01_1st-2nd-floor-plan.pdf",
        description: "Commercial shop layout and floor plan",
    },
    {
        title: "3rd Floor Plan",
        file: "/images/floor-plans/02_3rd-floor-plan.pdf",
        description: "Detailed 3rd floor plan",
    },
    {
        title: "4th Floor Plan",
        file: "/images/floor-plans/03_4th-floor-plan.pdf",
        description: "Detailed 4th floor plan",
    },
    {
        title: "5th Floor Plan",
        file: "/images/floor-plans/04_5th-floor-plan.pdf",
        description: "Detailed 5th floor plan",
    },
    {
        title: "6th Floor Plan",
        file: "/images/floor-plans/05_6th-floor-plan.pdf",
        description: "Detailed 6th floor plan",
    },
    {
        title: "7th Floor Plan",
        file: "/images/floor-plans/06_7th-floor-plan.pdf",
        description: "Detailed 7th floor plan",
    },
];

const residentialAreas = [
    { builtUp: "1058", carpet: "688" },
    { builtUp: "1210", carpet: "716" },
    { builtUp: "1228", carpet: "800" },
    { builtUp: "1280", carpet: "842" },
    { builtUp: "2022", carpet: "1314" },
];

const amenities = [{
        icon: "🎉",
        title: "Party Hall",
        description: "A dedicated space to celebrate special moments with family and friends.",
    },
    {
        icon: "🏋️",
        title: "Open Gym",
        description: "An open fitness space designed to support an active lifestyle.",
    },
    {
        icon: "🌳",
        title: "Garden",
        description: "Landscaped green spaces designed for relaxation and everyday leisure.",
    },
    {
        icon: "🏡",
        title: "Gazebo",
        description: "A peaceful outdoor space for conversations, relaxation and family time.",
    },
];

function App() {
    const [currentHero, setCurrentHero] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showEnquiry, setShowEnquiry] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHero((prev) =>
                prev === heroImages.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id) ? .scrollIntoView({
            behavior: "smooth",
        });

        setMenuOpen(false);
    };

    return ( <
        div className = "site" >

        { /* ================= NAVBAR ================= */ } <
        header className = "navbar" >
        <
        div className = "navbar-inner" >

        <
        button className = "brand"
        onClick = {
            () => scrollToSection("home") } >
        <
        img src = "/images/logo/thanekar-dnsb-logo.png"
        alt = "Thanekar DNSB Tower" /
        >
        <
        /button>

        <
        button className = "menu-toggle"
        onClick = {
            () => setMenuOpen(!menuOpen) }
        aria - label = "Open menu" >
        ☰
        <
        /button>

        <
        nav className = { menuOpen ? "nav-links open" : "nav-links" } >
        <
        button onClick = {
            () => scrollToSection("home") } >
        Home <
        /button>

        <
        button onClick = {
            () => scrollToSection("about") } >
        About <
        /button>

        <
        button onClick = {
            () => scrollToSection("configuration") } >
        Configuration <
        /button>

        <
        button onClick = {
            () => scrollToSection("pricing") } >
        Pricing <
        /button>

        <
        button onClick = {
            () => scrollToSection("amenities") } >
        Amenities <
        /button>

        <
        button onClick = {
            () => scrollToSection("floor-plans") } >
        Floor Plans <
        /button>

        <
        button onClick = {
            () => scrollToSection("gallery") } >
        Gallery <
        /button>

        <
        button onClick = {
            () => scrollToSection("location") } >
        Location <
        /button>

        <
        a href = "tel:8390662002"
        className = "nav-call"
        onClick = {
            () => setMenuOpen(false) } >
        Call Now <
        /a> <
        /nav> <
        /div> <
        /header>

        { /* ================= HERO ================= */ } <
        section id = "home"
        className = "hero" >

        {
            heroImages.map((image, index) => ( <
                div key = { image }
                className = {
                    index === currentHero ?
                    "hero-image active" :
                        "hero-image"
                }
                style = {
                    {
                        backgroundImage: `url("${image}")`,
                    }
                }
                />
            ))
        }

        <
        div className = "hero-overlay" > < /div>

        <
        div className = "hero-content" >

        <
        span className = "eyebrow" >
        PREMIUM RESIDENTIAL & COMMERCIAL DEVELOPMENT <
        /span>

        <
        h1 >
        Thanekar <
        strong > DNSB Tower < /strong> <
        /h1>

        <
        div className = "hero-line" > < /div>

        <
        p className = "hero-location" >
        Gandhi Chowk, Badlapur East <
        /p>

        <
        p className = "hero-copy" >
        Modern homes, premium retail spaces and a well - connected lifestyle destination designed
        for comfortable living and smart investment. <
        /p>

        <
        div className = "hero-actions" >

        <
        a href = "tel:8390662002"
        className = "btn btn-gold" >
        📞Call Now <
        /a>

        <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noreferrer"
        className = "btn btn-green" >
        💬WhatsApp <
        /a>

        <
        button className = "btn btn-outline"
        onClick = {
            () => setShowEnquiry(true) } >
        Enquire Now <
        /button>

        <
        /div> <
        /div>

        <
        div className = "hero-dots" > {
            heroImages.map((_, index) => ( <
                button key = { index }
                className = {
                    currentHero === index ?
                    "hero-dot active" :
                        "hero-dot"
                }
                onClick = {
                    () => setCurrentHero(index) }
                aria - label = { `Go to image ${index + 1}` }
                />
            ))
        } <
        /div>

        <
        div className = "hero-stats" >

        <
        div >
        <
        strong > 2 & 3 BHK < /strong> <
        span > Premium Residences < /span> <
        /div>

        <
        div >
        <
        strong > G + 2 < /strong> <
        span > Commercial Shops < /span> <
        /div>

        <
        div >
        <
        strong > ₹70 Lakh * < /strong> <
        span > 2 BHK Starting Price < /span> <
        /div>

        <
        div >
        <
        strong > ₹8 Lakh * < /strong> <
        span > Special Discount < /span> <
        /div>

        <
        /div> <
        /section>

        { /* ================= ABOUT PROJECT ================= */ } <
        section id = "about"
        className = "section about-section" >

        <
        div className = "section-heading" >
        <
        span > ABOUT THE PROJECT < /span> <
        h2 > Thanekar DNSB < /h2> <
        p >
        Designed
        for better living, business and long - term value. <
        /p> <
        /div>

        <
        div className = "about-grid" >

        <
        div className = "about-image" >
        <
        img src = "/images/gallery/dnsb-building-4.png"
        alt = "Thanekar DNSB Tower" /
        >
        <
        /div>

        <
        div className = "about-text" >

        <
        h3 >
        A thoughtfully designed residential and commercial development in Badlapur. <
        /h3>

        <
        p >
        Thanekar DNSB is a thoughtfully designed residential and commercial development in
        Badlapur, offering modern homes and premium retail shops in a well - connected location. <
        /p>

        <
        p >
        The project features well - planned residences,
        quality construction, lifestyle amenities,
        landscaped open spaces, and commercial spaces designed
        for business growth. <
        /p>

        <
        p >
        With easy access to schools, hospitals,
        railway stations, and everyday conveniences,
        Thanekar DNSB provides an ideal destination
        for comfortable living and smart investment. <
        /p>

        <
        p >
        Whether you 're looking for your dream home
        or a commercial shop
        for your business,
        Thanekar DNSB offers the perfect blend of convenience, connectivity, and long - term value. <
        /p>

        <
        button className = "dark-btn"
        onClick = {
            () => setShowEnquiry(true) } >
        Get Project Details <
        /button>

        <
        /div> <
        /div> <
        /section>

        { /* ================= HIGHLIGHTS ================= */ } <
        section className = "highlights" >

        <
        div >
        <
        span > 01 < /span> <
        strong > Prime Location < /strong> <
        p > Gandhi Chowk, Badlapur East < /p> <
        /div>

        <
        div >
        <
        span > 02 < /span> <
        strong > 2 & 3 BHK Homes < /strong> <
        p > Thoughtfully planned residential spaces < /p> <
        /div>

        <
        div >
        <
        span > 03 < /span> <
        strong > G + 2 Commercial < /strong> <
        p > Premium retail spaces
        for businesses < /p> <
        /div>

        <
        div >
        <
        span > 04 < /span> <
        strong > Lifestyle Amenities < /strong> <
        p > Party hall, gym, garden and gazebo < /p> <
        /div>

        <
        /section>

        { /* ================= CONFIGURATION ================= */ } <
        section id = "configuration"
        className = "section dark-section" >

        <
        div className = "section-heading light" >
        <
        span > CONFIGURATION < /span> <
        h2 > Homes & Commercial Spaces < /h2> <
        p >
        Choose the configuration that matches your lifestyle or business needs. <
        /p> <
        /div>

        <
        div className = "configuration-grid" >

        { /* Residential */ } <
        article className = "configuration-card" >

        <
        div className = "card-number" > 01 < /div>

        <
        span className = "card-label" >
        RESIDENTIAL <
        /span>

        <
        h3 > 2 BHK / 3 BHK < /h3>

        <
        p >
        Spacious residential options planned
        for comfortable modern living. <
        /p>

        <
        div className = "area-table" >

        <
        div className = "area-head" >
        <
        span > Build Up < /span> <
        span > Carpet Area < /span> <
        /div>

        {
            residentialAreas.map((item) => ( <
                div key = { `${item.builtUp}-${item.carpet}` } >
                <
                strong > { item.builtUp }
                sq.ft. < /strong> <
                span > { item.carpet }
                sq.ft. < /span> <
                /div>
            ))
        }

        <
        /div>

        <
        div className = "starting-price" >
        <
        span > Starting Price < /span> <
        strong > ₹70 Lakh * < /strong> <
        /div> <
        /article>

        { /* Commercial */ } <
        article className = "configuration-card" >

        <
        div className = "card-number" > 02 < /div>

        <
        span className = "card-label" >
        COMMERCIAL <
        /span>

        <
        h3 > G + 2 Shops < /h3>

        <
        p >
        Premium retail shops designed
        for visibility,
        accessibility and business growth. <
        /p>

        <
        div className = "commercial-highlight" >

        <
        div >
        <
        span > Starting Carpet Area < /span> <
        strong > 262 sq.ft. < /strong> <
        /div>

        <
        div >
        <
        span > Ending Carpet Area < /span> <
        strong > 1011 sq.ft. < /strong> <
        /div>

        <
        /div>

        <
        div className = "commercial-prices" >

        <
        div >
        <
        span > Starting Price < /span> <
        strong > ₹60 Lakh * < /strong> <
        /div>

        <
        div >
        <
        span > Maximum Price < /span> <
        strong > ₹4 Crore * < /strong> <
        /div>

        <
        /div>

        <
        /article> <
        /div> <
        /section>

        { /* ================= PRICING ================= */ } <
        section id = "pricing"
        className = "section pricing-section" >

        <
        div className = "section-heading" >
        <
        span > PRICING < /span> <
        h2 > Investment Options < /h2> <
        p >
        Indicative pricing
        for residential and commercial spaces. <
        /p> <
        /div>

        <
        div className = "pricing-grid" >

        <
        div className = "price-card" >
        <
        span > RESIDENTIAL < /span> <
        h3 > 2 BHK < /h3> <
        strong > ₹70 Lakh * < /strong> <
        p >
        Premium 2 BHK homes designed
        for practical,
        comfortable family living. <
        /p>

        <
        button onClick = {
            () => setShowEnquiry(true) } >
        Enquire
        for 2 BHK <
        /button> <
        /div>

        <
        div className = "price-card featured" >

        <
        div className = "popular" >
        POPULAR <
        /div>

        <
        span > RESIDENTIAL < /span> <
        h3 > 3 BHK < /h3> <
        strong > ₹86 Lakh * < /strong> <
        p >
        Spacious 3 BHK homes planned
        for enhanced comfort and family living. <
        /p>

        <
        button onClick = {
            () => setShowEnquiry(true) } >
        Enquire
        for 3 BHK <
        /button> <
        /div>

        <
        div className = "price-card" >
        <
        span > COMMERCIAL < /span> <
        h3 > G + 2 SHOPS < /h3> <
        strong > ₹60 Lakh * < /strong> <
        p >
        Commercial spaces starting from 262 sq.ft.carpet area. <
        /p>

        <
        button onClick = {
            () => setShowEnquiry(true) } >
        Enquire
        for Shop <
        /button> <
        /div>

        <
        /div>

        <
        p className = "pricing-note" >
        *
        Prices are indicative and subject to availability and applicable charges.Please contact the sales team
        for current pricing. <
        /p>

        <
        /section>

        { /* ================= OFFER ================= */ } <
        section className = "offer-section" >

        <
        div className = "offer-inner" >

        <
        div >
        <
        span > LIMITED PERIOD OFFER < /span>

        <
        h2 >
        Get < strong > ₹8 Lakh * < /strong> Discount <
        /h2>

        <
        p >
        Take the next step towards your dream home or commercial investment. <
        /p> <
        /div>

        <
        button className = "offer-btn"
        onClick = {
            () => setShowEnquiry(true) } >
        Claim Offer <
        /button>

        <
        /div> <
        /section>

        { /* ================= AMENITIES ================= */ } <
        section id = "amenities"
        className = "section amenities-section" >

        <
        div className = "section-heading" >
        <
        span > LIFESTYLE < /span> <
        h2 > Project Amenities < /h2> <
        p >
        Spaces designed
        for relaxation, health and social moments. <
        /p> <
        /div>

        <
        div className = "amenities-grid" >

        {
            amenities.map((amenity) => ( <
                article key = { amenity.title }
                className = "amenity-card" >
                <
                div className = "amenity-icon" > { amenity.icon } <
                /div>

                <
                h3 > { amenity.title } < /h3>

                <
                p > { amenity.description } < /p> <
                /article>
            ))
        }

        <
        /div> <
        /section>

        { /* ================= FLOOR PLANS ================= */ } <
        section id = "floor-plans"
        className = "section floor-section" >

        <
        div className = "section-heading" >
        <
        span > PLAN YOUR SPACE < /span> <
        h2 > Floor Plans < /h2> <
        p >
        View the available floor - plan PDFs
        for the project. <
        /p> <
        /div>

        <
        div className = "floor-grid" >

        {
            floorPlans.map((plan) => ( <
                article key = { plan.file }
                className = "floor-card" >
                <
                div className = "floor-icon" >
                PDF <
                /div>

                <
                div className = "floor-content" >

                <
                span > THANEKAR DNSB TOWER < /span>

                <
                h3 > { plan.title } < /h3>

                <
                p > { plan.description } < /p>

                <
                a href = { plan.file }
                target = "_blank"
                rel = "noreferrer"
                className = "floor-btn" >
                View Floor Plan→ <
                /a>

                <
                /div> <
                /article>
            ))
        }

        <
        /div> <
        /section>

        { /* ================= GALLERY ================= */ } <
        section id = "gallery"
        className = "section gallery-section" >

        <
        div className = "section-heading light" >
        <
        span > PROJECT GALLERY < /span> <
        h2 > Explore Thanekar DNSB < /h2> <
        p >
        Exterior views and premium interior spaces. <
        /p> <
        /div>

        <
        div className = "gallery-grid" >

        {
            galleryImages.map((image) => ( <
                article key = { image.src }
                className = "gallery-card" >
                <
                img src = { image.src }
                alt = { image.title }
                />

                <
                div className = "gallery-overlay" >
                <
                span > { image.title } < /span> <
                /div> <
                /article>
            ))
        }

        <
        /div> <
        /section>

        { /* ================= DEVELOPER ================= */ } <
        section className = "section developer-section" >

        <
        div className = "developer-grid" >

        <
        div className = "developer-image" >
        <
        img src = "/images/interiors/dnsb-lobby.png"
        alt = "Thanekar Group" /
        >
        <
        /div>

        <
        div className = "developer-text" >

        <
        span className = "section-label" >
        ABOUT THE DEVELOPER <
        /span>

        <
        h2 > Thanekar Group < /h2>

        <
        div className = "small-line" > < /div>

        <
        p >
        Thanekar Group is a real estate company started by Mr.Ajay Madhukar Thanekar in 1991. <
        /p>

        <
        p >
        In 1991, establishing a real estate company was difficult and inconceivable, especially
        for a novice, but the zest and dynamism of Mr.Ajay Thanekar and his trusted Allies launched Thanekar Group. <
        /p>

        <
        p >
        Thanekar Group is one of India 's pioneering and
        most trusted real estate developers, having successfully delivered more than 57 projects to date. <
        /p>

        <
        p >
        We have consistently ensured that our customers '
        expectations are not only met but exceeded,
        through quality, innovation and transparency. <
        /p>

        <
        p >
        Driven by a passion
        for excellence, our journey began with the vision and dedication of our founder, Mr.Ajay Thanekar, who set out to offer high - quality, luxurious homes at truly affordable prices. <
        /p>

        <
        p >
        His exceptional contribution to the construction industry has led to him being elected as the President of the Badlapur– Ambernath Builders Association and appointed as a RERA Conciliator by MahaRERA. <
        /p>

        <
        p >
        At Thanekar Group, our mission goes beyond building homes— we are committed to enriching lives and building stronger communities. <
        /p>

        <
        p >
        Along with developing premium residences,
        Mr.Ajay Thanekar is deeply passionate about nurturing young minds by empowering children with confidence, opportunities and a brighter future. <
        /p>

        <
        p >
        With Thanekar Group, it’ s time to take a step toward the lifestyle you have always dreamed of. <
        /p>

        <
        /div> <
        /div> <
        /section>

        { /* ================= LOCATION ================= */ } <
        section id = "location"
        className = "section location-section" >

        <
        div className = "section-heading" >
        <
        span > LOCATION < /span> <
        h2 > Connected to Everything That Matters < /h2> <
        p >
        Gandhi Chowk, Badlapur East <
        /p> <
        /div>

        <
        div className = "location-grid" >

        <
        div className = "location-info" >

        <
        div className = "location-item" >
        <
        span > ADDRESS < /span> <
        strong >
        Gandhi Chowk, Badlapur East <
        /strong> <
        /div>

        <
        div className = "location-item" >
        <
        span > CALLING NUMBER < /span> <
        a href = "tel:8390662002" >
        8390662002 <
        /a> <
        /div>

        <
        div className = "location-item" >
        <
        span > WHATSAPP NUMBER < /span> <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noreferrer" >
        8390662002 <
        /a> <
        /div>

        <
        div className = "location-item" >
        <
        span > EMAIL ID < /span> <
        a href = "mailto:groupthanekar@gmail.com" >
        groupthanekar @gmail.com <
        /a> <
        /div>

        <
        div className = "location-item" >
        <
        span > RERA NUMBER < /span> <
        strong >
        To be updated <
        /strong> <
        /div>

        <
        a href = "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac"
        target = "_blank"
        rel = "noreferrer"
        className = "map-btn" >
        Open Google Maps→ <
        /a>

        <
        /div>

        <
        div className = "map-container" >
        <
        iframe title = "Thanekar DNSB Location"
        src = "https://www.google.com/maps?q=Gandhi%20Chowk%2C%20Badlapur%20East&output=embed"
        loading = "lazy"
        allowFullScreen >
        < /iframe> <
        /div>

        <
        /div> <
        /section>

        { /* ================= SOCIAL ================= */ } <
        section className = "social-section" >

        <
        div >
        <
        span > FOLLOW THE PROJECT < /span>

        <
        h2 > Stay Connected With Thanekar Group < /h2>

        <
        a href = "https://www.instagram.com/thanekar_group?igsh=ZTNpa3N3YnB0eWVn"
        target = "_blank"
        rel = "noreferrer"
        className = "instagram-btn" >
        Instagram @thanekar_group <
        /a> <
        /div>

        <
        /section>

        { /* ================= CONTACT ================= */ } <
        section className = "contact-section" >

        <
        div className = "contact-inner" >

        <
        div >
        <
        span > READY TO TAKE THE NEXT STEP ? < /span>

        <
        h2 >
        Find Your Home or <
        br / >
        Commercial Space <
        /h2>

        <
        p >
        Get pricing, floor plans and project details from our team. <
        /p> <
        /div>

        <
        div className = "contact-actions" >

        <
        a href = "tel:8390662002"
        className = "contact-btn" >
        📞Call <
        /a>

        <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noreferrer"
        className = "contact-btn whatsapp" >
        💬WhatsApp <
        /a>

        <
        a href = "mailto:groupthanekar@gmail.com"
        className = "contact-btn" >
        ✉Email <
        /a>

        <
        button className = "contact-btn"
        onClick = {
            () => setShowEnquiry(true) } >
        Enquire Now <
        /button>

        <
        /div>

        <
        /div> <
        /section>

        { /* ================= FOOTER ================= */ } <
        footer className = "footer" >

        <
        div className = "footer-grid" >

        <
        div className = "footer-brand" >

        <
        img src = "/images/logo/thanekar-dnsb-logo.png"
        alt = "Thanekar DNSB" /
        >

        <
        p >
        Thanekar DNSB— premium residential and commercial development at Gandhi Chowk,
        Badlapur East. <
        /p>

        <
        /div>

        <
        div >
        <
        h3 > Project < /h3>

        <
        button onClick = {
            () => scrollToSection("about") } >
        About <
        /button>

        <
        button onClick = {
            () => scrollToSection("configuration") } >
        Configuration <
        /button>

        <
        button onClick = {
            () => scrollToSection("pricing") } >
        Pricing <
        /button>

        <
        button onClick = {
            () => scrollToSection("amenities") } >
        Amenities <
        /button>

        <
        /div>

        <
        div >
        <
        h3 > Floor Plans < /h3>

        {
            floorPlans.slice(0, 4).map((plan) => ( <
                a key = { plan.file }
                href = { plan.file }
                target = "_blank"
                rel = "noreferrer" >
                { plan.title } <
                /a>
            ))
        } <
        /div>

        <
        div >
        <
        h3 > Contact < /h3>

        <
        a href = "tel:8390662002" >
        8390662002 <
        /a>

        <
        a href = "mailto:groupthanekar@gmail.com" >
        groupthanekar @gmail.com <
        /a>

        <
        a href = "https://www.instagram.com/thanekar_group?igsh=ZTNpa3N3YnB0eWVn"
        target = "_blank"
        rel = "noreferrer" >
        Instagram <
        /a>

        <
        a href = "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac"
        target = "_blank"
        rel = "noreferrer" >
        Google Maps <
        /a>

        <
        /div> <
        /div>

        <
        div className = "footer-bottom" >

        <
        span > ©2026 Thanekar DNSB Tower.All Rights Reserved. <
        /span>

        <
        span >
        RERA No. : To be updated <
        /span>

        <
        /div>

        <
        /footer>

        { /* ================= ENQUIRY MODAL ================= */ } {
            showEnquiry && ( <
                div className = "modal-backdrop"
                onClick = {
                    () => setShowEnquiry(false) } >
                <
                div className = "enquiry-modal"
                onClick = {
                    (e) => e.stopPropagation() } >

                <
                button className = "modal-close"
                onClick = {
                    () => setShowEnquiry(false) } >
                ×
                <
                /button>

                <
                span > THANEKAR DNSB < /span>

                <
                h2 > Request Project Details < /h2>

                <
                p >
                Share your details and our team can contact you. <
                /p>

                <
                form onSubmit = {
                    (e) => {
                        e.preventDefault();

                        alert(
                            "Thank you. Our team will contact you shortly."
                        );

                        setShowEnquiry(false);
                    }
                } >
                <
                input type = "text"
                placeholder = "Your Name"
                required /
                >

                <
                input type = "tel"
                placeholder = "Mobile Number"
                required /
                >

                <
                input type = "email"
                placeholder = "Email Address" /
                >

                <
                select defaultValue = "" >
                <
                option value = ""
                disabled >
                Interested In <
                /option>

                <
                option value = "2bhk" >
                2 BHK <
                /option>

                <
                option value = "3bhk" >
                3 BHK <
                /option>

                <
                option value = "commercial" >
                Commercial Shop <
                /option> <
                /select>

                <
                button type = "submit"
                className = "modal-submit" >
                Submit Enquiry <
                /button> <
                /form>

                <
                /div> <
                /div>
            )
        }

        <
        /div>
    );
}

export default App;