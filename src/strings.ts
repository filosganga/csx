/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */
export function calc(exp: string): string {
  return `calc(${exp})`;
}

/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */
export function quote(val: number | string): string {
  const val2 = (val || val === 0 ? val.toString() : '').replace(/\'/g, "\\'");
  return `'${val2}'`;
}

/**
 * Returns the value with !important on the end.  If the value provided is a CSSHelper, it will
 * be converted to a string by necessity, but will look like it is the original type to TypeScript.
 */
export function important<T>(val: T): T {
  if (!val && (val as any as number) !== 0) {
    return '' as any as T;
  }
  return `${val.toString()} !important` as any as T;
}

/**
 * Returns the string in a url()
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/url
 */
export function url(val: string): string {
  return `url(${val || ''})`;
}

/**
 * Returns the value as a string or an empty string if null or undefined.
 * @param value
 * @param fallbackValue
 */
export function coalesce<T extends number | string>(
  value: T | undefined
): string {
  return !value && value !== 0 ? '' : value.toString();
}