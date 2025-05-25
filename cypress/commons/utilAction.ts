/// <reference types="cypress" />

/**
 * Utility helper class for common Cypress actions and data generation.
 */
export default class Utils {
    /**
     * Generate a random alphanumeric string.
     * @param length Length of the string (default: 8)
     */
    static generateRandomString(length: number = 8): string {
      return Math.random().toString(36).substring(2, 2 + length);
    }
  
    /**
     * Generate a random number within a range.
     * @param min Minimum value (inclusive)
     * @param max Maximum value (inclusive)
     */
    static generateRandomNumber(min: number = 0, max: number = 1000): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    /**
     * Generate a random email address with optional domain.
     * @param domain Email domain (default: example.com)
     */
    static generateRandomEmail(domain: string = 'example.com'): string {
      const localPart = Utils.generateRandomString(8);
      return `${localPart}@${domain}`;
    }
  
    /**
     * Format a Date object into a locale-specific string.
     * @param date Date to format (default: now)
     * @param locale Locale code (default: en-US)
     * @param options Intl.DateTimeFormatOptions
     */
    static formatDate(
      date: Date = new Date(),
      locale: string = 'en-US',
      options?: Intl.DateTimeFormatOptions
    ): string {
      return date.toLocaleDateString(locale, options);
    }

    /**
     * Get the full year from a Date object.
     * @param date Date to extract year from (default: now)
     */
    static getYear(date: Date = new Date()): number {
        return date.getFullYear();
    }

    /**
     * Get the month from a Date object (1-12).
     * @param date Date to extract month from (default: now)
     */
    static getMonth(date: Date = new Date()): number {
        // getMonth() returns 0-11, so add 1 for human-friendly month
        return date.getMonth() + 1;
    }

    /**
     * Get the current date as a string in ISO format (YYYY-MM-DD).
     * @param locale Optional locale code for formatting (default: en-US)
     * @param options Intl.DateTimeFormatOptions for custom formatting
     */
    static getCurrentDate(
        locale: string = 'en-US',
        options?: Intl.DateTimeFormatOptions
    ): string {
        return new Date().toLocaleDateString(locale, options);
    }

    /**
     * Get the current date formatted according to a pattern.
     * Supports tokens: DD, MM, YYYY
     * @param pattern Format pattern (default: 'DD-MM-YYYY')
     */
    static getFormattedCurrentDate(
        pattern: string = 'DD-MM-YYYY'
    ): string {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());

        return pattern
        .replace('DD', day)
        .replace('MM', month)
        .replace('YYYY', year);
    }
  }
  