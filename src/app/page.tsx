import Dashboard from "@/components/Dashboard/Dashboard";
import { Metadata } from "next";
import styles from "./page.module.css";

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

export default function Home() {
  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
}
