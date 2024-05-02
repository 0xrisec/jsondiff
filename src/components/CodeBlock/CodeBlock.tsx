"use client"
import { DiffResult } from '@/model';
import React, { useMemo } from 'react';
import './CodeBlock.css';

interface CodeBlockProps {
  json: string;
  diffs: DiffResult[];
  onDiffSelect: (lineNumber: number, isLeft: boolean) => void;
  selectedDiffs: DiffResult[];
  isLeft?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ json, diffs, onDiffSelect, selectedDiffs, isLeft }) => {
  const jsonLines = useMemo(() => json.split('\n'), [json]);

  const getDiffClass = (lineNumber: number): string => {
    const diff = diffs.find(d => (isLeft ? d.pathA.line : d.pathB.line) === lineNumber);
    const selectedDiff = selectedDiffs.find(d => (isLeft ? d.pathA.line : d.pathB.line) === lineNumber);
    let classes = diff ? diff.type.toLowerCase() : '';
    if (selectedDiff?.pathA.line === lineNumber || selectedDiff?.pathB.line === lineNumber) {
      classes += ' selected';
    }
    return classes;
  };

  const lineElements = useMemo(() => jsonLines.map((line, index) => {
    const lineNumber = index + 1;
    const diffClass = getDiffClass(lineNumber);
    const hasDiffClass = diffClass.trim().length > 0;

    return (
      <div key={index} className={`json-line ${diffClass}`}
        onClick={hasDiffClass ? () => onDiffSelect(lineNumber, !!isLeft) : undefined}>
        <span className="json-content">{line}</span>
      </div>
    );
  }), [jsonLines, isLeft, onDiffSelect, getDiffClass]);

  return (
    <div className="container">
      <div className="line-numbers">
        {jsonLines.map((_, index) => (
          <span key={index} className="line-number">
            {index + 1}
          </span>
        ))}
      </div>
      <div className="json-container">{lineElements}</div>
    </div>
  );
};

export default CodeBlock;