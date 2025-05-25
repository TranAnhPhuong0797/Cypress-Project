export const commonLocator = {
    navBarBytext: (text: string) =>
        cy.xpath(`//ul[@class='oxd-main-menu']//span[text()='${text}'`),
    
    userPicture: () =>
        cy.xpath(`//*[contains(@class,'userdropdown-tab')]/img`),

    userName: () =>
        cy.xpath(`//*[contains(@class,'userdropdown-tab')]/*[contains(@class,'userdropdown-name')]`),

    userDropdown: (menu: string) =>
        cy.xpath(`//*[contains(@class,'dropdown-menu')]//*[contains(text(),'${menu}')]`),

    buttonExpandAndNarrow: () =>
        cy.xpath(`//button[@class = 'oxd-icon-button oxd-main-menu-button']`),
}