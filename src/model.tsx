// Define a type for the different types of differences that can be identified.
export enum DiffType {
  TYPE = 'type',
  MISSING = 'missing',
  SEPARATOR = '/',
  EQUALITY = 'eq'
}

// Interface for a single difference found.
export interface DiffResult {
  pathA: { path: string; line: number };
  pathB: { path: string; line: number };
  msg: string;
  type: string;
}

type MessageType = {
  msg: string;
  color: string;
};

export type TypeMessages = {
  [key: string]: MessageType;
};