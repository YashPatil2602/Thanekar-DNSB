import React from "react";

function Hero() {
    return ( <
        section style = {
            {
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f5f5f5",
            }
        } >
        <
        div style = {
            { textAlign: "center" } } >
        <
        h1 > Thanekar DNSB < /h1> <
        p > Hero component is working successfully. < /p> <
        /div> <
        /section>
    );
}

export default Hero;