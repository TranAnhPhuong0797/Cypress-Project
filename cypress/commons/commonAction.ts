import { commonLocator } from './commonLocator';

export const commonAction = {
    /**
     * Detects the locator type and returns the correct Cypress chainable.
     * Supports:
     * - XPath (// or xpath=prefix)
     * - CSS selectors (css=prefix or default)
     * - id=, name=, class= prefixes
     */
    find: (locator: string): Cypress.Chainable<JQuery<HTMLElement>> => {
        // XPath patterns: starts with //, .//, ( or xpath= prefix
        if (/^(\/\/|\.\/\/|\()/.test(locator) || locator.startsWith('xpath=')) {
        const xp = locator.startsWith('xpath=') ? locator.slice(6) : locator;
        return cy.xpath(xp);
        }
        // CSS prefix
        if (locator.startsWith('css=')) {
        return cy.get(locator.slice(4));
        }
        // ID prefix
        if (locator.startsWith('id=')) {
        return cy.get(`#${locator.slice(3)}`);
        }
        // Name prefix
        if (locator.startsWith('name=')) {
        return cy.get(`[name="${locator.slice(5)}"]`);
        }
        // Class prefix
        if (locator.startsWith('class=')) {
        return cy.get(`.${locator.slice(6)}`);
        }
        // Default to CSS selector
        return cy.get(locator);
    },

    /** Wait until an element is visible */
    waitElementVisible: (
        locator: string,
        timeout: number = Cypress.config('defaultCommandTimeout')
    ): Cypress.Chainable<JQuery<HTMLElement>> => {
        return commonAction.find(locator).should('be.visible', { timeout });
    },

        /** Wait until an element is clickable (visible and enabled) */
    waitElementClickable: (
        locator: string,
        timeout: number = Cypress.config('defaultCommandTimeout')
    ): Cypress.Chainable<JQuery<HTMLElement>> => {
        return commonAction.find(locator)
        .should('be.visible', { timeout })
        .and('not.be.disabled');
    },
}