import Dashboard from "@/components/Dashboard/Dashboard";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: 'JSON Diff | JSON Compare tool',
  description: 'Validate, format, and compare JSON data with JSON Diff. Visually compare JSON objects, format them for readability, and fix errors in dirty JSON - all for free online. The ultimate JSON diff utility.',
  authors: [{ name: "0xrisec", url: "https://www.linkedin.com/in/0xrisec/" }],
  applicationName: 'jsondiff',
  generator: 'jsondiff',
  keywords: "jsondiff, json compare, semantic json compare tool, json comparison tool, Format JSON, Compare JSON documents, Securely Compare JSON, JSON comparison",
  robots: "jsondiff, json comparison",
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

export default function Home() {
  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
}
