"use client"
import './Header.css'

const Header = () => {
    return (
        <header className="app-header">
            <a href="/" className="logo">
                <h1 className="title">JSON <span className="diff">Diff</span></h1>
                <span className="tag-line">Client-Side Comparison</span>
            </a>

            <a href="https://github.com/ROOTBABU/jsondiff" target="_blank" rel="noopener noreferrer">
                <img src='/assets/images/github-circle-white-transparent.svg' className="github-icon" alt="GitHub logo" />
            </a>
        </header>
    );
};

export default Header;