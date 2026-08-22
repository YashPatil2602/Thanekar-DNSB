< header className = "navbar" >
    <
    div className = "navbar-inner" >

    <
    button
type = "button"
className = "brand"
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
title = "Toggle navigation" >
    ☰
    <
    /button>

<
nav className = { menuOpen ? "nav-links open" : "nav-links" } >

    <
    button
type = "button"
className = "menu-toggle"
onClick = {
    () => setMenuOpen(!menuOpen) }
title = "Toggle navigation" >
    ☰
    <
    /button>

<
button
type = "button"
onClick = {
        () => scrollToSection("about") } >
    About <
    /button>

<
button
type = "button"
onClick = {
        () => scrollToSection("configuration") } >
    Configuration <
    /button>

<
button
type = "button"
onClick = {
        () => scrollToSection("pricing") } >
    Pricing <
    /button>

<
button
type = "button"
onClick = {
        () => scrollToSection("amenities") } >
    Amenities <
    /button>

<
button
type = "button"
onClick = {
        () => scrollToSection("floor-plans") } >
    Floor Plans <
    /button>

<
button
type = "button"
onClick = {
        () => scrollToSection("gallery") } >
    Gallery <
    /button>

<
button
type = "button"
onClick = {
        () => scrollToSection("location") } >
    Location <
    /button>

<
a
href = "tel:8390662002"
className = "nav-call"
onClick = {
        () => setMenuOpen(false) } >
    Call Now <
    /a>

<
/nav>

<
/div> <
/header>