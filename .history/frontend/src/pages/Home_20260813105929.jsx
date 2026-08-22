import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
    return ( <
        >
        <
        Navbar / >
        <
        Hero / >

        <
        section id = "about"
        className = "temporary-section" >
        <
        span > ABOUT PROJECT < /span> <
        h2 > Thanekar DNSB < /h2> <
        p >
        A thoughtfully designed residential and commercial development in Badlapur. <
        /p> <
        /section>

        <
        section id = "configuration"
        className = "temporary-section dark-section" >
        <
        span > CONFIGURATION < /span> <
        h2 > 2 BHK / 3 BHK / G + 2 Commercial < /h2> <
        /section>

        <
        section id = "amenities"
        className = "temporary-section" >
        <
        span > AMENITIES < /span> <
        h2 > Party Hall• Open Gym• Garden• Gazebo < /h2> <
        /section>

        <
        section id = "floor-plans"
        className = "temporary-section dark-section" >
        <
        span > FLOOR PLANS < /span> <
        h2 > Coming Soon < /h2> <
        /section>

        <
        section id = "gallery"
        className = "temporary-section" >
        <
        span > GALLERY < /span> <
        h2 > Thanekar DNSB Gallery < /h2> <
        /section>

        <
        section id = "location"
        className = "temporary-section dark-section" >
        <
        span > LOCATION < /span> <
        h2 > Gandhi Chowk, Badlapur East < /h2> <
        /section> <
        />
    );
}

export default Home;