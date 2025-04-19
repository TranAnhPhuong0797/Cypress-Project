const loginUI = {
    inputField: (fieldName) => {
        return cy.xpath("//input[@name='"+ fieldName +"']");
    },

    userName: () => {
        return cy.xpath(`//input[@name="username"]`);
    },

    passWord: () => {
        return cy.xpath(`//input[@name="password"]`);
    },
};

module.exports = loginUI;