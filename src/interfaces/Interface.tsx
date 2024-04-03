interface Config {
    currentPath: string[];
    out: string;
    indent: number;
    line: number;
    paths: { path: string; line: number }[];
}

interface ValidationResult {
    isValid: boolean;
    errorMessage?: string;
}