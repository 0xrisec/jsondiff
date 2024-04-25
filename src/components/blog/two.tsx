"use client"
import Image from "next/image";
import { useState } from "react";
import { CopyBlock, dracula } from 'react-code-blocks';

const Two = () => {
    const languageDemo = `fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Manipulate JSON data here
    })
    .catch(error => console.error('Error fetching JSON:', error));`
    const jsonData = `<script>
  const jsonData = {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com"
  };
  
  // Access JSON data
  console.log(jsonData.name); // Output: John Doe
</script>`

    const simpleData = `<div id="user-info"></div>
<script>
    const jsonData = {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com"
    };

    const userInfo = document.getElementById('user-info');
    userInfo.innerHTML = \`
    <p>Name: \${jsonData.name}</p>
    <p>Age: \${jsonData.age}</p>
    <p>Email: \${jsonData.email}</p>
    \`;
</script>`

    const nestedData = `<ul id="users-list"></ul>

<script>
  const jsonData = [
    { "name": "John Doe", "age": 30 },
    { "name": "Jane Smith", "age": 25 }
  ];

  const usersList = document.getElementById('users-list');
  jsonData.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = \`Name: \${user.name}, Age: \${user.age}\`;
    usersList.appendChild(listItem);
  });
</script>
`
    return <>
        <section className="pt-6 xl:pb-6 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <article>
                <div>
                    <header>
                        <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
                            <dl><div><dt className="sr-only">Published on</dt><dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time dateTime={new Date('2024-04-25').toISOString()}>April 25, 2024</time></dd></div></dl>
                            <div>
                                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">How to Display JSON Data in HTML: A Comprehensive Guide</h1>
                            </div>
                            <div className="relative w-full h-auto pt-5">
                                <Image
                                    alt="Guide Cover Image"
                                    className="mx-auto w-full h-auto object-cover md:w-1/2 lg:w-1/3 xl:w-2/3"
                                    src="/assets/images/blogs/json-html-guide.png"
                                    width={480}
                                    height={480}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                        <dl className="pb-10 pt-6 border-b border-gray-200 xl:pt-11 dark:border-gray-700">
                            <dt className="sr-only">Authors</dt>
                            <dd>
                                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                    <li className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-2 w-full">
                                        <div className="flex items-center space-x-2">
                                            <Image alt="Author's Profile Picture" className="rounded-full" loading="lazy" src="/assets/images/profile.jpg" height={48} width={48} decoding="async" />
                                            <dl className="whitespace-nowrap text-sm font-medium leading-5">
                                                <dt className="sr-only">Name</dt>
                                                <dd className="text-gray-900 dark:text-gray-100">Vikas Kumawat</dd>
                                                <dt className="sr-only">LinkedIn</dt>
                                                <dd>
                                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/0xrisec/" className="text-rose-600">@LinkedIn</a>
                                                </dd>
                                            </dl>
                                        </div>
                                        <dl className="whitespace-nowrap text-sm font-medium leading-5 whitespace-break-spaces">
                                            <dd className="text-gray-900 dark:text-gray-100">Powered by <a href="/" className="text-rose-600 underline">jsondiff.in</a> - Validate, Format, and Compare JSON Data.</dd>
                                        </dl>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </header>
                    <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
                        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                            <div className="prose max-w-none pb-8 dark:prose-invert">
                                <h2 className="text-white text-2xl font-bold font-sans mb-6 mt-12" id="introduction">Introduction</h2>
                                <p className="mb-5 text-gray-300 font-sans">In today's digital landscape, harnessing the power of data is paramount for web developers and designers alike. JSON (JavaScript Object Notation) has emerged as a popular format for structuring data due to its simplicity and versatility. Integrating JSON data into HTML allows for dynamic and interactive web experiences. In this guide, we will delve into the intricacies of displaying JSON data in HTML, providing you with step-by-step instructions and best practices.</p>

                                <h2 className="text-white text-2xl font-bold font-sans mb-6 mt-12" id="understanding-json">Understanding JSON and Its Structure</h2>
                                <p className="mb-5 text-gray-300 font-sans">Before diving into the process of displaying JSON data in HTML, it's crucial to grasp the fundamentals of JSON and its structure. JSON is a lightweight data interchange format that is easy for humans to read and write and for machines to parse and generate. It consists of key-value pairs and arrays, making it an ideal choice for transmitting data between a server and a web application.</p>

                                <h2 className="text-white text-2xl font-bold font-sans mb-6 mt-12" id="table-of-contents">Key Concepts of JSON:</h2>
                                <ol className="leading-7 pl-6 mt-5 mb-5 text-gray-300">
                                    <li className="list-decimal mb-5 mt-5">
                                        <b>Objects:</b>
                                        <p className="mt-3 mb-5 text-gray-300 font-sans">An object in JSON is enclosed in curly braces <span>{ }</span> and consists of key-value pairs separated by commas. Keys are strings, and values can be any valid JSON data type, including objects, arrays, strings, numbers, booleans, and null.</p>
                                    </li>
                                    <li className="list-decimal mb-5 mt-5">
                                        <b>Arrays</b>
                                        <p className="mt-3 mb-5 text-gray-300 font-sans">Arrays in JSON are ordered lists of values enclosed in square brackets <span>[]</span>. Each value within an array can be of any data type, including objects and arrays themselves.</p>
                                    </li>
                                    <li className="list-decimal mb-5 mt-5">
                                        <b>Data Types:</b>
                                        <p className="mt-3 mb-5 text-gray-300 font-sans">JSON supports various data types, including strings, numbers, booleans, arrays, objects, and null.</p>
                                    </li>
                                </ol>

                                <h2 className="text-white text-2xl font-bold font-sans mb-6 mt-12" id="accessing-json-data">Accessing JSON Data</h2>
                                <p className="mb-5 text-gray-300 font-sans">Once you have a clear understanding of JSON's structure, the next step is to access and manipulate JSON data within your HTML document. JavaScript, being the language of the web, provides powerful tools for interacting with JSON data.</p>

                                <h3 className="text-white font-semibold text-xl mt-6 mb-3 leading-normal font-sans" id="using-javascript-to-access-json-data">Using JavaScript to Access JSON Data</h3>
                                <p className="mb-5 text-gray-300 font-sans">To access JSON data in HTML, you can use JavaScript's built-in fetch API to retrieve JSON from a remote server or define JSON directly within your script.</p>

                                <CopyBlock
                                    text={languageDemo}
                                    language="javascript"
                                    theme={dracula}
                                />

                                <p className="mb-5 text-gray-300 font-sans">Alternatively, if you have JSON data embedded within your HTML document, you can access it directly using JavaScript.</p>

                                <CopyBlock
                                    text={jsonData}
                                    language="javascript"
                                    theme={dracula}
                                />

                                <h2 className="text-white text-2xl font-bold font-sans mb-6 mt-12" id="rendering-json-data">Rendering JSON Data in HTML</h2>
                                <p className="mb-5 text-gray-300 font-sans">Once you've retrieved or defined your JSON data, the next step is to render it within your HTML document. There are several approaches to achieve this, depending on the complexity of your data and the desired outcome.</p>

                                <h3 className="text-white text-xl font-bold font-sans mb-4" id="simple-data-display">Simple Data Display</h3>
                                <p className="mb-5 text-gray-300 font-sans">For simple JSON structures consisting of key-value pairs, you can directly insert the data into HTML elements using JavaScript.</p>


                                <CopyBlock
                                    text={simpleData}
                                    language="javascript"
                                    theme={dracula}
                                />

                                <h2 className="text-white text-2xl font-bold font-sans mb-6 mt-12" id="nested-data-display">Nested Data Display</h2>
                                <p className="mb-5 text-gray-300 font-sans">For JSON data with nested structures, such as objects within objects or arrays of objects, you may need to iterate through the data to display it dynamically.</p>

                                <CopyBlock
                                    text={nestedData}
                                    language="javascript"
                                    theme={dracula}
                                />

                                <h2 className="text-white text-2xl font-bold font-sans mb-6 mt-12" id="best-practices">Best Practices for Displaying JSON Data in HTML</h2>
                                <p className="mb-5 text-gray-300 font-sans">While displaying JSON data in HTML, it's essential to adhere to best practices to ensure readability, accessibility, and maintainability of your code.</p>

                                <h3 className="text-white text-xl font-bold font-sans mb-4">1. Maintain Separation of Concerns</h3>
                                <p className="mb-5 text-gray-300 font-sans">Keep your JavaScript logic separate from your HTML markup by using external JavaScript files or defining scripts at the end of your HTML document. This separation enhances code organization and readability.</p>

                                <h3 className="text-white text-xl font-bold font-sans mb-4">2. Use Semantic HTML</h3>
                                <p className="mb-5 text-gray-300 font-sans">When structuring your HTML, use semantic elements such as section, article, header, footer, and nav to provide meaning and context to your content. This practice improves accessibility and search engine optimization (SEO).</p>

                                <h3 className="text-white text-xl font-bold font-sans mb-4">3. Implement Error Handling</h3>
                                <p className="mb-5 text-gray-300 font-sans">Include error handling mechanisms in your JavaScript code to gracefully handle scenarios such as failed JSON retrieval or parsing errors. This ensures a smooth user experience and prevents potential runtime errors.</p>

                                <h2 className="text-white text-2xl font-bold font-sans mb-6 mt-12" id="conclusion">Conclusion</h2>
                                <p className="mb-5 text-gray-300 font-sans">Displaying JSON data in HTML opens up a world of possibilities for creating dynamic and interactive web applications. By understanding the structure of JSON, accessing data with JavaScript, and employing best practices for rendering data in HTML, you can enhance the user experience and unlock the full potential of your web projects.</p>
                                <p className="mb-5 text-gray-300 font-sans">Start harnessing the power of JSON in your HTML today and take your web development skills to new heights!</p>

                                <h2 className="text-white text-2xl font-bold font-sans mb-6 mt-12" id="external-links">External Links</h2>
                                <ul className="list-disc mt-5 mb-5 pl-7 text-gray-300">
                                    <li className="mt-2 mb-2 text-base pl-2 text-left">
                                        <a href="https://www.json.org/json-en.html" className="text-primary-500 text-rose-600 font-medium underline">JSON Documentation</a>
                                    </li>
                                    <li className="mt-2 mb-2 text-base pl-2 text-left">
                                        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" className="text-primary-500 text-rose-600 font-medium underline">MDN Web Docs - Fetch API</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </>;
};

export default Two;