import React from 'react';
import { ShieldAlert, ThermometerSnowflake, Ruler, Globe } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-header">
                    <h2 className="section-title">BUILT FOR THE <span className="text-primary">UNINHABITABLE</span></h2>
                    <p className="section-subtitle">
                        Designed for Antarctic research stations, government missions, and medical camps where standard refrigeration is not an option.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-card glass-panel">
                        <ThermometerSnowflake size={40} className="about-icon" />
                        <h3>Extreme Range</h3>
                        <p>Engineered to operate flawlessly in ambient temperatures from -50°C to +10°C, ensuring internal stability regardless of the blizzard outside.</p>
                    </div>

                    <div className="about-card glass-panel">
                        <ShieldAlert size={40} className="about-icon" />
                        <h3>Zero Failure Tolerance</h3>
                        <p>Redundant cooling systems and military-grade insulation protect vital vaccines, food, and samples when replacement parts are months away.</p>
                    </div>

                    <div className="about-card glass-panel">
                        <Globe size={40} className="about-icon" />
                        <h3>Mission Critical</h3>
                        <p>Trusted by Antarctic survey teams and remote medical outposts. When the nearest city is 2,000 miles away, you choose FROSTVAULT.</p>
                    </div>
                </div>

                <div className="quote-container">
                    <blockquote className="mission-quote">
                        "In extreme environments, reliability is not expensive — <span className="text-alert">failure is</span>."
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default About;
