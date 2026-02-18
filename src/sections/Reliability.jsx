import React from 'react';
import { AlertTriangle, Clock, Truck } from 'lucide-react';
import './Reliability.css';

const Reliability = () => {
    return (
        <section id="reliability" className="reliability-section">
            <div className="container">
                <div className="reliability-content">
                    <h2 className="section-title">THE COST OF <span className="text-alert">FAILURE</span></h2>
                    <p className="reliability-intro">
                        In Antarctica, logistics are limited to 1–2 shipments per year.
                        A broken refrigerator isn't just an inconvenience — it's a mission-ending event.
                    </p>

                    <div className="risk-grid">
                        <div className="risk-item">
                            <Clock size={40} className="risk-icon" />
                            <h4>6-8 Months</h4>
                            <p>Average wait time for replacement parts during winter.</p>
                        </div>
                        <div className="risk-item">
                            <AlertTriangle size={40} className="risk-icon" />
                            <h4>$5M+ Risk</h4>
                            <p>Potential loss in spoiled samples, medicines, and research data.</p>
                        </div>
                        <div className="risk-item">
                            <Truck size={40} className="risk-icon" />
                            <h4>Zero Access</h4>
                            <p>No fly-in support available during blizzard season.</p>
                        </div>
                    </div>

                    <div className="value-proposition">
                        <h3 className="value-title">"Small Investment. Critical Protection."</h3>
                        <p>
                            A FROSTVAULT unit represents <strong>&lt;5%</strong> of your total mission budget,
                            yet protects <strong>100%</strong> of your biological assets.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reliability;
