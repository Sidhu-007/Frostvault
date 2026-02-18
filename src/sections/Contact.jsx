import React from 'react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">INITIATE <span className="text-primary">DEPLOYMENT</span></h2>
                    <p className="section-subtitle">
                        Secure your mission's biological assets. Contact our institutional sales team for technical consultation and custom logistics planning.
                    </p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <span className="label">HQ Direct Line</span>
                            <span className="value">+91 9905052006</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Institutional Email</span>
                            <span className="value">deployments@frostvault.global</span>
                        </div>
                        <div className="detail-item">
                            <span className="label">Global HQ</span>
                            <span className="value">NMIT, Bangalore</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper glass-panel">
                    <form className="contact-form">
                        <h3 className="form-title">Request Mission Consultation</h3>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Organization Name</label>
                                <input type="text" placeholder="e.g. National Science Foundation" />
                            </div>
                            <div className="form-group">
                                <label>Country of Operation</label>
                                <input type="text" placeholder="e.g. Antarctica, Greenland" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Project Type</label>
                                <select>
                                    <option>Research Station</option>
                                    <option>Military / Defense</option>
                                    <option>Medical Outpost</option>
                                    <option>Government Mission</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Budget Range (USD)</label>
                                <select>
                                    <option>$50k - $100k</option>
                                    <option>$100k - $500k</option>
                                    <option>$500k - $1M</option>
                                    <option>$1M+</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Operating Environment Details</label>
                            <textarea placeholder="Describe temperature range, power availability, transport constraints..." rows="4"></textarea>
                        </div>

                        <Button variant="primary" className="submit-btn">Submit Inquiry</Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
