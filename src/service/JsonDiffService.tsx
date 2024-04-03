import { DiffResult, DiffType } from '@/model';
import JsonUtilityService from './JsonUtilityService';

class JsonDiffService {
  private outcome: DiffResult[] = [];
  /**
   * Compares two JSON objects to identify differences.
   * 
   * This method initializes the comparison process by resetting the internal state and delegating
   * the comparison task to a dedicated method. It ensures a clean start for each comparison by
   * clearing any previous outcomes and resetting the current paths in both configurations.
   * 
   * @param leftJson The JSON object on the left side of the comparison.
   * @param leftConfig Configuration for the left JSON object, including its current path.
   * @param rightJson The JSON object on the right side of the comparison.
   * @param rightConfig Configuration for the right JSON object, similar to leftConfig.
   * @returns An array of DiffResult objects, each representing a detected difference.
  */
  public initiateComparison(leftJson: object, leftConfig: Config, rightJson: object, rightConfig: Config): DiffResult[] {
    // Clear previous comparison outcomes
    this.outcome = [];

    // Reset the current path tracking for both JSON objects
    leftConfig.currentPath = [];
    rightConfig.currentPath = [];

    // Perform the comparison
    this.evaluateDifferences(leftJson, leftConfig, rightJson, rightConfig);

    // Return the detected differences
    return this.outcome;
  }

  /**
   * Evaluates and records differences between two JSON values.
   * 
   * This method determines the types of the two values using JsonUtilityService. If the types differ,
   * it immediately records a type mismatch. Otherwise, it proceeds with type-specific comparisons
   * for arrays, objects, primitives (string, number, boolean), and null values.
   * 
   * @param valA The first value to compare.
   * @param configA Configuration for the first value, including its current path.
   * @param valB The second value to compare.
   * @param configB Configuration for the second value, similar to configA.
  */
  private evaluateDifferences(valA: any, configA: Config, valB: any, configB: Config): void {
    const typeA: string = JsonUtilityService.determineValueType(valA);
    const typeB: string = JsonUtilityService.determineValueType(valB);

    // Check for type mismatch
    if (typeA !== typeB) {
      this.pushDiff(configA, JsonUtilityService.buildPath(configA), configB, JsonUtilityService.buildPath(configB), `Both types should be ${typeA}s`, DiffType.TYPE);
      return;
    }

    // Type-specific comparisons
    switch (typeA) {
      case 'array':
        this.diffArray(valA as any[], configA, valB as any[], configB);
        break;
      case 'object':
        this.diffObject(valA, configA, valB, configB);
        break;
      case 'string':
      case 'number':
      case 'boolean':
        this.diffPrimitive(valA, configA, valB, configB, typeA);
        break;
      case 'null':
        // Special case for null comparison
        if (JsonUtilityService.determineValueType(valA) === 'null' && JsonUtilityService.determineValueType(valB) !== 'null') {
          this.pushDiff(configA, JsonUtilityService.buildPath(configA), configB, JsonUtilityService.buildPath(configB), `Both types should be nulls`, DiffType.TYPE);
        }
        break;
    }
  }

  /**
   * Compares two arrays and records differences between them.
   * 
   * This method iterates through both arrays up to the length of the longer array. If an element is missing
   * from one of the arrays, it records this as a difference. For elements present in both arrays, it further
   * evaluates differences by calling `evaluateDifferences` on each pair of elements.
  */
  private diffArray(valA: any[], configA: Config, valB: any[], configB: Config) {
    const maxLength = Math.max(valA.length, valB.length);
    for (let i = 0; i < maxLength; i++) {
      if (i >= valA.length || i >= valB.length) {
        const missingSide = i >= valA.length ? 'left' : 'right';
        const pathA = i >= valA.length ? JsonUtilityService.buildPath(configA) : JsonUtilityService.buildPath(configA, `[${i}]`);
        const pathB = i >= valB.length ? JsonUtilityService.buildPath(configB) : JsonUtilityService.buildPath(configB, `[${i}]`);

        this.pushDiff(configA, pathA, configB, pathB, `Element <code>${i}</code> is missing from the ${missingSide}-side array.`, DiffType.MISSING);
        continue;
      }
      configA.currentPath.push(DiffType.SEPARATOR + `[${i}]`);
      configB.currentPath.push(DiffType.SEPARATOR + `[${i}]`);

      this.evaluateDifferences(valA[i], configA, valB[i], configB);

      configA.currentPath.pop();
      configB.currentPath.pop();
    }
  }

  /**
   * Compares two objects and records differences between them.
   * 
   * This method identifies and records differences between two JSON objects by comparing their properties.
   * It iterates over the union of keys from both objects to ensure no property is missed. For each key, it checks:
   * - If a key is present in one object but missing in the other, it records this as a missing property difference.
   * - If a key is present in both objects, it further evaluates the differences between the corresponding values.
   * 
  */
  private diffObject(valA: any, configA: Config, valB: any, configB: Config) {
    const allKeys = new Set([...Object.keys(valA), ...Object.keys(valB)]);
    configA.currentPath.push(DiffType.SEPARATOR);
    configB.currentPath.push(DiffType.SEPARATOR);
    allKeys.forEach(key => {
      if (valA.hasOwnProperty(key)) configA.currentPath.push(key.replace(DiffType.SEPARATOR, '#'));
      if (!valA.hasOwnProperty(key)) {
        this.pushDiff(configA, JsonUtilityService.buildPath(configA), configB, JsonUtilityService.buildPath(configB, key, true), `The <code>${key}</code> property is missing from the left-side object.`, DiffType.MISSING);
      } else if (!valB.hasOwnProperty(key)) {
        this.pushDiff(configA, JsonUtilityService.buildPath(configA), configB, JsonUtilityService.buildPath(configB), `The <code>${key}</code> property is missing from the right-side object.`, DiffType.MISSING);
      } else {
        if (valB.hasOwnProperty(key)) configB.currentPath.push(key.replace(DiffType.SEPARATOR, '#'));
        this.evaluateDifferences(valA[key], configA, valB[key], configB);
        if (valB.hasOwnProperty(key)) configB.currentPath.pop();
      }
      if (valA.hasOwnProperty(key)) configA.currentPath.pop();
    });
    configA.currentPath.pop();
    configB.currentPath.pop();
  }

  /**
   * Compares two primitive values and records any differences.
   * 
   * This method is used to compare primitive values (such as strings, numbers, and booleans) between two JSON structures.
   * If the values are not equal, it records a difference using the `pushDiff` method. 
   * 
  */
  private diffPrimitive(valA: any, configA: Config, valB: any, configB: Config, type: string) {
    // Check if the two values are not equal
    if (valA !== valB) {
      this.pushDiff(
        configA,
        JsonUtilityService.buildPath(configA),
        configB,
        JsonUtilityService.buildPath(configB),
        `Both sides should be equal ${type}s`,
        DiffType.EQUALITY
      );
    }
  }

  /**
   * Records a difference found between two JSON structures into the outcome array.
   * 
   * This method is responsible for preparing the paths of the differences found,
   * ensuring they are correctly formatted without trailing separators. It then
   * locates the corresponding path objects within each configuration's path array.
   * If either path object cannot be found, an error is thrown. Otherwise, the
   * difference is recorded along with its type and a descriptive message.
   * 
   * @param configA The configuration object for the first JSON structure, including its paths.
   * @param pathA The current path in the first JSON structure where the difference was found.
   * @param configB The configuration object for the second JSON structure, similar to configA.
   * @param pathB The current path in the second JSON structure where the difference was found.
   * @param msg A message describing the difference found.
   * @param type The type of difference (e.g., missing, equality).
  */
  private pushDiff(configA: Config, pathA: string, configB: Config, pathB: string, msg: string, type: string) {
    // Remove trailing separator from pathA if it exists
    if (pathA !== DiffType.SEPARATOR && pathA.charAt(pathA.length - 1) === DiffType.SEPARATOR) {
      pathA = pathA.substring(0, pathA.length - 1);
    }

    // Remove trailing separator from pathB if it exists
    if (pathB !== DiffType.SEPARATOR && pathB.charAt(pathB.length - 1) === DiffType.SEPARATOR) {
      pathB = pathB.substring(0, pathB.length - 1);
    }

    const pathObjA = configA.paths.find(p => p.path === pathA);
    const pathObjB = configB.paths.find(p => p.path === pathB);

    if (!pathObjA || !pathObjB) {
      throw new Error(`Unable to find line number for: ${msg}`);
    }
    this.outcome.push({ pathA: pathObjA, pathB: pathObjB, type, msg });
  }
}

export default JsonDiffService;