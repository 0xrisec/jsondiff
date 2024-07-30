import { Metadata } from "next";
import UrlExample from "./url-diff";

export const metadata: Metadata = {
  title: 'Compare JSON from URLs | JSON Diff Tool',
  description: 'Compare JSON files from URLs with ease! Our JSON diff tool lets you input URLs with JSON data in the "left" and "right" query parameters to visually compare and find differences.',
  authors: [{ name: "0xrisec", url: "https://www.linkedin.com/in/0xrisec/" }],
  applicationName: 'jsondiff',
  generator: 'jsondiff',
  keywords: "jsondiff, json compare, url json compare, compare json from url, json diff tool, online json comparison",
  robots: "index, follow", 
  openGraph: {
    type: "website",
    url: "https://jsondiff.in/", 
    title: "Compare JSON from URLs | JSON Diff Tool",
    description: "Quickly compare JSON data directly from URLs. Input your URLs with JSON data in the query parameters and visualize the differences.",
    siteName: "jsondiff",
    images: [{
      url: "https://jsondiff.in/assets/images/jsondiff.png", 
    }],
  }
};

export default function Example() {
  return (
   <>
    <UrlExample></UrlExample>
   </>
  );
}
