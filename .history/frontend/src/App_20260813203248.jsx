< header className = "navbar" >
    <
    div className = "navbar-inner" >

    <
    button
className = "brand"
type = "button"
onClick = {
        () => scrollToSection("home") } >
    <
    img
src = "/images/logo/thanekar-dnsb-logo.png"
alt = "Thanekar DNSB Tower" /
    >
    <
    /button>

<
button
type = "button"
className = "menu-toggle"
onClick = {
    () => setMenuOpen(!menuOpen) }
aria - label = "Toggle navigation" >
    ☰
    <
    /button>

<
nav className = { menuOpen ? "nav-links open" : "nav-links" } > < /nav>