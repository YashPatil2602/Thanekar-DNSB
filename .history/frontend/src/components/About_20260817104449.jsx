import "./About.css";

function About() {
    return ( <
        section className = "about-section"
        id = "about" >
        <
        div className = "about-container" >

        <
        div className = "about-content" >

        <
        p className = "about-small-title" >
        ABOUT THANEKAR DNSB <
        /p>

        <
        h2 >
        A New Standard <
        br / >
        <
        span > of Premium Living < /span> <
        /h2>

        <
        div className = "about-line" > < /div>

        <
        p className = "about-text" >
        Thanekar DNSB Tower brings together modern architecture,
        thoughtful design and premium lifestyle experiences in
        the heart of Thane. <
        /p>

        <
        p className = "about-text" >
        Designed
        for those who appreciate comfort, elegance and convenience, every detail has been carefully planned to create a truly refined living experience. <
        /p>

        <
        button className = "about-button" >
        Discover More <
        /button>

        <
        /div>

        <
        div className = "about-image" >
        <
        div className = "about-image-box" >
        <
        span > THANEKAR < /span> <
        strong > DNSB TOWER < /strong> <
        /div> <
        /div>

        <
        /div> <
        /section>
    );
}

export default About;