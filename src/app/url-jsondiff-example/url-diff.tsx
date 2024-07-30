"use client"

import Dashboard from "@/components/Dashboard/Dashboard";
import { useEffect, useState } from "react";

export default function UrlExample() {
  const [leftFormattedJson, setLeftFormattedJson] = useState('');
  const [rightFormattedJson, setRightFormattedJson] = useState('');
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const leftUrl = urlParams.get('left');
    const rightUrl = urlParams.get('right');

    if (leftUrl && rightUrl) {
      Promise.all([fetch(leftUrl), fetch(rightUrl)])
        .then(async ([leftResponse, rightResponse]) => {
          if (!leftResponse.ok || !rightResponse.ok) {
            throw new Error('Failed to fetch JSON files');
          }
          const leftJson = await leftResponse.json();
          const rightJson = await rightResponse.json();
          setLeftFormattedJson(JSON.stringify(leftJson, null, 2));
          setRightFormattedJson(JSON.stringify(rightJson, null, 2));
        })
        .catch(error => {
          console.error("Error fetching JSON files:", error);
          alert("An error occurred while fetching the JSON files. Please check the console for more details.");
        });
    }
  }, []);
  
  return (
    <main>
      <Dashboard oldLeftJson={leftFormattedJson} oldRightJson={rightFormattedJson} />
    </main>
  );
}
