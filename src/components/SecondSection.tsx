import image1 from '../assets/image-1.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';
import image4 from '../assets/image-4.png';
import image5 from '../assets/image-5.png';
import image6 from '../assets/image-6.png';

const SecondSection = () => {
    return ( 
        <section className="section-2">
            <div className="grid">
                <div className="grid-item">
                    <div className="list-icon">
                        <img src={image1} alt='using abstract'/>
                    </div>
                    <div className="list-block">
                        <h4>Using Abstract</h4>
                        <p>Abstract let's you manage, version, and document your designs in one place.</p>
                        <a href="https://www.Sackah.github.io/abstract-about/page" className="category-list-link">Learn More →</a>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="list-icon">
                        <img src={image2} alt="manage your account" />
                    </div>
                    <div className="list-block">
                        <h4>Manage your account</h4>
                        <p>Configure your account settings, such as your email, profile details, and password.</p>
                        <a href="https://www.Sackah.github.io/abstract-about/page" className="category-list-link">Learn More →</a>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="list-icon">
                        <img src={image3} alt="manage organizations" />
                    </div>
                    <div className="list-block">
                        <h4>Manage organizations, teams and projects</h4>
                        <p>Use Abstract organizations, teams and projects to organize your people and your work.</p>
                        <a href="https://www.Sackah.github.io/abstract-about/page" className="category-list-link">Learn More →</a>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="list-icon">
                        <img src={image4} alt="manage billing" />
                    </div>
                    <div className="list-block">
                        <h4>Manage billing</h4>
                        <p>Change subscriptions and payment details.</p>
                        <a href="https://www.Sackah.github.io/abstract-about/page" className="category-list-link">Learn More →</a>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="list-icon">
                        <img src={image5} alt="authenticate to abstract" />
                    </div>
                    <div className="list-block">
                        <h4>Authenticate to Abstract</h4>
                        <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
                        <a href="https://www.Sackah.github.io/abstract-about/page" className="category-list-link">Learn More →</a>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="list-icon">
                        <img src={image6} alt="abstract support" />
                    </div>
                    <div className="list-block">
                        <h4>Abstract support</h4>
                        <p>Get in touch with a human.</p>
                        <a href="https://www.Sackah.github.io/abstract-about/page" className="category-list-link">Learn More →</a>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SecondSection;