import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="overlay"></div>
                <div className="container about-hero-content">
                    <h1>About LuxeEstate</h1>
                    <p>Redefining luxury real estate with a legacy of excellence.</p>
                </div>
            </div>

            <div className="container section">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            Founded over a decade ago, LuxeEstate has established itself as the premier destination for luxury real estate.
                            Our journey began with a simple mission: to connect discerning clients with exceptional properties while providing an unparalleled level of service.
                        </p>
                        <p>
                            We believe that a home is more than just a place to live; it's a reflection of your lifestyle, your achievements, and your dreams.
                            That's why we meticulously curate our portfolio to include only the finest homes, from modern penthouses to sprawling estates.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
