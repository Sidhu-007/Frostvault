import React from 'react';
import { Cpu, Zap, Layers, Box, Thermometer, BatteryCharging } from 'lucide-react';
import './Technology.css';

const features = [
    {
        icon: <Cpu size={32} />,
        title: "Cryo-Core Compressor",
        desc: "Proprietary lubrication system prevents seizing at -50°C, a common failure point in standard refrigeration."
    },
    {
        icon: <Layers size={32} />,
        title: "Triple-Layer Insulation",
        desc: "Aerogel-infused vacuum panels provide 4x thermal retention compared to standard PU foam."
    },
    {
        icon: <Zap size={32} />,
        title: "Eco-Power Efficiency",
        desc: "Optimized for renewable energy grids. Runs efficiently on solar/wind setups common in research stations."
    },
    {
        icon: <Box size={32} />,
        title: "Armored Chassis",
        desc: "Impact-resistant polymer exterior designed to survive rough logistic transport on icebreakers and sleds."
    },
    {
        icon: <Thermometer size={32} />,
        title: "Precision Control",
        desc: "Micro-processor maintains 2°C–8°C stability with <0.5°C deviation, essential for vaccines and samples."
    },
    {
        icon: <BatteryCharging size={32} />,
        title: "72h Passive Cooling",
        desc: "Maintains safe temperatures for 3 days during power blackouts, ensuring sample integrity."
    }
];

const Technology = () => {
    return (
        <section id="technology" className="tech-section">
            <div className="container">
                <div className="tech-header">
                    <h2 className="section-title">ENGINEERING <span className="text-gradient">SUPERIORITY</span></h2>
                    <p className="section-subtitle">Why FROSTVAULT survives where others freeze.</p>
                </div>

                <div className="tech-grid">
                    {features.map((item, index) => (
                        <div key={index} className="tech-card">
                            <div className="tech-icon-wrapper">{item.icon}</div>
                            <div className="tech-content">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology;
