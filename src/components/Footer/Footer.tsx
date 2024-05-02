"use client"
import React from 'react';
import Link from 'next/link';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-text">
          <h1>JSON Diff</h1>
          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              <li>
                <Link href="/about#side-by-side-comparison" passHref aria-label="Side-by-side JSON comparison">
                  Side-by-side JSON comparison
                </Link>
              </li>
              <li>
                <Link href="/about#fix-invalid-json" passHref aria-label="Fix invalid JSON">
                  Fix invalid JSON
                </Link>
              </li>
              <li>
                <Link href="/about#json-syntax-validation" passHref aria-label="JSON syntax validation">
                  JSON syntax validation
                </Link>
              </li>
              <li>
                <Link href="/about#format-json" passHref aria-label="Format JSON">
                  Format JSON
                </Link>
              </li>
              <li>
                <Link href="/about#secure-comparison" passHref aria-label="Securely Compare JSON, Right in Your Browser">
                  Securely Compare JSON, Right in Your Browser
                </Link>
              </li>
            </ul>
            <div className="mt-5">
              <p className='px-4'>Compare, format, validate, and fix JSON data effortlessly with JSON Diff. Our tool operates entirely client-side using JavaScript, ensuring a secure and ad-free experience. Perfect for professional use, JSON Diff is the top choice for accurate JSON comparisons. It&apos;s open-source; you can check out the <a className="text-[#ff4469]" target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub" href="https://github.com/0xrisec/jsondiff">Github</a> repository for more details.</p>
              <p className='px-4'>Developed by <a href="https://www.linkedin.com/in/0xrisec/" rel="noopener noreferrer" target="_blank" className='text-[#ff4469]'>0xrisec</a></p>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;