import React from 'react';
import { Tent, Microscope, Building2, Anchor, Stethoscope } from 'lucide-react';
import './Market.css';

const industries = [
    { icon: <Tent size={32} />, name: "Antarctic Stations", desc: "Long-term food & sample storage for overwinter crews." },
    { icon: <Microscope size={32} />, name: "Scientific Labs", desc: "Precise control for ice core samples and biological specimens." },
    { icon: <Building2 size={32} />, name: "Government Ops", desc: "Mission-critical infrastructure for sovereign polar bases." },
    { icon: <Stethoscope size={32} />, name: "Field Hospitals", desc: "Vaccine chain and plasma storage in zero-infrastructure zones." },
    { icon: <Anchor size={32} />, name: "Naval Expeditions", desc: "Heavy-duty refrigeration for icebreakers and research vessels." }
];

const Market = () => {
    return (
        <section id="applications" className="market-section">
            <div className="container">
                <h2 className="section-title text-center">MISSION <span className="text-secondary">ENVIRONMENTS</span></h2>

                <div className="market-grid">
                    {industries.map((item, index) => (
                        <div key={index} className="market-card">
                            <div className="market-icon">{item.icon}</div>
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Market;
