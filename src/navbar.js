const navbar = (contentDiv) => {
    contentDiv.innerHTML = 
    `
    <nav id = "navbar">
        <h1>
            <span class = "text-primary">Emerald</span>Grill
        </h1>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </nav>
    `
}

export default navbar;