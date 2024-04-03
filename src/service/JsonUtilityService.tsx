import jsonlint from 'jsonlint-mod';

class JsonUtilityService {
  // Defines a constant used as a separator in JSON paths
  private static SEPARATOR = '/';

  /**
   * Validates a JSON string for correct syntax.
   * @param jsonString The JSON string to validate.
   * @returns An object indicating whether the JSON is valid and an error message if it is not.
  */
  static validateJson(jsonString: string): ValidationResult {
    try {
      jsonlint.parse(jsonString);
      return { isValid: true };
    } catch (error) {
      return { isValid: false, errorMessage: error instanceof Error ? error.message : 'Invalid JSON' };
    }
  }

  /**
   * Formats a JSON value according to its type.
   * @param config The current configuration object being used for formatting.
   * @param val The value to format.
   * @returns The updated configuration object after formatting.
  */
  static formatJson(config: Config, val: any): Config {
    const type = this.determineValueType(val);
    switch (type) {
      case 'array':
        this.formatArray(config, val);
        break;
      case 'object':
        this.formatJsonObj(config, val);
        break;
      case 'string':
        config.out += `"${this.unescapeSpecialCharacters(val)}",`;
        break;
      case 'number':
      case 'boolean':
      case 'null':
        config.out += `${val},`;
        break;
      default:
        console.warn(`Unknown type: ${type}`);
    }
    return config;
  }

  /**
   * Determines the type of a given value.
   * @param value The value whose type is to be determined.
   * @returns A string representing the type of the value.
  */
  public static determineValueType(value: any): string {
    if (Array.isArray(value)) {
      return 'array';
    }
    if (value === null) {
      return 'null';
    }
    return typeof value;
  }

  /**
   * Begins the formatting process for a JSON object.
   * @param config The current configuration object being used for formatting.
  */
  static beginObjectFormatting(config: Config): void {
    config.indent++;
    config.out += '{';

    if (config.paths.length === 0) {
      config.paths.push({
        path: this.buildPath(config),
        line: config.line
      });
    }
  }

  /**
   * Formats a JSON object, including all its properties.
   * @param config The current configuration object being used for formatting.
   * @param data The JSON object to format.
  */
  static formatJsonObj(config: Config, data: any): void {
    this.beginObjectFormatting(config);
    config.currentPath.push(this.SEPARATOR);

    Object.keys(data).sort().forEach(key => {
      this.addJsonProperty(config, key, data[key]);
    });

    this.finishJsonObject(config);
    config.currentPath.pop();
  }

  /**
   * Adds a JSON property to the formatted output.
   * @param config The current configuration object being used for formatting.
   * @param key The key of the property to add.
   * @param value The value of the property to add.
  */
  private static addJsonProperty(config: Config, key: string, value: any): void {
    config.out += `${this.newLine(config)}${this.generateIndentation(config.indent)}"${this.unescapeSpecialCharacters(key)}": `;
    config.currentPath.push(key.replace(this.SEPARATOR, '#'));
    config.paths.push({
      path: this.buildPath(config),
      line: config.line
    });
    this.formatJson(config, value);
    config.currentPath.pop();
  }

  /**
   * Builds a path string for the current location in the JSON structure.
   * @param config The current configuration object being used for formatting.
   * @param prop An optional property name to append to the path.
   * @param flag An optional flag indicating how to handle the property name.
   * @returns A string representing the current path.
  */
  public static buildPath(config: Config, prop?: string, flag?: boolean): string {
    let fullPath = config.currentPath.join('');
    if (prop) {
      fullPath += flag ? `${prop.replace(this.SEPARATOR, '#')}` : `${this.SEPARATOR}${prop.replace(this.SEPARATOR, '#')}`;
    }
    return fullPath || this.SEPARATOR;
  }


  /**
   * Retrieves a sorted list of properties from an object.
   * @param obj The object from which to retrieve properties.
   * @returns A sorted array of property names.
  */
  static getSortedProperties(obj: object): string[] {
    let props: string[] = [];
    for (let prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        props.push(prop);
      }
    }

    props.sort((a, b) => a.localeCompare(b));

    return props;
  }

  /**
   * Inserts a new line in the formatted output and increments the line counter.
   * @param config The current configuration object being used for formatting.
   * @returns A newline character.
  */
  static newLine(config: Config): string {
    config.line++;
    return '\n';
  }

  /**
   * Generates indentation for the current level of nesting in the formatted output.
   * @param indent The current indentation level.
   * @returns A string of spaces representing the current indentation.
  */
  static generateIndentation(indent: number): string {
    return '    '.repeat(indent);
  }

  /**
   * Unescapes special characters in a string value.
   * @param val The string value to unescape.
   * @returns The unescaped string.
  */
  static unescapeSpecialCharacters(val: string): string {
    if (!val) return val;

    const replacements: { [key: string]: string } = {
      '\\': '\\\\',
      '"': '\\"',
      '\n': '\\n',
      '\b': '\\b',
      '\f': '\\f',
      '\r': '\\r',
      '\t': '\\t',
    };

    return val.replace(/[\\\"\n\b\f\r\t]/g, (match) => replacements[match]);
  }

  /**
   * Formats a JSON array, including all its elements.
   * @param config The current configuration object being used for formatting.
   * @param array The JSON array to format.
  */
  static formatArray(config: Config, array: any[]): void {
    config.out += '[';
    config.indent++;

    if (config.paths.length === 0) {
      config.paths.push({
        path: this.buildPath(config),
        line: config.line,
      });
    }

    array.forEach((arrayVal: any, index: number) => {
      const indentation = this.generateIndentation(config.indent);
      config.out += `${this.newLine(config)}${indentation}`;
      const indexPath = `[${index}]`;

      config.paths.push({
        path: this.buildPath(config, indexPath),
        line: config.line,
      });

      config.currentPath.push(`${this.SEPARATOR}${indexPath}`);
      this.formatJson(config, arrayVal);
      config.currentPath.pop();
    });

    this.trimTrailingComma(config);
    config.indent--;
    config.out += `${this.newLine(config)}${this.generateIndentation(config.indent)}]`;
    config.out += config.indent !== 0 ? ',' : this.newLine(config);
  }

  /**
   * Removes a trailing comma from the formatted output.
   * @param config The current configuration object being used for formatting.
  */
  static trimTrailingComma(config: Config) {
    if (config.out.charAt(config.out.length - 1) === ',') {
      config.out = config.out.substring(0, config.out.length - 1);
    }
  }

  /**
   * Finishes the formatting of a JSON object by closing the object and adjusting indentation.
   * @param config The current configuration object being used for formatting.
  */
  static finishJsonObject(config: Config): void {
    config.indent--;
    this.trimTrailingComma(config);
    config.out += `${this.newLine(config)}${this.generateIndentation(config.indent)}}`;
    config.out += config.indent !== 0 ? ',' : this.newLine(config);
  }
}

export default JsonUtilityService;