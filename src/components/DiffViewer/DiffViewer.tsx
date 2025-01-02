"use client"
import { DiffResult, TypeMessages } from '@/model';
import { useEffect, useState, useCallback, useRef } from 'react';
import CodeBlock from '../CodeBlock/CodeBlock';
import './DiffViewer.css'

interface DiffViewerProps {
  leftJson: string;
  rightJson: string;
  diffs: DiffResult[];
}

const DiffViewer: React.FC<DiffViewerProps> = ({ leftJson, rightJson, diffs }) => {
  const [currentDiffIndex, setCurrentDiffIndex] = useState(0);
  const [selectedDiffs, setSelectedDiffs] = useState<DiffResult[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<{ [key: string]: boolean }>({});
  const [diffCounts, setDiffCounts] = useState<{ [type: string]: number }>({});

  const leftCodeBlockRef = useRef<HTMLDivElement>(null);
  const rightCodeBlockRef = useRef<HTMLDivElement>(null);

  const highlightPrevDiff = () => changeDiff(-1);
  const highlightNextDiff = () => changeDiff(1);

  const filteredDiffs = diffs.filter(diff => selectedTypes[diff.type]);
  const onDiffSelect = useCallback((lineNumber: number, isLeft: boolean | null) => {
    const result = diffs.filter(diff => {
      if (isLeft === null) {
        return lineNumber === diff.pathA.line || lineNumber === diff.pathB.line;
      }
      return isLeft ? lineNumber === diff.pathA.line : lineNumber === diff.pathB.line;
    });
    setSelectedDiffs(result);
  }, [diffs]);

  // Automatically select the first diff on component mount
  useEffect(() => {
    if (diffs.length > 0) {
      onDiffSelect(diffs[0].pathA.line, null);
    }
  }, [diffs, onDiffSelect]);

  const scrollToDiff = (lineNumber: number, isLeft: boolean) => {
    const codeBlockRef = isLeft ? leftCodeBlockRef : rightCodeBlockRef;
    const element = codeBlockRef.current?.querySelector(`[data-line-number="${lineNumber}"]`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const changeDiff = (direction: number) => {
    const newIndex = currentDiffIndex + direction;
    if (newIndex >= 0 && newIndex < diffs.length) {
      setCurrentDiffIndex(newIndex);
      const diff = diffs[newIndex];
      onDiffSelect(diff.pathA.line, null);
      scrollToDiff(diff.pathA.line, true); // Assuming you want to scroll the left side
    }
  };

  useEffect(() => {
    const uniqueTypes = new Set(diffs.map(diff => diff.type));
    const initialTypes:{ [key: string]: boolean } = {};
    uniqueTypes.forEach(type => {
      initialTypes[type] = true;
    });
    setSelectedTypes(initialTypes);
  }, [diffs]);

  useEffect(() => {
    const counts = diffs.reduce((acc, diff) => {
      acc[diff.type] = (acc[diff.type] || 0) + 1;
      return acc;
    }, {} as { [type: string]: number });
    setDiffCounts(counts);
  }, [diffs]);

  const handleTypeSelectionChange = (type: string) => {
    setSelectedTypes(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <>
      <div className={`diff-viewer ${filteredDiffs && diffs?.length > 0 ? "grid-template-columns-1-6" : "grid-template-columns-1"}`}>
        {
          filteredDiffs && diffs?.length > 0 && <div className="diff-status">
            <div className='diff-status-container'>
              <div className="diff-checkbox">
                {Object.keys(selectedTypes).map(type => {
                  // Define a mapping of type keys to user-friendly messages
                  const typeMessages:TypeMessages = {
                    eq: {"msg":"Unequal values", "color": "green"},
                    missing: {"msg":"Missing properties", "color": "blue"},
                    type: {"msg":"Type mismatches", "color": "red"}
                  };

                  // Use the type to get the corresponding message, defaulting to the type itself if not found
                  const message = typeMessages[type].msg || type;
                  const color = typeMessages[type].color || "#FF204E";
                  return (
                    <label key={type}>
                      <input
                        className={`${color}-checkbox`}
                        type="checkbox"
                        checked={selectedTypes[type]}
                        onChange={() => handleTypeSelectionChange(type)}
                      />
                      {`${diffCounts[type] || 0} ${message}`}
                    </label>
                  );
                })}
              </div>
              <div className='diff-msg'>
                <div id="buttons">
                  <button type="button" title="Previous difference" onClick={highlightPrevDiff}><i className="arrow left"></i></button>
                  <span id="currentDiffIndex">{`${currentDiffIndex + 1} of ${diffs.length}`}</span>
                  <button type="button" title="Next difference" onClick={highlightNextDiff}><i className="arrow right"></i></button>
                </div>
                <div className="msg-container">
                  {selectedDiffs.map((diff, index) => {
                    const parts = diff.msg.split(/<code>|<\/code>/).filter(part => part);

                    return (
                      <div className="msg" key={index} onClick={() => scrollToDiff(diff.pathA.line, true)}>
                        {parts.map((part, partIndex) => {
                          const isCode = (partIndex % 2) === 1;
                          if (isCode) {
                            return <span key={partIndex} className="code-style">{part}</span>;
                          } else {
                            return <span key={partIndex}>{part}</span>;
                          }
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        }
        <div className="diffcontainer">
          <div ref={leftCodeBlockRef}>
            <CodeBlock json={leftJson} diffs={filteredDiffs} isLeft={true} onDiffSelect={onDiffSelect} selectedDiffs={selectedDiffs} />
          </div>
          <div ref={rightCodeBlockRef}>
            <CodeBlock json={rightJson} diffs={filteredDiffs} onDiffSelect={onDiffSelect} selectedDiffs={selectedDiffs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiffViewer;
