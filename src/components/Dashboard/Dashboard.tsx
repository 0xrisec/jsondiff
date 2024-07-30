"use client"

import { DiffResult } from '@/model';
import JsonDiffService from '@/service/JsonDiffService';
import JsonUtilityService from '@/service/JsonUtilityService';
import React, { useCallback, useEffect, useState } from 'react';
import DiffViewer from '../DiffViewer/DiffViewer';
import Footer from '../Footer/Footer';
import Footer2 from '../Footer/Footer2';
import Header from '../Header/Header';
import { JsonInputForm } from '../JsonInputForm/JsonInputForm';
import Details from '../Section/Details';
import './Dashboard.css';

interface Props {
  oldLeftJson?: any,
  oldRightJson?: any
}

const Dashboard: React.FC<Props> = ({ oldLeftJson, oldRightJson })  => {
  // State to manage the visibility of DiffViewer and store formatted JSONs
  const [isComparisonValid, setIsComparisonValid] = useState(false);
  const [leftFormattedJson, setLeftFormattedJson] = useState('');
  const [rightFormattedJson, setRightFormattedJson] = useState('');
  const [diffs, setDiffs] = useState<DiffResult[]>([]); // Initialize diffs state
  // const [selectedTypes, setSelectedTypes] = useState<{ [key: string]: boolean }>({});
  // const [diffCounts, setDiffCounts] = useState<{ [type: string]: number }>({});

  const handleCompare = useCallback((leftJson: string, rightJson: string) => {
    try {
      const configA = { out: '', indent: 0, currentPath: [], paths: [], line: 1 };
      const configB = { out: '', indent: 0, currentPath: [], paths: [], line: 1 };

      const leftConfig = JsonUtilityService.formatJson(configA, JSON.parse(leftJson));
      const rightConfig = JsonUtilityService.formatJson(configB, JSON.parse(rightJson));

      const diffService = new JsonDiffService();
      const results = diffService.initiateComparison(JSON.parse(leftJson), leftConfig, JSON.parse(rightJson), rightConfig);

      setDiffs(results);
      setLeftFormattedJson(leftConfig.out);
      setRightFormattedJson(rightConfig.out);
      setIsComparisonValid(true);
    } catch (error) {
      console.error("Error during comparison:", error);
      alert("An error occurred during the comparison. Please check the console for more details.");
    }
  }, []);

  const setupNewDiff = () => {
    setIsComparisonValid(false);
    setDiffs([]);
  };

  useEffect(() => {
    if(oldLeftJson && oldRightJson ) {
      setLeftFormattedJson(JSON.stringify(oldLeftJson, null, 2));
      setRightFormattedJson(JSON.stringify(oldRightJson, null, 2));
    } else {
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
      }
  }, []);
  
  // // Extract unique types of diffs
  // useEffect(() => {
  //   const uniqueTypes = new Set(diffs.map(diff => diff.type));
  //   const initialTypes = {};
  //   uniqueTypes.forEach(type => {
  //     initialTypes[type] = true; 
  //   });
  //   setSelectedTypes(initialTypes);
  // }, [diffs]);

  // useEffect(() => {
  //   const counts = diffs.reduce((acc, diff) => {
  //     acc[diff.type] = (acc[diff.type] || 0) + 1;
  //     return acc;
  //   }, {} as { [type: string]: number });
  //   setDiffCounts(counts);
  // }, [diffs]);

  // const handleTypeSelectionChange = (type: string) => {
  //   setSelectedTypes(prev => ({ ...prev, [type]: !prev[type] }));
  // };

  return (
    <div id="main" className="main-container">
      <Header />
      <div className='body-container'>
        {isComparisonValid ? (
          <>
            {/* <div>
            {Object.keys(selectedTypes).map(type => (
              <label key={type}>
                <input
                  type="checkbox"
                  checked={selectedTypes[type]}
                  onChange={() => handleTypeSelectionChange(type)}
                />
                {`${type} (${diffCounts[type] || 0})`}
              </label>
            ))}
          </div> */}
            <div className='d-flex result-container'>
              {diffs?.length > 0 ? (<div className='total-diff'>
                <label>Comparison Result:&nbsp;</label><span>{`${diffs.length} differences identified.`}</span>
              </div>) : (<div className='total-diff'>
                <span>No differences found. The JSON objects are identical.</span>
              </div>)}
              <div className='center w100'>
                <button onClick={setupNewDiff} className="new-comparison">New Comparison</button>
              </div>
            </div>
            {/* <DiffViewer leftJson={leftFormattedJson} rightJson={rightFormattedJson} diffs={diffs} selectedTypes = {selectedTypes}/> */}
            <DiffViewer leftJson={leftFormattedJson} rightJson={rightFormattedJson} diffs={diffs} />
          </>
        ) : (
          <JsonInputForm onCompare={handleCompare} oldLeftJson={leftFormattedJson} oldRightJson={rightFormattedJson} />
        )}
      </div>
      <Details />
      <Footer />
      {/* <Footer2 /> */}
    </div>
  );
};

export default Dashboard;