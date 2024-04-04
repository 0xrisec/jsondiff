"use client"
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <Link href="/" passHref className="logo" aria-label="Go to homepage">
                    <h1 className="title">JSON <span className="diff">Diff</span></h1>
                    <span className="tag-line">Client-Side Comparison</span>
            </Link>
            <div className='icons'>
                <a href="https://github.com/ROOTBABU/jsondiff" className="anchor-github" target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub">
                    <Image src='/assets/images/github-circle-white-transparent.svg' width = {25} height = {25} className="github-icon" alt="GitHub logo" />
                </a>
                <Link href="/about" passHref className="anchor-info" aria-label="Learn more about us">
                    <Image src='/assets/images/info.png' width = {30} height = {30} className="about" alt="About" />
                </Link>
            </div>
        </header>
    );
};

export default Header;