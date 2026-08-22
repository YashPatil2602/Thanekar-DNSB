import "./Gallery.css";

function Gallery() {
    return ( <
        section className = "gallery-section"
        id = "gallery" >
        <
        div className = "gallery-heading" >
        <
        span > < /span> <
        h2 > Gallery < /h2> <
        span > < /span> <
        /div>

        <
        div className = "gallery-image-box" >
        <
        img src = "/images/gallery/exterior-1.webp.png"
        alt = "Thanekar DNSB Gallery" /
        >
        <
        /div> <
        /section>
    );
}

export default Gallery;