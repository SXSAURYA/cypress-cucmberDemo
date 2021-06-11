/// <reference types="Cypress"/>
describe('This is my first test', () => {

    it('Handling the alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click();
        cy.on('window:alert', (txt) => expect(txt).to.equal('Hello , share this practice page and share your knowledge'))
        cy.get('input#confirmbtn').click();
        cy.on('window:confirm', (txt) => expect(txt).to.contains('you want to confirm?'))
    });


    it('Handling the child tabs', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://www.rahulshettyacademy.com')
        cy.go('back')
        cy.url().should('include', 'AutomationPractice/')
    });

});