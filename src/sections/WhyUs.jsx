import React from 'react';
import { X, Check } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <section id="why-us" className="why-us-section">
            <div className="container">
                <h2 className="section-title text-center">THE <span className="text-primary">Difference</span></h2>

                <div className="comparison-table text-secondary">
                    <div className="comparison-header">
                        <div className="col-empty"></div>
                        <div className="col-standard">Standard Industrial Fridge</div>
                        <div className="col-frostvault">FROSTVAULT</div>
                    </div>

                    <div className="comparison-row">
                        <div className="row-label">Min Operating Temp</div>
                        <div className="row-standard text-muted">+10°C</div>
                        <div className="row-frostvault text-highlight">-50°C</div>
                    </div>

                    <div className="comparison-row">
                        <div className="row-label">Power Outage Hold</div>
                        <div className="row-standard text-muted">4 - 6 Hours</div>
                        <div className="row-frostvault text-highlight">72+ Hours</div>
                    </div>

                    <div className="comparison-row">
                        <div className="row-label">Insulation Type</div>
                        <div className="row-standard text-muted">PU Foam</div>
                        <div className="row-frostvault text-highlight">Aerogel Vacuum Panel</div>
                    </div>

                    <div className="comparison-row">
                        <div className="row-label">Maintenance Cycle</div>
                        <div className="row-standard text-muted">Every 6 Months</div>
                        <div className="row-frostvault text-highlight">Every 5 Years</div>
                    </div>

                    <div className="comparison-row">
                        <div className="row-label">Lifespan in Polar Climate</div>
                        <div className="row-standard text-muted text-red"><X size={16} inline /> 1 Year (Likely Failure)</div>
                        <div className="row-frostvault text-highlight"><Check size={16} inline /> 15+ Years</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
