/// <reference types="Cypress"/>
describe('This is my first test', () => {

    it('Handling mouse Hover with force click', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').invoke('show');
        cy.contains('Top').click({ force: true });
        cy.url().should('include', '#top')
    });

    it('Handling mouse Hover without force click', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', '#top')
    });

});