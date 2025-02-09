import React from "react";
import {
    FacebookFilled,
    TwitterCircleFilled,
    InstagramFilled,
    LinkedinFilled,
    GithubFilled
} from '@ant-design/icons';
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Helping dogs in need find the owner of their dreams.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: support@fetchdogs.com</p>
                    <p>Phone: (555) 555-5555</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FacebookFilled className="social-icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <TwitterCircleFilled className="social-icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <InstagramFilled className="social-icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <LinkedinFilled className="social-icon" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <GithubFilled className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Fetch Inc - Site by Stephen Prahl - All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
