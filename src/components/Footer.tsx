import logo from '../assets/footer-logo.svg';

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-grid-container">
                <div className="footer-grid-item">
                    <h4>Abstract</h4>
                    <p><a href="#main">Start Trial</a></p>
                    <p><a href="#main">Pricing</a></p>
                    <p><a href="#main">Download</a></p>
                </div>
                <div className="footer-grid-item">
                    <h4>Resources</h4>
                    <p><a href="#main">Blog</a></p>
                    <p><a href="#main">Help Centers</a></p>
                    <p><a href="#main">Release Notes</a></p>
                    <p><a href="#main">Status</a></p>
                </div>
                <div className="footer-grid-item">
                    <h4>Community</h4>
                    <p><a href="#main">Twitter</a></p>
                    <p><a href="#main">LinkedIn</a></p>
                    <p><a href="#main">Facebook</a></p>
                    <p><a href="#main">Dribble</a></p>
                    <p><a href="#main">Podcast</a></p>
                </div>
                <div className="footer-grid-item">
                    <h4>Company</h4>
                    <p><a href="#main">About Us</a></p>
                    <p><a href="#main">Careers</a></p>
                    <p><a href="#main">Legal</a></p>
                    <h5>Contact Us</h5>
                    <p><a href="#main">info@abstract.com</a></p>
                </div>
            </div>
            <div className="copyright-flex-container">
                <div className="copyright">
                    <img src={logo} alt="abstract-logo" />
                    <p>&copy; Copyright 2023</p>
                    <p>Abstract Studio Design, Inc.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;