"use client"
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import JsonUtilityService from '../../service/JsonUtilityService';
import './JsonInputForm.css'
import leftSampleJson from '../../../public/assets/left-sample.json';
import rightSampleJson from '../../../public/assets/right-sample.json';
import { jsonrepair } from '../../../public/assets/lib/jsonrepair';

interface Props {
  onCompare: (leftJson: string, rightJson: string) => void;
  oldLeftJson: string,
  oldRightJson: string
}

export const JsonInputForm: React.FC<Props> = ({ onCompare, oldLeftJson, oldRightJson }) => {
  const [leftJson, setLeftJson] = useState<string>(oldLeftJson ? oldLeftJson: '');
  const [rightJson, setRightJson] = useState<string>(oldRightJson ? oldRightJson : '');
  const [leftValidationResult, setLeftValidationResult] = useState<{ isValid: boolean; errorMessage?: string }>({ isValid: true });
  const [rightValidationResult, setRightValidationResult] = useState<{ isValid: boolean; errorMessage?: string }>({ isValid: true });
  const sampleLeftJson = JSON.stringify(leftSampleJson);
  const sampleRightJson = JSON.stringify(rightSampleJson);
  const [isJsonDirty, setIsJsonDirty] = useState(false); // State to track if JSON is dirty

  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>, side: 'left' | 'right') => {
  //   const file = event.target.files ? event.target.files[0] : null;
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e: ProgressEvent<FileReader>) => {
  //       const content = e.target?.result;
  //       if (content && typeof content === 'string') {
  //         if (side === 'left') {
  //           setLeftJson(content);
  //         } else {
  //           setRightJson(content);
  //         }
  //       }
  //     };
  //     reader.readAsText(file);
  //   }
  // };

  useEffect(() => {
    setLeftJson(oldLeftJson);
  }, [oldLeftJson]);

  useEffect(() => {
    setRightJson(oldRightJson);
  }, [oldRightJson]);
  
  const loadSampleData = () => {
    setLeftJson(sampleLeftJson);
    setRightJson(sampleRightJson);
    setLeftValidationResult({ isValid: true });
    setRightValidationResult({ isValid: true });
  };

  const onCompareClick = (leftJson: string, rightJson: string) => {
    let leftValidationResult:ValidationResult = { isValid: true, errorMessage: '' };
    let rightValidationResult:ValidationResult = { isValid: true, errorMessage: '' };

    if (!leftJson.trim()) {
      leftValidationResult = { isValid: false, errorMessage: 'Left JSON is not provided.' };
    } else {
      leftValidationResult = JsonUtilityService.validateJson(leftJson);
    }

    if (!rightJson.trim()) {
      rightValidationResult = { isValid: false, errorMessage: 'Right JSON is not provided.' };
    } else {
      rightValidationResult = JsonUtilityService.validateJson(rightJson);
    }
    
    setLeftValidationResult(leftValidationResult);
    setRightValidationResult(rightValidationResult);

    if (leftValidationResult.isValid && rightValidationResult.isValid) {
      onCompare(leftJson, rightJson);
      setIsJsonDirty(false); 
    } else if(leftJson?.length || rightJson?.length) {
      setIsJsonDirty(true);
    }
  };

  const handleFixJson = useCallback(() => {
    let repairedLeftJson:string | undefined, repairedRightJson:string | undefined;
    let leftFixed = leftValidationResult.isValid, rightFixed = rightValidationResult.isValid;
  
    if (!leftFixed && leftJson?.length) {
      try {
        repairedLeftJson = jsonrepair(leftJson);
        leftFixed = true;
      } catch (error) {
        console.error("Error repairing left JSON with jsonrepair:", error);
      }

      if (leftFixed && repairedLeftJson) {
        setLeftJson(repairedLeftJson);
        setLeftValidationResult({ isValid: true });
      }
    }
  
    if (!rightFixed && rightJson?.length) {
      try {
        repairedRightJson = jsonrepair(rightJson);
        rightFixed = true;
      } catch (error) {
        console.error("Error repairing right JSON with jsonrepair:", error);
      }
      if (rightFixed && repairedRightJson) {
        setRightJson(repairedRightJson);
        setRightValidationResult({ isValid: true });
      }
    }
    if ((!leftFixed || !rightFixed) && leftJson?.length && rightJson?.length) {
      alert("Unable to repair JSON. If you believe this JSON should be fixable, please report this issue on GitHub for further analysis");
    } else {
      setIsJsonDirty(false);
    }
  }, [leftJson, rightJson, leftValidationResult, rightValidationResult]);
  return (
    <>
      <div className="input-form-container">
        <div className="input-form-header">
        {isJsonDirty && leftJson?.length && rightJson?.length && (
          <div className="center">
            <button onClick={handleFixJson} className="fix-json">Fix JSON</button>
          </div>
          )}
          <div className="sample-data-div">
            <a href="#" id="sampleData" onClick={(e) => { e.preventDefault(); loadSampleData(); }}>[ Load Sample ]</a>
          </div>
          <div className="center">
            <button className="compare" onClick={() => onCompareClick(leftJson, rightJson)}>Compare</button>
          </div>
        </div>
        <div className="input-form">
          <div className="left-area">
            <textarea
              spellCheck={false}
              placeholder="Enter JSON for left side"
              value={leftJson}
              className={(leftValidationResult && !leftValidationResult.isValid) ? 'err-text-area' : 'text-area'}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setLeftJson(e.target.value)}
            ></textarea>
            {leftValidationResult && !leftValidationResult.isValid && <pre className="error">{leftValidationResult.errorMessage}</pre>}
            {/* <span className="fileInput">
          or <input type="file" onChange={(e) => handleFileChange(e, 'left')} />
        </span> */}
          </div>
          <div className="w-10"></div>
          <div className="right-area">
            <textarea
              spellCheck={false}
              placeholder="Enter JSON for right side"
              value={rightJson}
              className={(rightValidationResult && !rightValidationResult.isValid) ? 'err-text-area' : 'text-area'}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setRightJson(e.target.value)}
            ></textarea>
            {rightValidationResult && !rightValidationResult.isValid && <pre className="error">{rightValidationResult.errorMessage}</pre>}

            {/* 
        <span className="fileInput">
          or <input type="file" onChange={(e) => handleFileChange(e, 'right')} />
        </span> */}
          </div>
        </div>
      </div>
    </>
  );
};