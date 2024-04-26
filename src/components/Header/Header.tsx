"use client"
import Image from 'next/image';
import Link from 'next/link';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <Link href="/" passHref className="logo" aria-label="Go to homepage">
                <div className="title">JSON <span className="diff">Diff</span></div>
                <span className="tag-line">Client-Side Comparison</span>
            </Link>
            <div className='icons'>
                <Link href="https://github.com/0xrisec/jsondiff" className="anchor-github" target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub">
                    <Image src='/assets/images/github-circle-white-transparent.svg' width = {25} height = {25} className="github-icon" alt="GitHub logo" />
                </Link>
                <Link href="/blog" passHref className="anchor-info" aria-label="Blogs">
                    <Image src='/assets/images/blog.png' width = {30} height = {30} className="about" alt="About" />
                </Link>
                <Link href="/about" passHref className="anchor-info" aria-label="Learn more about us">
                    <Image src='/assets/images/info.png' width = {30} height = {30} className="about" alt="About" />
                </Link>
            </div>
        </header>
    );
};

export default Header;