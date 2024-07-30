import { Metadata } from "next";
import { LargeJsonDiff } from "./large-json-diff";

export const metadata: Metadata = {
  title: 'Compare Large JSON Files Online | JSON Diff Tool',
  description: 'Effortlessly compare and analyze differences in large JSON files with our intuitive JSON Diff tool. Get accurate results and visualize changes clearly. Try it now for free!',
  authors: [{ name: "0xrisec", url: "https://www.linkedin.com/in/0xrisec/" }],
  applicationName: 'jsondiff',
  generator: 'jsondiff',
  keywords: "json diff, compare json, large json comparison, json compare tool, json difference, compare large json files, online json diff, json comparison tool, visualize json changes",
  robots: "index, follow", 
  openGraph: {
    type: "website",
    url: "https://jsondiff.in/", 
    title: "Compare Large JSON Files | JSON Diff Tool",
    description: "Quickly compare and analyze differences in large JSON data structures with our user-friendly JSON Diff tool. Get clear visualizations and accurate results.",
    siteName: "jsondiff",
    images: [{
      url: "https://jsondiff.in/assets/images/jsondiff.png", 
      alt: "JSON Diff Tool" 
    }],
  }
};

import leftSampleJson from '../../../public/assets/left-sample.json';
import rightSampleJson from '../../../public/assets/right-sample.json';

export default function Example() {
  return (
   <>
    <LargeJsonDiff leftJsonPath={leftSampleJson} rightJsonPath={rightSampleJson}></LargeJsonDiff>
   </>
  );
}
