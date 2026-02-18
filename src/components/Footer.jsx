import React from 'react';
import './Footer.css';
import { Twitter, Linkedin, Globe, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">FROSTVAULT</h2>
                        <p>Engineered for -50°C. Built for survival.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Technology</h4>
                            <a href="#technology">Cryo-Core</a>
                            <a href="#technology">Insulation</a>
                            <a href="#reliability">Reliability</a>
                        </div>

                        <div className="link-group">
                            <h4>Applications</h4>
                            <a href="#applications">Research</a>
                            <a href="#applications">Medical</a>
                            <a href="#applications">Defense</a>
                        </div>

                        <div className="link-group">
                            <h4>Corporate</h4>
                            <a href="#about">About Us</a>
                            <a href="#contact">Contact</a>
                            <a href="#">Partners</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 FROSTVAULT Global Industries. All rights reserved.</p>
                    <div className="social-links">
                        <Twitter size={20} />
                        <Linkedin size={20} />
                        <Globe size={20} />
                        <Mail size={20} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
