import '../../App.css';

function Header({ onNavigate }) {
    const handleShippingClick = (event) => {
        event.preventDefault();
        if (onNavigate) {
            onNavigate('check-flight-status');
        }
    };

    return (
        <header className="top-nav">
            <div className="brand">Cargo</div>
            <nav className="nav-links">
                <a href="#shipping" onClick={handleShippingClick}>
                    Shipping with us
                </a>
                <a href="#solutions">Our solutions</a>
                <a href="#support">Help &amp; support</a>
                <a href="#about">About Cargo</a>
            </nav>
            <button className="nav-cta">Sign in / Register</button>
        </header>
    );
}

export default Header;
