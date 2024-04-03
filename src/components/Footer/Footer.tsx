"use client"
import React from 'react';
import './Footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
            <h1>JSON Diff</h1>
            <div className="content">
                <span>Side-by-side JSON comparison</span>|
                <span>JSON syntax validation</span>| 
                <span>Fix invalid JSON</span>| 
                <span>Format JSON</span>| 
                <span>Securely Compare JSON, Right in Your Browser</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;