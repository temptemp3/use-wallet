/**
 * Generates a UUID version 4 string. This function attempts to use the `crypto.randomUUID()` function from the Web
 * Crypto API if it is available, otherwise it uses a polyfill method.
 *
 * NOTE: `crypto.randomUUID()` is not available in non-secure contexts; only localhost and HTTPS.
 * @returns {string} a valid UUID version 4 string.
 * @see {@link https://stackoverflow.com/a/2117523}
 */
export declare function generateUuid(): string;
