import '../../App.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h4>About us</h4>
                    <a href="#about">About CargoAir</a>
                    <a href="#careers">Careers</a>
                    <a href="#investors">Investor relations</a>
                </div>
                <div className="footer-column">
                    <h4>Privacy</h4>
                    <a href="#privacy">Privacy notice</a>
                    <a href="#cookies">Cookie settings</a>
                </div>
                <div className="footer-column">
                    <h4>Terms &amp; conditions</h4>
                    <a href="#shipment-terms">Shipment</a>
                    <a href="#website-terms">Website terms of use</a>
                    <a href="#surcharge">Fuel surcharge</a>
                </div>
                <div className="footer-column">
                    <h4>Subsidiaries</h4>
                    <a href="#cargo-terminal">Cargo terminal</a>
                    <a href="#airlines">Partner airlines</a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copy">
                    © {new Date().getFullYear()} CargoAir Logistics Ltd. All rights reserved.
                </div>
                <div className="footer-meta">
                    <button className="link-button">English</button>
                    <span className="footer-separator">|</span>
                    <button className="link-button">中文</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
