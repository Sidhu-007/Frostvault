import React from 'react';
import Button from '../components/Button';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <h1 className="hero-headline">
                    ENGINEERED FOR <span className="text-highlight">–50°C</span>.
                    <br />
                    BUILT FOR <span className="text-gradient">SURVIVAL</span>.
                </h1>

                <p className="hero-subheadline">
                    Antarctica-grade refrigeration for mission-critical operations.
                    <br />
                    Protecting research, vaccines, and food supply where failure is not an option.
                </p>

                <div className="hero-actions">
                    <Button
                        variant="primary"
                        icon={ArrowRight}
                        onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Technology
                    </Button>
                    <Button
                        variant="outline-white"
                        icon={Play}
                        onClick={() => alert("Trailer coming soon!")}
                    >
                        Watch Trailer
                    </Button>
                </div>
            </div>

            <div className="hero-stats">
                <div className="stat-item">
                    <span className="stat-value">-50°C</span>
                    <span className="stat-label">Operational Limit</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-value">24/7</span>
                    <span className="stat-label">Thermal Monitoring</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                    <span className="stat-value">100%</span>
                    <span className="stat-label">Reliability Record</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
