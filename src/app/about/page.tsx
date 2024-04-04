import Header from "@/components/Header/Header";
import { Metadata } from "next";
import Head from "next/head";
import styles from "./about.module.css";

export const metadata: Metadata = {
    title: 'JSON Diff - Validate, Format, and Compare JSON',
    description: 'Validate, format, and compare JSON data with JSON Diff.',
    authors: [{ name: "rootbabu", url: "https://www.linkedin.com/in/vikas-kumawat-rootbabu/" }],
    applicationName: 'jsondiff',
    generator: 'jsondiff',
    keywords: "json diff, semantic json compare tool, json comparison tool, Format JSON, Compare JSON documents, Securely Compare JSON, JSON comparison",
    robots: "json diff, json comparison",
    openGraph: {
        type: "website",
        url: "https://jsondiff.in/",
        title: "JSON Diff - Validate, Format, and Compare JSON",
        description: "Validate, format, and compare JSON data with JSON Diff.",
        siteName: "jsondiff",
        images: [{
            url: "https://jsondiff.in/assets/images/jsondiff.png",
        }],
    }
};

export default function About() {
    return (
        <>
            <Header />
            <section className={styles['section-container']}>
                <h1 className={styles["title"]}>JSON Diff - Validate, Format, and Compare JSON</h1>
                <div className={styles["profile-container"]}>
                    <div className={styles["profile"]}>
                        <ul className={styles["authors-list"]}>
                            <li className={styles["authors-list-item"]}>
                                <div className={styles["author"]}>
                                    <img alt="Author's Profile Picture" src="https://media.licdn.com/dms/image/D4E03AQGZHcbJEHDUag/profile-displayphoto-shrink_200_200/0/1710176839212?e=1717632000&v=beta&t=6hfWyA7YFxTRlKuu3sRGRI8o6OT5M3NXsxdHVZl1z0c" className="avatar avatar-48 photo" height="48" width="48" decoding="async" />
                                    <a className={styles["author-name"]} href="https://www.linkedin.com/in/vikas-kumawat-rootbabu/">Vikas Kumawat</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <span className={styles["posted-on"]}>Last Updated:
                        <a href="#" rel="bookmark">
                            <time className="published">April 4, 2024</time>
                        </a>
                    </span>
                </div>
                <div className={styles['content']}>
                    <p className={styles["paragraph"]}>
                        Welcome to JSONDiff! 🎉 This is a modern, Next.js based application that makes comparing two JSON data structures. This tool is designed to assist anyone who works with JSON data, providing a clear, intuitive, and ad-free interface for JSON comparison.
                        Whether you're a developer, a data analyst, or just someone who frequently works with JSON, you're going to love the simplicity and efficiency JSONDiff brings to your workflow. And the best part? It's completely ad-free!
                    </p>
                    <h3 className={styles["subtitle"]}>1. Why Choose this JSONDiff Tool Over Others? 🤔</h3>
                    <ul className={styles["unorder-list"]}>
                        <li>
                            <span className={styles["icon"]}>🚫</span>
                            <strong className={styles["line-title"]}>Ad-Free Experience:</strong> Other tools often display intrusive Google ads that can detract from a professional environment, especially during screen-sharing sessions. While we understand the necessity of funding, our tool uses non-intrusive promotions that won't compromise your professional image. Most other tools do not offer an ad-free experience and those that do often fail to provide clear and informative JSON difference messages. The UI has been designed to be simple and focused on delivering meaningful difference messages, avoiding the distraction of Google ads.
                        </li>
                        <li>
                            <span className={styles["icon"]}>🧼</span>
                            <strong className={styles["line-title"]}>Handles Dirty JSON:</strong> JSONDiff Tool not only compares but also offers options to clean and fix these JSON structures before comparison. Encountering modified, encoded, or "dirty" JSON is common during development. Most tools lack this feature to fix JSON, setting our tool apart.
                        </li>
                        <li>
                            <span className={styles["icon"]}>🔒</span>
                            <strong className={styles["line-title"]}>Privacy and Security:</strong> Your JSON data is yours alone. Ensure that your data is never shared with anyone and that comparisons are done securely in your browser. Plus, our source code is open-source and deployed on GitHub Pages, allowing you to review the source code for complete transparency.
                        </li>
                    </ul>

                    <h3 className={styles["subtitle"]}>2. Features 🌟</h3>
                    <ul className={styles["unorder-list"]}>
                        <li>
                            <a id="side-by-side-comparison" className={styles["anchor"]} aria-label="Permalink: Side-by-side-comparison" href="#side-by-side-comparison"></a>
                            <strong className={styles["line-title"]}>A. Side-by-side JSON comparison:</strong>
                            <br />
                            <p>This refers to comparing two JSON data structures, likely to identify differences or similarities between them.</p>
                            
                            <details open={true} className={styles["video-container"]}>
                                <summary className="video-summary">
                                    <span aria-label="Video description compare.mp4" className="m-1">Comaprsion Example</span>
                                    <span className="dropdown-caret"></span>
                                </summary>
                                <video className={styles["comparesion-video"]} src="/assets/videos/compare.mp4" data-canonical-src="/assets/videos/compare.mp4" controls={true} muted={true}>
                                </video>
                            </details>
                        </li>
                        <li>
                            <a id="fix-invalid-json" className={styles["anchor"]} aria-label="Permalink: fix-invalid-json" href="#fix-invalid-json"></a>
                            <strong className={styles["line-title"]}>B. Fix invalid JSON:</strong> 
                            <br />
                            <p>
                                Ours doesn't just compare JSON, it also helps clean and fix it during comparison.
                                During development, JSON data can sometimes be messy or encoded, making it hard to work with.
                                With JSONDiff Tool, you don't need to go elsewhere to clean it up.
                                Just click "fix", and it'll sort out those special characters for you.
                            </p>
                            <details open={true} className={styles["video-container"]}>
                                <summary className="video-summary">
                                    <span aria-label="Video description compare.mp4" className="m-1">JSON fix Example</span>
                                    <span className="dropdown-caret"></span>
                                </summary>
                                <video className={styles["comparesion-video"]} src="/assets/videos/dirty-json-comparision.mp4" data-canonical-src="/assets/videos/compare.mp4" controls={true} muted={true}>
                                </video>
                            </details>
                            <p>Here's what the JSONdiff fix feature can do for you:</p>
                            <ul className={styles['invalid-json-item']}>
                                <li><strong>Quotes Correction</strong>: Adds or fixes missing quotes around keys.</li>
                                <li><strong>Escape Characters</strong>: Adds or corrects missing escape characters.</li>
                                <li><strong>Comma Handling</strong>: Fixes missing commas and cleans trailing commas.</li>
                                <li><strong>Bracket Closure</strong>: Adds or fixes missing closing brackets.</li>
                                <li><strong>Quote Standardization</strong>: Replaces special quote characters (e.g.,<code>"..."</code>) with standard double quotes.</li>
                                <li><strong>Whitespace Normalization</strong>: Replaces special whitespace characters with regular spaces.</li>
                                <li><strong>Boolean and Null Values</strong>: Converts Python constants (None, True, False) to their JSON equivalents (null, true, false).</li>
                                <li><strong>Comment Removal</strong>: Removes comments, including both block <code>(/* ... */)</code> and line <code>(// ...)</code> comments.</li>
                                <li><strong>JSONP Notation Cleaning</strong>: Cleans JSONP notation (e.g., <code>callback({"{...}"})</code>).</li>
                                <li><strong>Escaped String Cleaning</strong>: Removes unnecessary escape characters from already escaped strings (e.g., {'{\\"stringified\\": \\"content\\"}'}).</li>
                                <li><strong>MongoDB Data Type Conversion</strong>: Converts MongoDB data types <code>(e.g., NumberLong(2), ISODate("2022-03-03T05:02:11.111Z"))</code> to standard JSON formats.</li>
                                <li><strong>String Concatenation</strong>: Concatenates split strings (e.g., "longer text" + "more text on next line").</li>
                            </ul>
                            <p>By addressing these issues, the fix feature ensures your JSON data is syntactically correct and ready for use in your applications.</p>
                        </li>
                        <li>
                            <a id="json-syntax-validation" className={styles["anchor"]} aria-label="Permalink: json-syntax-validation" href="#json-syntax-validation"></a>
                            <strong className={styles["line-title"]}>C. JSON syntax validation:</strong>
                            <br />
                            <p>
                            JSON might seem simple, but even a tiny mistake can mess it up. 
                            Our tool's validator checks your JSON data to make sure it follows all the rules. 
                            It ensures your JSON is formatted right and structured properly, so you can trust it to work smoothly.
                            </p>
                        </li>

                        <li>
                            <a id="format-json" className={styles["anchor"]} aria-label="Permalink: format-json" href="#format-json"></a>
                            <strong className={styles["line-title"]}>D. Format JSON:</strong>
                            <br />
                            <p>
                                In this tool, when you compare JSON data structures, we use a parsing algorithm that creates a new, formatted, and sorted copy of the JSON. So, if you want to format your JSON, simply input the same data on both sides and click compare. The result will show identical JSONs with the added bonus of being formatted.
                            </p>
                        </li>

                        <li>
                            <a id="secure-comparison" className={styles["anchor"]} aria-label="Permalink: secure-comparison" href="#secure-comparison"></a>
                            <strong className={styles["line-title"]}>E. Securely Compare JSON, Right in Your Browser:</strong>
                            <br />
                            <p>
                                All comparisons happen right in your browser, ensuring privacy. Our source code is open for all to see on GitHub, so you can check it out for total transparency.
                            </p>
                        </li>
                    </ul>
                    <h3 className={styles["subtitle"]}>3. Installation 💻</h3>
                    <br /><p className={styles["paragraph"]}>
                        To get started with JSONDiff on your local machine, follow these simple installation steps:
                        <br /><code> 
                            # Clone the repository<br />
                            git clone https://github.com/ROOTBABU/jsondiff.git <br />
                            <br />
                            # Navigate to the project directory<br />
                            cd jsondiff<br />
                            <br />
                            # Install dependencies<br />
                            npm install<br />
                            <br />
                            # Run the project<br />
                            npm run dev
                        </code>
                    </p>
                    <p className={styles["paragraph"]}>Open http://localhost:3000 with your browser to see the result.</p>
                    
                    <h3 className={styles["subtitle"]}>4. Your Feedback Matters! ❤️</h3>
                    <br />
                    <p className={styles["paragraph"]}>We value your feedback! If you have suggestions, encounter issues, or need assistance, please reach out. Your input helps us improve JSONDiff for everyone.
                    <br /><br />Thank you for choosing JSONDiff. Happy JSON comparing! 🌟</p>
                </div>
            </section>
        </>
    );
}
