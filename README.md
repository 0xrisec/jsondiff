# JSON Diff Tool🛠️

Welcome to JSONDiff! 🎉 This is a modern, Next.js based application that makes comparing two JSON data structures. This tool is designed to assist anyone who works with JSON data, providing a clear, intuitive, and ad-free interface for JSON comparison.

## Table of Contents

- [JSON Diff Tool🛠️](#json-diff-tool️)
  - [Table of Contents](#table-of-contents)
  - [Why Choose this JSONDiff Tool Over Others? 🤔](#why-choose-this-jsondiff-tool-over-others-)
  - [Features 🌟](#features-)
  - [Getting Started 🙏](#getting-started-)
    - [How to Compare JSON](#how-to-compare-json)
    - [Working with Dirty JSON](#working-with-dirty-json)
  - [Installation 💻](#installation-)
    - [Learn More](#learn-more)
  - [Security 🛡️](#security-️)
  - [Your Feedback Matters! ❤️](#your-feedback-matters-️)

## Why Choose this JSONDiff Tool Over Others? 🤔

While there are existing solutions for JSON comparison, I believe there's room for improvement, especially for professional and enterprise-level work. Here's why this JSONDiff Tool stands out:

- **Ad-Free Experience 🚫**: Other tools often display intrusive Google ads that can detract from a professional environment, especially during screen-sharing sessions. While we understand the necessity of funding, our tool uses non-intrusive promotions that won't compromise your professional image. Most other tools do not offer an ad-free experience and those that do often fail to provide clear and informative JSON difference messages. The UI has been designed to be simple and focused on delivering meaningful difference messages, avoiding the distraction of Google ads.

- **Handles Dirty JSON 🧼**: JSONDiff Tool not only compares but also offers options to clean and fix these JSON structures before comparison. Encountering modified, encoded, or "dirty" JSON is common during development. Most tools lack this feature to fix JSON, setting our tool apart.  

- **Privacy and Security 🔒**: Your JSON data is yours alone. Ensure that your data is never shared with anyone and that comparisons are done securely in your browser. Plus, our source code is open-source and deployed on GitHub Pages, allowing you to review the source code for complete transparency.

## Features 🌟

- Validate JSON syntax effortlessly.
- Format JSON for readability.
- Compare two JSON documents side-by-side.
- Ad-free, professional-grade tool.
- Fix invalid JSON
- Securely Compare JSON, Right in Your Browser, Open-source and transparent.

## Getting Started 🙏

To begin using the website for your JSON comparison needs, simply navigate to [https://jsondiff.in/](https://jsondiff.in/).

### How to Compare JSON

https://github.com/ROOTBABU/jsondiff/assets/42447141/8b3acb91-4092-491a-97eb-1ef779cfe427

### Working with Dirty JSON

https://github.com/ROOTBABU/jsondiff/assets/42447141/a517dae2-5a12-4868-a32e-e037409c8b3b

Here's what the JSONdiff fix feature can do for you:

- **Quotes Correction**: Adds or fixes missing quotes around keys.
- **Escape Characters**: Adds or corrects missing escape characters.
- **Comma Handling**: Fixes missing commas and cleans trailing commas.
- **Bracket Closure**: Adds or fixes missing closing brackets.
- **Quote Standardization**: Replaces special quote characters (e.g., “...”) with standard double quotes.
- **Whitespace Normalization**: Replaces special whitespace characters with regular spaces.
- **Boolean and Null Values**: Converts Python constants (`None`, `True`, `False`) to their JSON equivalents (`null`, `true`, `false`).
- **Comment Removal**: Removes comments, including both block (`/* ... */`) and line (`// ...`) comments.
- **JSONP Notation Cleaning**: Cleans JSONP notation (e.g., `callback({...})`).
- **Escaped String Cleaning**: Removes unnecessary escape characters from already escaped strings (e.g., `{\\"stringified\\": \\"content\\"}`).
- **MongoDB Data Type Conversion**: Converts MongoDB data types (e.g., `NumberLong(2)`, `ISODate("2022-03-03T05:02:11.111Z")`) to standard JSON formats.
- **String Concatenation**: Concatenates split strings (e.g., `"longer text" + "more text on next line"`).

By addressing these issues, the fix feature ensures your JSON data is syntactically correct and ready for use in your applications.

## Installation 💻

To get started with JSONDiff on your local machine, follow these simple installation steps:

```bash
# Clone the repository
git clone https://github.com/0xrisec/jsondiff.git

# Navigate to the project directory
cd jsondiff

# Install dependencies
npm install

# Run the project
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Security 🛡️

Our tool performs all comparisons directly within your browser, ensuring your data's privacy. This can be verified by monitoring the Network tab in your browser's developer tools while a comparison is in progress.  Initially, it initiates two essential calls, which are crucial for the dynamic rendering and functionality of a Next.js application. These calls retrieve necessary code chunks, page-specific data, and metadata for SEO optimization.

![Screenshot 2024-04-13 125951](https://github.com/0xrisec/jsondiff/assets/42447141/632addb8-7aba-44e0-92f9-abf051536979)

Throughout the comparison process, you will observe that no additional network requests are made, ensuring that your data remains private.

## Your Feedback Matters! ❤️

We value your feedback! If you have suggestions, encounter issues, or need assistance, please reach out. Your input helps us improve JSONDiff for everyone.

Thank you for choosing JSONDiff. Happy JSON comparing! 🌟
