< div className = "hero-dots" > {
        images.map((_, index) => ( <
            button key = { index }
            type = "button"
            onClick = {
                () => setCurrentImage(index) }
            className = { currentImage === index ? "active" : "" } >
            < /button>
        ))
    } <
    /div>